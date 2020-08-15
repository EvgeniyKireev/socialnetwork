import React from "react";
import * as axios from "axios";
import profilePhoto from "./assets/images/photo.png";
import s from "./users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users`, {
        headers: { "API-KEY": "f82df6c3-33b7-4f9c-aecf-8cc3197eb73e" },
      })
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`, {
        headers: { "API-KEY": "f82df6c3-33b7-4f9c-aecf-8cc3197eb73e" },
      })
      .then((response) => {
        this.props.setUsers(response.data.items)
      })

  }
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let btnPages = [];
    for (let i = 1; i <= pagesCount; i++) {
      btnPages.push(i);
    }
    return (
      <div>
        {btnPages.map(p => {
          return <button className={this.props.currentPage === p && s.currentPage} onClick={() => {this.onPageChanged(p)}}>{p}</button> 
        })}
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : profilePhoto}
                alt="profilePhoto"
              />
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
                <button onClick={() => this.props.unfollow(u.id)}>
                  unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(u.id)}>follow</button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
