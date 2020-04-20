import React from 'react';
import './FormControls.scss'

const FormControl = ({meta, input, children, props}) => {
  const hasError = meta.error && meta.touched;
  return (
      <div className={`form-control ${hasError ? 'error' : ''}`}>
        <div>
          <textarea {...input} {...props}/>
          { children }
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
  )
};


export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched;
  return (
      <div className={`form-control ${hasError ? 'error' : ''}`}>
        <div>
          <textarea {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
  )
};


export const Input = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched;
  return (
      <div className={`form-control ${hasError ? 'error' : ''}`}>
        <div>
          <input {...input} {...props}/>
        </div>
        {hasError && <span>{meta.error}</span>}
      </div>
  )
};

