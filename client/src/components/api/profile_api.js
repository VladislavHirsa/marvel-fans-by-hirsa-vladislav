import axios from "axios";

import { setUserProfile, failsCreateUserProfile, failsGetProfile, setUserById} from "../../redux/profile_reducer";
import { getUserData } from "./auth_api";


/////
export const getProfileMe = () => async(dispatch) => {
    try {
  const res = await axios.get('/api/profile/me');
   dispatch(setUserProfile(res.data))
     

   } catch (error) {
     console.log(error.response, 'GetProfileMe')
     dispatch(failsGetProfile())
   }
}


/////
  export const CreateUserProfile = (formData) => async(dispatch) => {

    try {
    const res = await axios.post('/api/profile', formData)
    console.log(res, "CreateUserProfile")
     dispatch(setUserProfile(res.data));
     dispatch(getUserData());
     
    } catch (error) {
     console.log(error.response, 'CreateUserProfile')
     dispatch(failsCreateUserProfile());
    }
  }


  /////

  export const getUserById = (user_id) => async(dispatch) => {
      try {
          const res = await axios.get(`/api/profile/user/${user_id}`)
          dispatch(setUserById(res.data))
          
      } catch (err) {
          
      }
  
}
  
 