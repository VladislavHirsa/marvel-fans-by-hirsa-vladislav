import React, { useEffect, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../actions/withAuthRedirect';
import { FormForSettings } from './SettingsForm';
import Loading from '../../Loading';
import { getUserData } from '../api/auth_api';
import { CreateUserProfile, getProfileMe } from '../api/profile_api';
import HelmetFunc from '../actions/HelmetFunc';
import css_common from '../commonStyles/Common.module.css';
import css from './SettingsForm.module.css'


 const Settings = ({getProfileMe, CreateUserProfile, getUserData, HelmetFunc, profile, user}) => {
  let loading = true;

  useEffect(() => {
    getUserData();
    getProfileMe();
  }, [getProfileMe, getUserData])


  const [state, setState] = useState({
  name: null,
  email: null,
  avatar: null,
  status: null,
  interests: null,
  location: null
  });


  useEffect(() => {
      
      setState({
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        status: profile.status,
        interests: profile.interests,
        location: profile.location,
        noExist: profile.noExist
      })

      
    }, [profile, user])

    // if(!profile.noExist) {
    //   return <Loading />
    // }

    const {
      name,
      email,
      avatar,
      status,
      interests,
      location,
      noExist
    } = state;

    const data = {
      name,
      email,
      avatar,
      status,
      interests,
      location,
      noExist
    }

    
    if(status !== null || interests !== null || location !== null || noExist) {
      loading = false;
    }

   
    

    return <div className={css_common.container_scroll} >
          {
          HelmetFunc({ content: 'Settings', title: 'Settings' })
          }
           {/* <img src={avatar} alt='Avatar' className={css.settings_avatar} /> */}
           <div>Wellcome Superhero { user.name } </div> 
        {status !== null
        ? <Fragment> You can change your profile here</Fragment> 
        : <Fragment> You have`t got profile yet but you cat setup it here </Fragment>
        }
        
          
          { !loading 
          ? <FormForSettings onSubmit={CreateUserProfile} initialValues={data}/> 
          : <Loading />
          }

        

        </div>
}







const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile.profile
  
})



export default compose(
connect(
    mapStateToProps,
    { 
      getProfileMe,
      CreateUserProfile,
      getUserData,
      HelmetFunc 
    }
    ),
    withAuthRedirect
) (Settings)