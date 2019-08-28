import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profile_reducer";
// import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import postsReducer from "./posts_reducer";


const middleware = [thunk];

let reducers = combineReducers({
    posts: postsReducer,
    profile: profileReducer,
    allUsers: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));
window.store = store;

export default store; 