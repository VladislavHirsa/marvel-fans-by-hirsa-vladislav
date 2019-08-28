import {connect} from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import { getAllProfiles } from '../api/users_api';
import { compose } from 'redux';
import withAuthRedirect from '../actions/withAuthRedirect';
import HelmetFunc from '../actions/HelmetFunc'


let mapStateToProps = (state) => ({
    users: state.allUsers.users
})


export default compose(
    connect(
        mapStateToProps, 
        {
        getAllProfiles,
        HelmetFunc
        }
    ),
    withAuthRedirect
) (UsersAPIComponent);