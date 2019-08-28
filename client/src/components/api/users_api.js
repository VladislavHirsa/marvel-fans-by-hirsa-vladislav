import axios from 'axios'
import { setUserData, REGISTER_FAIL } from '../../redux/auth_reducer';
import { loadUser } from './auth_api';
import { setAllProfiles } from '../../redux/users_reducer';

export const registerUser = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      const body = JSON.stringify({ name, email, password });
    
      try {
          await axios.post('/api/users', body, config)
          .then(res => {
            dispatch(setUserData(res.data));
            localStorage.setItem('token', res.data.token);
            dispatch(loadUser());
          })
          .catch(err => alert(err.response.data.errors[0].msg))
      } catch (err) {
        console.log(err)
        dispatch({
          type: REGISTER_FAIL
        });
      }
    };
  



    export const getAllProfiles = () => async(dispatch) => {
        try {
            const res = await axios.get('/api/profile');
            // console.log(res)
            dispatch(setAllProfiles(res.data))
        } catch (err) {
            
        }
    }