import React from 'react';
import './FormControls.scss'
import {Field, WrappedFieldProps} from 'redux-form';
import {FieldValidatorType} from "../../../utils/validators/validators";


type FormControlPropsType = {
    meta: any
}



export function createField<FormKeysType extends string>(placeholer: string | undefined,
                            name: FormKeysType,
                            validators: Array<FieldValidatorType>,
                            component: React.FC<WrappedFieldProps>,
                            props = {},
                            text = '') {
    return (
        <div>
            <Field placeholder={placeholer}
                   name={name}
                   validate={validators}
                   component={component}
                   {...props}>
                {text}
            </Field>
        </div>
    )
}



const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = error && touched;
    return (
        <div className={`form-control ${hasError ? 'error' : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
};


export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
};


