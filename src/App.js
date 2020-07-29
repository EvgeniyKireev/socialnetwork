import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Mypage from "./components/Mypage/Mypage";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

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
            <Route
              path="/profile"
              render={() => (
                <Mypage
                  state={this.props.state.profilePage}
                  addPost={this.props.addPost}
                  updateNewTextPost={this.props.updateNewTextPost}
                />
              )}
            />
            <Route
              path="/dialogs"
              render={() => <Dialogs state={this.props.state.dialogsPage} />}
            />
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
    );
  }
}

export default App;
