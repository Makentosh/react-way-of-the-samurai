import React from 'react';
import './FormControls.scss'
import {Field} from 'redux-form';

const FormControl = ({meta, input, children, props}) => {
  const hasError = meta.error && meta.touched;
  return (
      <div className={`form-control ${hasError ? 'error' : ''}`}>
        <div>
          { children }
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
  )
};


export const Textarea = (props) => {
 const {input, meta, children, ...restProps} = props;
 return (
     <FormControl {...props}>
       <textarea {...input} {...restProps}/>
     </FormControl>
 )
};


export const Input = (props) => {
  const {input, meta, children, ...restProps} = props;
  return (
      <FormControl {...props}>
        <input {...input} {...restProps}/>
      </FormControl>
  )
};

export const createField = (placeholer, name, validators, component, props = {}, text = '') => (
  <div>
    <Field placeholder={placeholer}
            name={name}
             validate={validators}
            component={component} {...props}>
      { text }
    </Field>
  </div>
);

