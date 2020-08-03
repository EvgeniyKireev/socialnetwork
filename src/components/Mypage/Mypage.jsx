import React from "react";
import s from "./Mypage.module.css";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Mypage = (props) => {
  return (
    <div>
      <Profile />
      <MyPostsContainer />
    </div>
  );
};
export default Mypage;
