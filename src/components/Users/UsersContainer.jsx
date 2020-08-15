import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  toggleIsLoading,
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users`, {
        headers: { "API-KEY": "f82df6c3-33b7-4f9c-aecf-8cc3197eb73e" },
      })
      .then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`,
        {
          headers: { "API-KEY": "f82df6c3-33b7-4f9c-aecf-8cc3197eb73e" },
        }
      )
      .then((response) => {
        this.props.toggleIsLoading(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        users={this.props.users}
        isLoading={this.props.isLoading}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setUsersCount,
  toggleIsLoading,
})(UsersAPI);

export default UsersContainer;
