import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

let mapStateToProps = ( state ) => ({
    isAuthenticated: state.auth.isAuthenticated 
})
export default function withAuthRedirect(Component) {
  
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuthenticated) {
                return <Redirect to='/login'/> 
              }
            
            return <Component {...this.props} />
        }
    }
    let ConnectRedirect = connect(mapStateToProps)(RedirectComponent);

    return ConnectRedirect;
}

