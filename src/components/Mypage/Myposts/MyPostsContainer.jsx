import React from "react";
import {
  addPostActionCreator,
  updateNewTextPostActionCreator,
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
    addPost: () => {
      dispatch(addPostActionCreator());
      dispatch(updateNewTextPostActionCreator(""));
    },
    updateNewPostText: (text) => {
      dispatch(updateNewTextPostActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

export default MyPostsContainer;
