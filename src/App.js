import React, {Suspense} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import { Route, withRouter } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import MypageContainer from "./components/Mypage/MypageContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeAppThunk} from "./redux/initialize-reducer";
import preloader from "./components/Users/assets/images/preloader.svg";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
      this.props.initializeAppThunk();
  }

    render() {
      if (!this.props.isInitialized){
         return <img src={preloader} alt=""/>;
      }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Nav />
        <div className="mcontent">
          <Route path="/profile/:userId?" render={() => <MypageContainer />} />
            <Route path="/dialogs" render={() => <Suspense fallback={<div>loading...</div>}> <DialogsContainer /></Suspense>} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
    isInitialized: state.init.isInitialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunk}))(App);
