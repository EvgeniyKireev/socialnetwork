import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  getUsersThunkCreator1,
  getUsersThunkCreator2,
} from "../../redux/users-reducer";
import Users from "./Users";
class UsersAPI extends React.Component {
  componentDidMount() {
   this.props.getUsers1()
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers2(pageNumber, this.props.pageSize)
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
        followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers1: getUsersThunkCreator1,
  getUsers2: getUsersThunkCreator2
})(UsersAPI);

export default UsersContainer;
