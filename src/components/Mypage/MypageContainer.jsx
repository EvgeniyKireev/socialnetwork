import React from "react";
import s from "./Mypage.module.css";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import { getProfileInfo, getStatus, updateStatus } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import ProfileStatus from "./Profile/ProfileStatus";

class MypageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.authUserId;
    this.props.getProfileInfo(userId)
    this.props.getStatus(userId);   
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
        <ProfileStatus  status={this.props.status} updateStatus={this.props.updateStatus}/>
        <MyPostsContainer />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  auth: state.auth.isAuth,
  status: state.profilePage.status,
  authUserId: state.auth.id,
});

export default compose(connect(mapStateToProps, { getProfileInfo, getStatus, updateStatus }), withRouter, withAuthRedirect)(MypageContainer);









