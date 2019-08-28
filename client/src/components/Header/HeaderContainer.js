import React from 'react';
import Header from './Header';
// import axios from 'axios';
import { connect } from 'react-redux';
import {logOut} from '../api/auth_api'
import { compose } from 'redux';
// import { setUserData } from '../../redux/auth_reducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    

  }
  render() {
    
    return (
    <Header {...this.props} /> 
  )
    
  }
  
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default compose ( 
connect(
  mapStateToProps,
   {logOut}
   )(HeaderContainer)
   );
