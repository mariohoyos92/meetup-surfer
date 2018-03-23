import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Redux Imports
import { Provider } from "react-redux";
import store from "./ducks/store/store";

import App from "./components/App/App";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
