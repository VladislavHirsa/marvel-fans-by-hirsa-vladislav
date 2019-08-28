import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../actions/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import { getAllPosts, deletePost } from '../api/posts_api'
import PostsList from './PostsList';
import HelmetFunc from '../actions/HelmetFunc'



 class PostsContainer extends Component {

  componentDidMount() {
    
    this.props.getAllPosts()
  }

  render() {

if( this.props.postList && this.props.postList.length === 0 ) {
  return <div> You have not got posts </div>
}

    return <>

    {
      HelmetFunc({ content: 'Posts', title: 'Posts' })
    }

      <PostsList postList={this.props.postList} deletePost={this.props.deletePost} /> 
      
    </>
  }
}

export const mapStateToProps = ( state ) => ({
  postList: state.posts.posts.postList
})

export default compose(
  connect(
    mapStateToProps, 
    {
      getAllPosts,
      HelmetFunc,
      deletePost
    }
  ),
  withRouter,
  withAuthRedirect
)( PostsContainer )