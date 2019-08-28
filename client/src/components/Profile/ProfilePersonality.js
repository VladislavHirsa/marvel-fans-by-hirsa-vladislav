import React from 'react'
import css from './Profile.module.css'


export default function ProfilePersonality({avatar, name}) {
    return <>

        <div className={css.profile_person} >
            <img src={avatar} alt={"avatar"} /> 
            <div  className={css.profile_person_name} >{ name }</div>
        </div>

        </>
    
}
