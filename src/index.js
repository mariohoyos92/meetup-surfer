import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// Redux Imports
import { Provider } from "react-redux";
import store from "./ducks/store/store";

// Import Custom Components
import App from "./components/App/App";
import ErrorBoundary from "./components/Error/ErrorBoundary";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
