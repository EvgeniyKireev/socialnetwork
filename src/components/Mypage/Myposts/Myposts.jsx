import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormContols";
import {maxLengthCreator, required} from "../../common/validators";

const maxLength = maxLengthCreator(30);
const PostForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
        <div className={s.addNewPosts}>
          <Field component={Textarea} name='post' validate={[required, maxLength]}/>
          <button className={s.myButton}>
            Опубликовать
          </button>
        </div>
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
    <div className={s.posts}>
      <PostReduxForm onSubmit={addPost}/>
      {componentPosts}
    </div>
  );
};
export default Myposts;
