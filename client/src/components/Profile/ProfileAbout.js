import React from 'react'
import css from './Profile.module.css'


 const ProfileAbout = ({status, interests, location}) => {
    return<>
    <div className={css.profile_about_container} >
          <div> 
            <b> Location </b>
            {location} 
          </div>  
          <div  > 
           <b> Status: </b>
            {status}
           </div>  
          <div>
          <b> Interests: </b>
          {interests} 
          </div>  
          </div> 
        </>
    
}


export default ProfileAbout;