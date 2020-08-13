import React from "react";
import * as axios from "axios";
import profilePhoto from "./assets/images/photo.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users", {
        headers: { "API-KEY": "f82df6c3-33b7-4f9c-aecf-8cc3197eb73e" },
      })
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
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
