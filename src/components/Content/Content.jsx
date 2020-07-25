import React from 'react';
import s from './Content.module.css';
import Profile from './Profile/Profile';
import Myposts from './Myposts/Myposts';

const Content = () => {
    return(
        <div className={s.mcontent}>
        <Profile />
        <Myposts />
        </div>
    );
}
export default Content;