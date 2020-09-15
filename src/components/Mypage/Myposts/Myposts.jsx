import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewTextPostActionCreator,
} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
        <Field component='input' name='post'/>
    <button>
      Опубликовать
    </button>
  </form>);
}

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

const Myposts = (props) => {
  let addPost = (values) => {
    props.addPost(values.post);
  };
  let componentPosts = props.posts.map((el) => (
    <Post key={el.id} text={el.post} />
  ));


  return (
    <div>
      <PostReduxForm onSubmit={addPost}/>
      {componentPosts}
    </div>
  );
};
export default Myposts;
