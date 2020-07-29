import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewTextPost, subscribe } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import state from "./redux/state";


let reRenderTree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <React.StrictMode>
          <App state={state} addPost={addPost} updateNewTextPost={updateNewTextPost} />
        </React.StrictMode>
      </BrowserRouter>,
      document.getElementById("root")
    );
  };

reRenderTree(state);

subscribe(reRenderTree);

serviceWorker.unregister();
