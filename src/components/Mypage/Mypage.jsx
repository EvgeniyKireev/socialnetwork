import React from "react";
import s from "./Mypage.module.css";
import Profile from "./Profile/Profile";
import Myposts from "./Myposts/Myposts";

const Mypage = () => {
  return (
    <div>
      <Profile />
      <Myposts />
    </div>
  );
};
export default Mypage;
