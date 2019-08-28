import React from 'react';
import css from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = ({isAuthenticated, logOut}) => {

    return (
  
      <header className={css.header}>
     <div className={css.logo_name} >MARVEL FANS</div>
      <div className={css.loginBlock}>

            {
                  isAuthenticated 
            ? <span>
                  {<NavLink onClick={logOut} to={'/login'}>Log Out</NavLink>}
            </span> 

            : <div>
                  <span> 
                  {<NavLink to={'/login'}>Login</NavLink>}
                        </span>

                        <span>
                  {<NavLink to={'/register'}>Register</NavLink>}
                        </span>
            </div>
                  
                  }

      </div>
      </header>
    );
  
}

export default Header;
