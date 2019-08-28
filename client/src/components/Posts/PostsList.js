import React from 'react';
import Loading from '../../Loading'
import {NavLink} from 'react-router-dom';
import css from './Posts.module.css'
import post_remove from '../../assets/image/mail_remove.png'

const PostsList = ({ postList, deletePost }) => {
    console.log(postList, 'Postslist')
    const handleClick = (e, post_id) => {
        e.preventDefault();
        deletePost(post_id);
            
        }
        
    return <>
    <div className={css.posts_list} >
    { postList
       ? postList.map( post => <div key={post.post_id} className={css.posts_list_user} > 
                <NavLink exact to={`/post/${post.post_id}/${post.user._id}`} >
                <img src={post.user.avatar} alt='Friend avatar' className={css.posts_list_avatar} /> 
                </NavLink>
                <div className={css.posts_list_user_describe} >     
                    <span className={css.posts_list_name} > {post.user.name} </span> 
                    <button onClick={(e) => handleClick(e, post.post_id)} type='button' className={css.post_list_button} >
                    <img src={post_remove} alt='delete post' />
                    </button>
                </div>
            </div>
        )
        : <Loading />
    }
    </div>
    </>
}

export default PostsList;
