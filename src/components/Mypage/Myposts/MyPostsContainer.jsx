import React from "react";
import {
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newTextPost) => {
      dispatch(addPostActionCreator(newTextPost));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostsContainer;
