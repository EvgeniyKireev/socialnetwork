import s from "./Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormContols";
import React from "react";

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button>save</button>
            <div className={s.name}>Full name: {props.profile.fullName}<Field name={"fullName"} component={Input} placeholder={"Full name"}/></div>
            <div className={s.description}>About Me: <Field name={"aboutMe"} component={Textarea} placeholder={"About me"}/>
            </div>
            <div>lookingForAJob: <Field name={"lookingForAJob"} component={"input"} type="checkbox" /></div>
            <div>lookingForAJobDescription: <Field name={"lookingForAJobDescription"} component={Textarea} placeholder={"lookingForAJobDescription"}/> </div>
            <div><h3>Contacts:</h3>
                {Object.keys(props.profile.contacts).map(k=> <div><b>{k}: </b><Field name={"contacts." + k} component={Input} placeholder={k}/></div>)}
            </div>
            <div>{props.error}</div>
        </form>
    );
};
const ProfileDataReduxForm = reduxForm({
    form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataReduxForm;