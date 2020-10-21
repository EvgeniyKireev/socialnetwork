import React from "react";
import profilePhoto from "./assets/images/photo.png";
import s from "./users.module.css";
import preloader from "./assets/images/preloader.svg";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p:number) => void
    pageSize: number
    isLoading: boolean
    users: any
    followingInProgress: Array<number>
    follow: (id:number) => void
    unfollow: (id:number) => void
}


const Users:React.FC<PropsType> = (props) => {
  return (
    <div>
      {props.isLoading ? (
        <div>
          <img src={preloader} alt="" />
        </div>
      ) : null}
        <div className={s.paginator}><Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                                                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/></div>
      <div className={s.users}>{props.users.map((u:UserType) => (
          <div key={u.id} className={s.user}>
            <div>
              <NavLink to={`profile/${u.id}`}>
                <img className={s.image}
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
      ))}</div>
    </div>
  );
};

export default Users;
