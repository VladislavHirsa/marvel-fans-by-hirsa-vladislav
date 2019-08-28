const ADD_POST_REDUCER = 'ADD_POST_REDUCER';
const SET_ALL_POSTS = 'SET_ALL_POSTS';
const SET_POST = 'SET_POST';


const initialState = {
    post: [],
    posts: []
}


 const postsReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case SET_POST:    
        case ADD_POST_REDUCER:
            return {
                ...state,
                post: action.Post
            }

            case SET_ALL_POSTS: {
                return {
                    ...state,
                    posts: action.allPosts
                }
            }

        default:
            return state;
    }

}


export const addPostReducer = ( Post ) => ({
    type: ADD_POST_REDUCER, Post
})

export const setPost = ( Post ) => ({
    type: SET_POST, Post
});

export const setAllPosts = ( allPosts) => ({
    type: SET_ALL_POSTS, allPosts
});




export default postsReducer;