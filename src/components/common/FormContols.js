import React from "react";
import s from "./FormContols.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const hasTouched = meta.touched && meta.error;
    return (<div className={hasTouched && s.formcontrollError}>
        <div>
            <textarea {...input}/></div>
        {hasTouched && <span>{meta.error}</span>}
    </div>);
}

export const Input = ({input, meta, ...props}) => {
    const hasTouched = meta.touched && meta.error;
    console.log(props.type);
    return (<div className={hasTouched && s.formcontrollError}>
        <div>
            <input {...input} type={props.type} placeholder={props.placeholder}/></div>
        {hasTouched && <span>{meta.error}</span>}
    </div>);
}
