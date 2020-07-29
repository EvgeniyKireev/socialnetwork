import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewTextPost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export let reRenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} updateNewTextPost={updateNewTextPost} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
