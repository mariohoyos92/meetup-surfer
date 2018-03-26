import React, { Component } from "react";
import PropTypes from "prop-types";

// Import Custom Components
import FallbackComponent from "./FallbackComponent";

class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error !== null) {
      return <FallbackComponent />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object
};

export default ErrorBoundary;
