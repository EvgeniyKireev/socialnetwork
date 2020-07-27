import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {
    return(
        <div>
        <form>
            <textarea></textarea>
            <button>Опубликовать</button>
        </form>
        <Post text='Привет, отличный сайт'/>
        <Post text='Круто, добавь меня в друзья!'/>
        </div>
    );
}
export default Myposts;