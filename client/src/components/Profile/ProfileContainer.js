import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../actions/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import { getUserById } from '../api/profile_api';
import { goToPosts } from '../api/posts_api'
import ProfilePersonality from './ProfilePersonality';
import ProfileButtons from './ProfileButtons';
import ProfileAbout from './ProfileAbout';
import HelmetFunc from '../actions/HelmetFunc';
import Loading from '../../Loading';
import css from './Profile.module.css'



class ProfileContainer extends React.Component {

  handlePush = ( post_id, user_id ) => {
    this.props.history.push(`/post/${post_id}/${user_id}`)
  }
  
  componentDidMount() {
    
    
    let user_id = this.props.match.params.user_id;
    
    !this.props.match.params.user_id 
    ? this.props.getUserById(this.props.auth._id) 
    : this.props.getUserById(user_id)
    
  }

  componentDidUpdate(prevProps) {
    if (this.props.auth._id !== prevProps.auth._id) {
     this.props.getUserById(this.props.auth._id);
    }
  }
  


  render() {
    if(!this.props.auth._id) {
      return <Loading />
    }
    return <>
    <div className={css.profile_container} >
    {
    this.props.HelmetFunc({ content: 'Profile', title: 'Profile' })
    }

      <ProfilePersonality avatar={this.props.profile.user.avatar} name={this.props.profile.user.name} />
      { this.props.match.params.user_id 
         ? <ProfileButtons user_id={this.props.match.params.user_id}  
        goToPosts={this.props.goToPosts} 
        handlePush={this.handlePush}
        post_id={this.post_id}
        />
        : null
      }
      <ProfileAbout 
      status={this.props.profile.status} 
      interests={this.props.profile.interests} 
      location={this.props.profile.location} 
      /> 
      </div>
  </>
   
  }
}



const mapStateToProps = ( state ) => ({
 profile: state.profile.profile,
 auth: state.auth.user,
 post_id: state.posts.posts.post
})

export default compose(
  connect(
    mapStateToProps, 
    {
      getUserById, 
      goToPosts,
      HelmetFunc 
    }
    ),
  withRouter,
  withAuthRedirect
)(ProfileContainer);