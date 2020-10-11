import React from "react";
import profilePhoto from "./assets/images/photo.png";
import s from "./users.module.css";
import preloader from "./assets/images/preloader.svg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { userApi } from "../../api/api";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let btnPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    btnPages.push(i);
  }
  return (
    <div>
      {props.isLoading ? (
        <div>
          <img src={preloader} alt="" />
        </div>
      ) : null}
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
      {/*{btnPages.map((p) => {*/}
      {/*  return (*/}
      {/*    <button*/}
      {/*      className={props.currentPage === p && s.currentPage}*/}
      {/*      onClick={() => {*/}
      {/*        props.onPageChanged(p);*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      {p}*/}
      {/*    </button>*/}
      {/*  );*/}
      {/*})}*/}
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
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id)
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id)
                }}
              >
                follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
