import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        alert(newPostElement.current.value);
    }

    return(
        <div>
        <form>
            <textarea ref={newPostElement}></textarea>
            <button  onClick={addPost}>Опубликовать</button>
        </form>
            {props.componentPosts}
        </div>
    );
}
export default Myposts;