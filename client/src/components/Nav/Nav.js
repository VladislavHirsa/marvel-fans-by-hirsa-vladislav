import React from 'react';
import css from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import posts from '../../assets/image/posts.png'
import profile from '../../assets/image/profile.png'
import users from '../../assets/image/users.png'
import settings from '../../assets/image/settings.png'

const Nav = () => {
    
    return (
  <div className={css.nav}>
<div >
    <NavLink to='/profile' className={css.nav_list} 
        activeClassName={css.active}>
        <img src={profile} alt='Icon link' className={css.nav_icon} />
        <div className={css.nav_description}> Profile </div> 
        </NavLink>
</div>
<div> 
    <NavLink  to='/posts' className={css.nav_list} 
        activeClassName={css.active}>
        <img src={posts} alt='Icon link' className={css.nav_icon} /> 
        <div className={css.nav_description}> Posts </div> 
        </NavLink>
</div>
<div>
    <NavLink to='/users' className={css.nav_list} 
        activeClassName={css.active}> 
        <img src={users} alt='Icon link' className={css.nav_icon} /> 
        <div className={css.nav_description}> Users </div> 
        </NavLink>
</div>
<div>
    <NavLink  to='/settings' className={css.nav_list} 
        activeClassName={css.active}> 
        <img src={settings} alt='Icon link' className={css.nav_icon} />
        <div className={css.nav_description}> Settings </div> 
    </NavLink>
</div>  
  </div>
    );
  
}

export default Nav;
