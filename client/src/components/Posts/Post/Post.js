import React from 'react'
import Loading from '../../../Loading';
import css from '../Posts.module.css'

export default function Post({ post, auth_id }) {

    return <>
 
    <div className={css.post_items} >
          { 
            post 
            ? post.message.reverse().map( post => <div key={ post._id }  
            className={ post.user !== auth_id ? css.item_frind : css.item_auth}>
   
                <img src={post.avatar} alt='Avatar' className={css.post_avatar} />
                <span className={css.post_name} >{ post.name }</span>
                <p className={css.post_text} >{ post.text }</p>
               
                 </div> )
            : <Loading />
          }  
          </div>
          
        </>
    
}
