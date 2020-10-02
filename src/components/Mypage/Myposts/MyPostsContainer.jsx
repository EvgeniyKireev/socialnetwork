import React from "react";
import {
  addPost,
} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost,
  };
};




const MyPostsContainer = connect(mapStateToProps, {addPost})(Myposts);

export default MyPostsContainer;
