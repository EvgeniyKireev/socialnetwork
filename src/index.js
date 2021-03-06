import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

ReactDOM.render(
  <HashRouter >
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
