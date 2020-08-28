import React from "react";
import s from "./Mypage.module.css";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import * as axios from "axios";
import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userApi } from "../../api/api";

class MypageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 10864;
    userApi.getMypage(userId)
    .then((data) => {
      this.props.setUserProfile(data);
    });
  }
  render() {
    return (
      <div>
        <Profile {...this.props}/>
        <MyPostsContainer />
      </div>
    );
  };
  }

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})



export default connect(mapStateToProps, {setUserProfile})(withRouter(MypageContainer));
