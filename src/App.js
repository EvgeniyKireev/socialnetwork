import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MypageContainer from "./components/Mypage/MypageContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="mcontent">
          <Route path="/profile/:userId?" render={() => <MypageContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
      </div>
    );
  }
}

export default App;
