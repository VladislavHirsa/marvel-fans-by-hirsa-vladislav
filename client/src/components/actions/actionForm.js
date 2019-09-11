import React from 'react';



export const validate = values => {
    const errors = {}
    
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
   
    return errors
  }
  
  
  
 export const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => {
    
    return <>
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
    </>
  }