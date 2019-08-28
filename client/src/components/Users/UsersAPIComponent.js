import React from 'react';
// import PropTypes from 'prop-types';
import Users from './Users';
// import loadingGif from '../Img/loadingGif.gif'

class UsersAPIComponent extends React.Component {

componentDidMount() {
    this.props.getAllProfiles();
}


render() {

    return <>
    {
    this.props.HelmetFunc({ content: 'Users', title: 'Users' })
    }
     <Users  
     users={this.props.users}
      />
    </>
        }
}


UsersAPIComponent.propTypes = {
// users: PropTypes.array.isRequired
}

export default UsersAPIComponent;