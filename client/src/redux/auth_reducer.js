// const SET_USER_DATA = 'SET_USER_DATA';
export const USER_LOADED = 'USER_LOADED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const ACCOUNT_DELETED = 'ACCOUNT_DELETED';
export const GET_USER_DATA = 'GET_USER_DATA';


const initialState = {
    user:{
      token: localStorage.getItem('token')
    },
    isAuthenticated: null,
    loading: true,
  };
  
const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
      case USER_LOADED:
      case GET_USER_DATA:
            
        return {
          ...state,
          user: payload,
          isAuthenticated: true,
          loading: false
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
      case ACCOUNT_DELETED:
        localStorage.removeItem('token');
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          loading: false
        };
      default:
        return state;
    }
  }




export const setUserData = (payload) => ({
    type: REGISTER_SUCCESS, payload
});

export const getUser = (payload) => ({
  type: GET_USER_DATA, payload
});

export const setToken = (payload) => ({
    type: USER_LOADED, payload
});

export const logIn = (payload) => ({
    type: LOGIN_SUCCESS, payload
});

export const LogOut = () => ({
    type: LOGOUT
});



export default authReducer;