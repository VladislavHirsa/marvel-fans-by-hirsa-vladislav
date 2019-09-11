import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { registerUser } from '../../api/users_api';
import { compose } from 'redux';
import css from '../../commonStyles/Common.module.css'


const Register = ({ registerUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
    //   setAlert('Passwords do not match', 'danger');
      console.log('Passwords do not match', 'danger');
    } else {
           registerUser({ name, email, password})
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/settings' />;
  }

  return (
    <Fragment>
      <h1>Register</h1>
      <p >
        <i/> Create Your Account
      </p>
      <form className={css.form} onSubmit={e => onSubmit(e)}>

      <label for='email' > Name </label>
        <div>
          <input
          // autocomplete='off'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>

      <label for='email' > Email </label>
        <div>
          <input type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>

      <label for='email' > Password </label>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>

      <label for='email' > Password </label>
        <div>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={e => onChange(e)}
          />
        </div>
        <div className={css.buttons} >
                <button type='submit' >Register</button>
        </div>
      </form>
      <p>
        Already have an account? <NavLink to='/login'>Login</NavLink>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
//   setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default compose(
    connect(mapStateToProps, {registerUser})
  ) (Register);
