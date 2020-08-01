import React from "react";
import {
  addPostActionCreator,
  updateNewTextPostActionCreator,
} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";

const MyPostsContainer = (props) => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
    props.dispatch(updateNewTextPostActionCreator(""));
  };

  let updateNewPostText = (text) => {
    props.dispatch(
      updateNewTextPostActionCreator(text)
    );
  };

  return (
    <Myposts
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      posts={props.state.posts}
      newTextPost={props.state.newTextPost}
    />
  );
};
export default MyPostsContainer;
