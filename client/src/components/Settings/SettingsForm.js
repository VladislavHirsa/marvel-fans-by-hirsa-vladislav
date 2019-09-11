import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderField, validate } from '../actions/actionForm';
import css from '../commonStyles/Common.module.css';


const SettingsForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props

    return <>
        
    {/* <form onSubmit={handleSubmit} >
      <Field name="avatar" type="file"
          component={RenderField} label="Avatar" 
        />

      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </form> */}

      <form onSubmit={handleSubmit} className={css.form} >
        <Field name="name" type="text"
          component={RenderField} label="Name" 
          />
        <Field name="email" type="email"  
          component={RenderField} label="Email" 
        />
        {/* <Field name="avatar" type="text"
          component={RenderField} label="Avatar" 
        /> */}
        <Field name="status" type="text" 
          component={RenderField} label="Status" 
        />
        <Field name="interests" type="text" 
          component={RenderField} label="Interests"   
        />
        <Field name="location" type="text" 
        component={RenderField} label="Location" 
        />
        
        <div className={css.buttons} >
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear 
          </button>
        </div>
      </form>
    </>
    
  }
  
  
  
  
  export const FormForSettings =  reduxForm({
    form: 'settingsForm', 
    validate
  })(SettingsForm)
