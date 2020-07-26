import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.me}>
        <div>
          <img
            className={s.avatar}
            src="https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg"
            alt="Profile avatar"
          />
        </div>
        <div className={s.name}>Evgeny Kireev</div>
      </div>
      <div className={s.description}>
        <ul> 
          <li>19 лет</li>
          <li>Россия</li>
          <li>Москва</li>
          <li>Финансовый университет</li>
        </ul>
      </div>
    </div>
  );
};
export default Profile;
