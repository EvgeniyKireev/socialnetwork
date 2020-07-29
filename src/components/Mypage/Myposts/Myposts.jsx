import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
  let newPostElement = React.createRef();
  let addPost = () => {
    let newPost = newPostElement.current.value;
    props.addPost();
    props.updateNewTextPost('');
  };

  let componentPosts = props.state.posts.map((el) => (
    <Post text={el.post} />
  ));
  
  let updateNewPostText = () => {
    props.updateNewTextPost(newPostElement.current.value);
  }

  return (
    <div>
      <form>
        <textarea onChange={updateNewPostText} ref={newPostElement} value={props.state.newTextPost}></textarea>
        <button type="button" onClick={addPost}>Опубликовать</button>
      </form>
      {componentPosts}
    </div>
  );
};
export default Myposts;
