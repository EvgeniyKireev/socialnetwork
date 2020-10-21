import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  getUsersThunkCreator1,
  getUsersThunkCreator2,
} from "../../redux/users-reducer";
import Users from "./Users";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/authRedirect";
import {
  getAllUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsLoading,
  getPageSize,
  getTotalUsersCount
} from "../../redux/users-selectors";
import { AppRootStateType } from "../../redux/redux-store";
type OwnPropsType = {
  pageNumber: number
}
type MapStatePropsType = {
  users: any
  pageSize: number
  totalUsersCount: number
  currentPage:number
  isLoading: boolean
  followingInProgress: Array<number>
}
type MapDispatchPropsType = {
  getUsers1: () => void
  getUsers2: (pageNumber:number,pageSize:number) => void
  follow: (id:number) => void
  unfollow: (id:number) => void
}
class UsersAPI extends React.Component<OwnPropsType&MapDispatchPropsType&MapStatePropsType> {
  componentDidMount() {
   this.props.getUsers1()
  }
  onPageChanged = (pageNumber:number) => {
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

let mapStateToProps = (state:AppRootStateType):MapStatePropsType => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

export default compose(connect<MapStatePropsType,MapDispatchPropsType,OwnPropsType,AppRootStateType>(mapStateToProps, {
  follow,
  unfollow,
  getUsers1: getUsersThunkCreator1,
  getUsers2: getUsersThunkCreator2,
}))(UsersAPI);
