import React from "react";
import s from "./Mypage.module.css";
import Profile from "./Profile/Profile";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import * as axios from "axios";
import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MypageContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 10864;
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
      headers: { "API-KEY": "f82df6c3-33b7-4f9c-aecf-8cc3197eb73e" },
    })
    .then((response) => {
      debugger
      this.props.setUserProfile(response.data);
      debugger
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
