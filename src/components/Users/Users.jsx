import React from "react";
import profilePhoto from "./assets/images/photo.png";
import s from "./users.module.css";
import preloader from './assets/images/preloader.svg';
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let btnPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    btnPages.push(i);
  }
  return (
    <div>
      {props.isLoading ? <div><img src={preloader} alt=""/></div> : null}
      {btnPages.map((p) => {
        return (
          <button
            className={props.currentPage === p && s.currentPage}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </button>
        );
      })}
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={`profile/${u.id}`}>
            <img
              src={u.photos.small != null ? u.photos.small : profilePhoto}
              alt="profilePhoto"
            />
            </NavLink>
          </div>
          <div>
            <h3>{u.name}</h3>
          </div>
          <div>
            {"u.location.city"}
            {"u.location.country"}
          </div>
          <div>
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>follow</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
