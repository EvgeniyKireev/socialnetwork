import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = (props) => {
    return (
    <header className={s.header}>
      <img
        className={s.logo}
        src="https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg"
      />
      <div className={s.loginBlock}>{props.isAuth ? <div>{props.login} - <button onClick={props.logout}>logout</button> </div> : <NavLink to={'/login'}>login</NavLink>}</div>
    </header>
  );
};

export default Header;
