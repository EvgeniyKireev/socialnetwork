import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewTextPostActionCreator } from "../../../redux/profile-reducer";


const Myposts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };
  let componentPosts = props.posts.map((el) => <Post text={el.post} />);

  let updateNewPostText = () => {
    props.updateNewPostText(newPostElement.current.value);
  };

  return (
    <div>
      <form>
        <textarea
          onChange={updateNewPostText}
          ref={newPostElement}
          value={props.newTextPost}
        ></textarea>
        <button type="button" onClick={addPost}>
          Опубликовать
        </button>
      </form>
      {componentPosts}
    </div>
  );
};
export default Myposts;