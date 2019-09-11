import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../actions/withAuthRedirect';
import { withRouter } from 'react-router-dom';
import { getPost, sendMessage, getAllPosts, deleteMessage } from '../../api/posts_api'
import  Post  from './Post'
import Dialog from './Dialog';
import HelmetFunc from '../../actions/HelmetFunc'
import css from '../Posts.module.css'



 class PostContainer extends Component {
    constructor(props) {
    super(props)
   
    this.state = { scrollMove: true };
    
  }
   
   componentWillUnmount() {
     clearInterval(this.interval);
   }

  componentDidMount() {
      const post_id = this.props.match.params.post_id
      
      this.interval = setInterval(() => {this.props.getPost(post_id)}, 1000)
      this.setState = ({
      scrollMove: false
    })
  }


    render() {

      if( this.props.post && this.props.post.length === 0 ) {
        return <div> Wait please </div>
      }
        return <>
    <div className={css.post_container}>

            {
            this.props.HelmetFunc({ content: 'Post', title: 'Post' })
            } 
            <Post posts={this.props.post} auth_id={this.props.auth_id._id} 
              scrollMove={this.state.scrollMove}
              deleteMessage={this.props.deleteMessage}
            />

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
    auth_id: state.auth.user
  })
  
  export default compose(
    connect(
      mapStateToProps, {
        getAllPosts, 
        sendMessage, 
        getPost,
        deleteMessage,
        HelmetFunc
      }
    ),
    withRouter,
    withAuthRedirect
  )( PostContainer )