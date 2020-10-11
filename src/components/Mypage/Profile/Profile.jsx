import React, {useState} from "react";
import s from "./Profile.module.css";
import preloader from '../../Users/assets/images/preloader.svg';
import profilePhoto from "../../Users/assets/images/photo.png";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormContols";
import {required} from "../../common/validators";
import ProfileDataReduxForm from "./ProfileDataForm";

const Profile = (props) => {
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <img src={preloader} alt=""/>;
    }
    let setPhoto = (e) => {
        if(e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) =>{
        props.uploadProfile(formData).then(() => {setEditMode(false);}        )
    }
    //TODO: доделать обновление профиля до конца 10.10.2020
    return (
        <div className={s.profile}>
            <div className={s.me}>
                <div className={s.avatar}>
                    <img

                        src={props.profile.photos.large || profilePhoto}
                        alt="Profile avatar"
                    />
                    {props.id === props.profile.userId && <input type={"file"} onChange={setPhoto}/>}
                </div>
                {editMode ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> : <ProfileData id={props.id} profile={props.profile} goToEditMode={()=>{setEditMode(true)}}/>}
            </div>
        </div>
    );
};

const Contact = ({title, value}) => {
    return (<div><b>{title}: </b><a href={value}>{value}</a></div>);
}
const ProfileData = (props) => {
    return (<div className={s.personalInfo}>
        {props.id === props.profile.userId && <button onClick={props.goToEditMode}>edit</button>}
        <div className={s.name}>Full name:{props.profile.fullName}</div>
        <div className={s.description}>About Me:
            {props.profile.aboutMe}
        </div>
        <div>lookingForAJob: {props.profile.lookingForAJob ? "yes" : "no"}</div>
        {props.profile.lookingForAJob && <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>}
        <div><h3>Contacts:</h3>
            {Object.keys(props.profile.contacts).map(k=> <Contact  value={props.profile.contacts[k]} title={k}/>)}
        </div>

    </div>);
}

export default Profile;




