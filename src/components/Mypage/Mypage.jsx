import React from "react";
import s from "./Mypage.module.css";
import Profile from "./Profile/Profile";
import Myposts from "./Myposts/Myposts";

const Mypage = (props) => {
  return (
    <div>
      <Profile />
      <Myposts state={props.state} dispatch={props.dispatch} />
    </div>
  );
};
export default Mypage;
