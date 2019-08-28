
const SET_ALL_PROFILES = 'SET_ALL_PROFILES';


const initialState = {
    users: []
}


 const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ALL_PROFILES: {
            return {
                ...state,
                users: action.users
            }
        }
            
           
    
        default:
            return state;
    }

}









export const setAllProfiles = (users) => ({
    type: SET_ALL_PROFILES, users
});


export default userReducer;