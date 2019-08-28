import React, { useState } from 'react';
import css from './UsersAPIComponent.module.css';
import {NavLink} from 'react-router-dom';


const Users = (props) => {
    
    const [ state, setState ] = useState({
        name: ''
    })

    const { name } = state;

    const onChange = e => 
        setState({ name: e.target.value.substr(0, 20) })
    let findFriends = props.users.filter(u => {
        return u.user.name.toLowerCase().indexOf( name.toLowerCase() ) !== -1
    })

return <>

<div className={css.users_container} >
    <form className={css.users_form} >
        <input 
        placeholder='Find your friends by name'
        type='text' 
        value={name}
        onChange={ e => onChange(e)}
        /> 
    </form>
<div className={css.users_scroll} >
    {
            findFriends.map( u => <div key={u._id}  className={css.users_user} >
        <NavLink to={'/profile/' + u.user._id} >
        <img src={u.user.avatar} alt="avatar"  className={css.users_avatar} /> </NavLink>

        <div>{u.user.name}</div>
        <div>{u.location}</div>


        </div>)
    }
        </div>
</div>

    </>

}

export default Users;

