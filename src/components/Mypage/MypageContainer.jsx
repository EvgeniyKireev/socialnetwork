import React from "react";
import s from "./Mypage.module.css";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import { getProfileInfo } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/authRedirect";
import { compose } from "redux";
import ProfileStatus from "./Profile/ProfileStatus";

class MypageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 10864;
    this.props.getProfileInfo(userId)
  }
  render() {
    return (
      <div>
        <Profile {...this.props} />
        <ProfileStatus />
        <MyPostsContainer />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  auth: state.auth.isAuth,
});

export default compose(connect(mapStateToProps, { getProfileInfo }), withRouter, withAuthRedirect)(MypageContainer);









