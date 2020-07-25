import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={s.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={s.item}>
        <a href="#">Music</a>
      </div>
      <div className={s.item}>
        <a href="#">Photo</a>
      </div>
      <div className={s.item}>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};
export default Nav;
