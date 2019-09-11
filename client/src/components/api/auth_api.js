import axios from "axios";
import {  setToken, logIn, LogOut, getUser } from "../../redux/auth_reducer";
import setAuthToken from "../AuthToken/setAuthToken";
// import REGISTER_SUCCESS from '../../redux/auth_reducer'
import {AUTH_ERROR, LOGIN_FAIL } from '../../redux/auth_reducer'
import { clearUserProfile } from "../../redux/profile_reducer";
import { clearPost } from "../../redux/posts_reducer";


export const instance = axios.create({
  headers: {
        'Content-Type': 'application/json'
  }
})


     
    export const getUserData = () => async(dispatch) => {

      try {
      const res = await axios.get('/api/auth')
        dispatch(getUser(res.data))
      } catch (err) {
        console.log(err.message, "GetUserDAta")

      }
   }


  
// Load User
export const loadUser = () => async dispatch => {

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    
    try {
      const res = await axios.get('/api/auth');
      console.log(res, 'LoadUser')
      dispatch(setToken( res.data));
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };


// Login User
  export const logInAPI = ({ email, password }) => async dispatch => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({ email, password });

    try {
      await axios.post('/api/auth', body, config)
      .then(res => {
        dispatch(logIn(res.data));
        localStorage.setItem('token', res.data.token);
        dispatch(loadUser());
      })
      .catch(err => alert(err.response.data.errors[0].msg))
      } catch (err) {
      console.log(err)
    dispatch({
        type: LOGIN_FAIL
      });
    }
  };
  

  
  export const logOut = () => (dispatch) => {
      dispatch(clearUserProfile())
      dispatch(LogOut())
      dispatch(clearPost())
    
    
    
  }


