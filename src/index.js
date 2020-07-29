import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";

let reRenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={store.addPost.bind(store)} updateNewTextPost={store.updateNewTextPost.bind(store)}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

reRenderTree(store.state);

store.subscribe(reRenderTree);

serviceWorker.unregister();
