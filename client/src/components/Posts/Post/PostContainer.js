import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../actions/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import { getPost, sendMessage, getAllPosts } from '../../api/posts_api'
import  Post  from './Post'
import Dialog from './Dialog';
import HelmetFunc from '../../actions/HelmetFunc'
import css from '../Posts.module.css'




 class PostContainer extends Component {

componentDidMount() {
    const post_id = this.props.match.params.post_id
    this.interval = setInterval(() => {this.props.getPost(post_id)}, 2000)
   
}

componentWillUnmount() {
  clearInterval(this.interval);
}

    render() {
      if( this.props.post && this.props.post.length === 0 ) {
        return <div> Wait mother's fucker </div>
      }
        return <>
    <div className={css.post_container}>

            {
            this.props.HelmetFunc({ content: 'Post', title: 'Post' })
            } 
            <Post post={this.props.post} auth_id={this.props.auth_id} />

            <Dialog user_id={this.props.match.params.user_id} 
            sendMessage={ this.props.sendMessage}
            getAllPosts={ this.props.getAllPosts}
             /> 
             </div>
        </>
    }
}

export const mapStateToProps = ( state ) => ({
    post: state.posts.post,
    auth_id: state.auth.user._id
  })
  
  export default compose(
    connect(
      mapStateToProps, {
        getAllPosts, 
        sendMessage, 
        getPost,
        HelmetFunc
      }
    ),
    withRouter,
    withAuthRedirect
  )( PostContainer )