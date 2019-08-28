import React, {useEffect} from 'react';
import css from './App.module.css';
import Nav from './components/Nav/Nav';
import {BrowserRouter, Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './Loading';
import HeaderContainer from './components/Header/HeaderContainer';
import store from './redux/redux_stor';
import { loadUser } from './components/api/auth_api';
import setAuthToken from './components/AuthToken/setAuthToken';
import {Provider} from 'react-redux';
import Settings from './components/Settings/Settings';

// import { getUserProfile } from './redux/profile_reducer';



const ProfileContainer = Loadable ({
  loader: () => import('./components/Profile/ProfileContainer'),
  loading: Loading
});

const PostsContainer = Loadable ({
  loader: () => import('./components/Posts/PostsContainer'),
  loading: Loading
});
const PostContainer = Loadable ({
  loader: () => import('./components/Posts/Post/PostContainer'),
  loading: Loading
});

const UsersConteiner = Loadable ({
  loader: () => import('./components/Users/UsersConteiner'),
  loading: Loading
});

const Login = Loadable ({
  loader: () => import('./components/Auth/Login/LoginContainer'),
  loading: Loading
});

const Register = Loadable ({
  loader: () => import('./components/Auth/Register/Register'),
  loading: Loading
});


if(localStorage.token) {
  setAuthToken(localStorage.token);
}


const  App =() => {
  useEffect(() => {
     store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className={css.app_wrapper} >
      <HeaderContainer />
      <Nav />
      <div className={css.content} >
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile/:user_id?' component={ ProfileContainer} />
      <Route path='/post/:post_id/:user_id' component={ PostContainer} />
      <Route path='/posts' component={PostsContainer} />
      <Route path='/users' component={UsersConteiner} />
      <Route exact path='/settings' component={Settings} />
      </div>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
