import React, {useState} from 'react'
import css from '../Posts.module.css'
import send_post from '../../../assets/image/send_post.png'


 const Dialog = ({user_id, sendMessage}) => {
     
    const [state, setState] = useState({
        text: ''
    })

const { text } = state;

const onChange = e => setState({ ...state, [e.target.name]: e.target.value })
    


    const onSubmit = (e) => {
        e.preventDefault();
        sendMessage({text, user_id});
        setState({text: ''});
    }


    return <> 
    <div className={css.post_conteiner_dialog} >
    <form onSubmit={e => onSubmit(e) } className={css.post_dialog}  >
        <textarea
        className={css.textarea}
         name='text'
         type='text' 
         placeholder='New message' 
         value={text}
         onChange={e => onChange(e)}   
         />
         
        <button type='submit'  
            className={css.dialog_button}
        >
        <img src={send_post} alt='img' />
        </button>
        
         
    </form>
    </div>
    </>
}


export default Dialog;