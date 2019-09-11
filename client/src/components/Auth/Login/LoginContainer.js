import React, { Fragment, useState } from 'react';
import { NavLink} from 'react-router-dom';
import { logInAPI } from '../../api/auth_api';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import css from '../../commonStyles/Common.module.css'

 const Login = ({ logInAPI, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    hiden: true
  });

  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

const  togglePassword = e => {
  e.preventDefault();
setFormData({
  ...formData, hiden: !formData.hiden
})

}

  const onSubmit = async e => {
    e.preventDefault();
    await logInAPI({email, password});
  
  };

  if (isAuthenticated) {
    return <Redirect to='/profile' />;
  }

  return <Fragment>
      <h1>Login</h1>
      <form className={css.form} onSubmit={e => onSubmit(e)}>

        <label htmlFor='email' > Email </label>
        <div>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
            <label htmlFor='password'> Password</label>
          <div>
            <input 
            className={css.login_password}
            autoComplete="new-password"
              type={ formData.hiden ? 'password' : 'text'}
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='8'
            />
          </div>
          <div className={css.buttons} >
            <button type='submit'> Login </button>
            <button type='button' onClick={togglePassword} > { formData.hiden ? 'Hide' : 'Show'} </button>
          </div>

      </form>
      <p>
        Don't have an account? <NavLink to='/register'>Register</NavLink>
      </p>
    </Fragment>
  ;
};
Login.propTypes = {
  logInAPI: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { logInAPI }
)(Login);

