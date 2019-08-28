import React from 'react'

import common_css from '../commonStyles/Common.module.css';


const ProfileButtons = ({ user_id, goToPosts, handlePush }) => {
const button_style = {
    width: 'auto',
    height: 'auto'
}

//// ATTENTION FIND BETTER SOLUTION ///////
    const handleClick = (e) => {
        e.preventDefault();
        goToPosts({user_id}).then(res => {
            handlePush(res._id, user_id);
            
        })
        
        
        
    }

    return <>
    <div className={common_css.buttons} >
            <button onClick={handleClick} type='button' style={button_style} >  Go to post </button>
            </div>
        </>
    
}


export default ProfileButtons;