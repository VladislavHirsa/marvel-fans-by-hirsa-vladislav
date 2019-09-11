import React, {useEffect, useRef} from 'react'
import Loading from '../../../Loading';
import css from '../Posts.module.css';
import css_common from '../../commonStyles/Common.module.css';
import post_remove from '../../../assets/image/mail_remove.png'


export default function Post({ posts, auth_id, scrollMove, deleteMessage }) {

  useEffect(() => {
    handleScroll();
  }, [scrollMove])

const scroll = useRef(null)


  const handleClick = (e, posts_id, message_id) => {
    e.preventDefault();
    deleteMessage(posts_id, message_id);
    console.log(posts_id, message_id)
    }


    const handleScroll = () => {
      scroll.current.scrollTop = scroll.current.scrollHeight - scroll.current.clientHeight
      
    }

    return <>
 
    <div className={css_common.container_scroll}  ref={scroll}>
          { 
            posts 
            ? posts.message.map( post => <div key={ post._id }  
            className={ post.user !== auth_id ? css.item_frind : css.item_auth}>
   
                <img src={post.avatar} alt='Avatar' className={css.post_avatar} />
                <span className={css.post_name} >{ post.name }</span>
                <p className={css.post_text} >{ post.text }</p>
                 
                <button onClick={(e) => handleClick(e, posts._id, post._id)} 
                    type='button' className={css.post_list_button} >
                    <img src={post_remove} alt='delete post' />
                    </button>
                    
                 </div> )
            : <Loading />
          }  
          </div>
          
        </>
    
}
