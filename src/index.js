import React from "react";
import ReactDOM from "react-dom";

// Redux Imports
import { Provider } from "react-redux";
import store from "./ducks/store/store";

import App from "./components/App/App";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
