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
