
const ADD_POST = 'ADD_POST';
const SET_USER_BY_ID = 'SET_USER_BY_ID';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const CLEAR_USER_PROFILE = 'CLEAR_USER_PROFILE';
const FAILS_CREATE_USER_PROFILE = 'FAILS_CREATE_USER_PROFILE';
const FAILS_GET_PROFILE = 'FAILS_GET_PROFILE';



let initialState = {
    profile: {
        user: {
            name: ' ',
            email: ' ',
            avatar: ' '
        },
        location: null,
        status: null,
        bio: null,
        social: null,
        date: null ,
        interests: null,
        post: null,
        noExist: false
    }

}

const profileReducer = (state = initialState, action) => {

switch(action.type) {

    case ADD_POST: {
        return {

        }
    }
    case SET_USER_BY_ID:
    case SET_USER_PROFILE: {
        return {
            ...state, 
           profile: {...action.userProfile, noExist: true},
           

        }
    
        }


        case FAILS_GET_PROFILE: {
           return {
               ...state,
               noExist: false
           }
        } 

        case CLEAR_USER_PROFILE: {
            return {
                ...state, profile: {
                    user: {
                        name: ' ',
                        email: ' ',
                        avatar: ' '
                    },
                location: null,
                status: null,
                bio: null,
                social: null,
                date: null ,
                interests: null,
                post: null,
                _id: null,
                noExist: false}
            }
        }
        

        default:
        return state; 
} 
         
}


export const setUserProfile = ( userProfile) => ({
    type: SET_USER_PROFILE, userProfile
});

export const setUserById = ( userProfile) => ({
    type: SET_USER_BY_ID, userProfile
});




export const clearUserProfile = () => ({
    type: CLEAR_USER_PROFILE
});

export const failsCreateUserProfile = () => ({
    type: FAILS_CREATE_USER_PROFILE
});

export const failsGetProfile = () => ({
    type: FAILS_GET_PROFILE
});



export default profileReducer;
