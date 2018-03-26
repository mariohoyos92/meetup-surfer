import React, { Fragment } from "react";

const FallbackComponent = () => (
  <Fragment>
    <p>
      We ran into an error, please refresh the page or click{" "}
      <a href="/">here</a>
    </p>
  </Fragment>
);

export default FallbackComponent;
