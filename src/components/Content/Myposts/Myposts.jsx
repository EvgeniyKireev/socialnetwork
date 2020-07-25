import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return(
        <div>
        <form>
            <input type="text"/>
            <button>Опубликовать</button>
        </form>
        <Post />
        <Post />
        </div>
    );
}
export default Myposts;