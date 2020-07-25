import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Mypage from "./components/Mypage/Mypage";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Nav />
          <div className="mcontent">
            <Route path="/profile" component={Mypage} />
            <Route path="/dialogs" component={Dialogs} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
