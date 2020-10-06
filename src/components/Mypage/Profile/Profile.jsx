import React from "react";
import s from "./Profile.module.css";
import preloader from '../../Users/assets/images/preloader.svg';
import profilePhoto from "../../Users/assets/images/photo.png";

const Profile = (props) => {
    if (!props.profile) {
        return <img src={preloader} alt=""/>;
    }
    let setPhoto = (e) => {
        if(e.target.files.length) {
            props.updatePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.profile}>
            <div className={s.me}>
                <div>
                    <img
                        className={s.avatar}
                        src={props.profile.photos.large || profilePhoto}
                        alt="Profile avatar"
                    />
                </div>
                <div className={s.personalInfo}>
                    <div className={s.name}>{props.profile.fullName}</div>
                    <div className={s.description}>
                        {props.profile.aboutMe}
                    </div>
                    <div><h3>Контакты:</h3>
                        <ul>
                            <li>{props.profile.contacts.vk}</li>
                            <li>{props.profile.contacts.facebook}</li>
                            <li>{props.profile.contacts.twitter}</li>
                            <li>{props.profile.contacts.instagram}</li>
                            <li>{props.profile.contacts.github}</li>
                        </ul>
                    </div>
                    <input type={"file"} onChange={setPhoto}/>
                </div>
            </div>
        </div>
    );
};
export default Profile;
