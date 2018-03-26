import React from "react";
import PropTypes from "prop-types";

// Import Redux
import { connect } from "react-redux";

// Import Material UI Components
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import Card from "material-ui/Card";
import CardTitle from "material-ui/Card/CardTitle";

import RenderedContent from "./RenderedContent";

const MeetupStepper = ({ stepIndex }) => {
  const mobile = window.innerWidth < 425;

  return (
    <div className="stepper-container flex-center">
      <Card style={{ width: "70%" }}>
        <CardTitle title="Welcome" />
        <div style={{ width: "100%", maxWidth: 700, margin: "auto" }}>
          <Stepper
            activeStep={stepIndex}
            orientation={mobile ? "vertical" : "horizontal"}
          >
            <Step>
              <StepLabel>Select a Meetup Group</StepLabel>
            </Step>
            <Step>
              <StepLabel>Select an event</StepLabel>
            </Step>
          </Stepper>
          <RenderedContent />
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stepIndex: state.stepIndex
  };
};

export default connect(mapStateToProps)(MeetupStepper);

MeetupStepper.propTypes = {
  stepIndex: PropTypes.number.isRequired
};
