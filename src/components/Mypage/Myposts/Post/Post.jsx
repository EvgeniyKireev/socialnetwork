import React from 'react';
import s from './Post.module.css';
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const Post = (props) => {
    return(
        <div className={s.post}>
            <img className={s.avatar}src="https://cdn.worldvectorlogo.com/logos/tiktok-logo-2--1.svg" alt="avatar"/>
            <div>{props.text}</div>
            <button>Like</button>
        </div>
    );
}

export default Post;