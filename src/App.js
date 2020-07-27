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
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Nav />
          <div className="mcontent">
            <Route path="/profile" component={Mypage} />
            <Route path="/dialogs" render={() => <Dialogs componentMessage={this.props.componentMessage} componentUsers={this.props.componentUsers} />} />
            <Route path='/news' component={News} />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
