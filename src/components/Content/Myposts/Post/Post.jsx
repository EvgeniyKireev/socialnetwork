import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return(
        <div className={s.post}>
            <img className={s.avatar}src="https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg" alt="avatar"/>
            <div>комментарий</div>
            <button>Like</button>
        </div>
    );
}
export default Post;