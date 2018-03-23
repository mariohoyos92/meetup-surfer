import React, { Component } from "react";
// Import Redux
import { connect } from "react-redux";
import {
  handlePrev,
  fetchEventList,
  selectGroup,
  fetchEventInfo,
  selectEvent
} from "../../ducks/reducer";

// Import Material UI Components
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import ExpandTransition from "material-ui/internal/ExpandTransition";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import LinearProgress from "material-ui/LinearProgress";

import RenderedContent from "./RenderedContent";

class MeetupStepper extends Component {
  render() {
    const { loadingEventList, stepIndex, loadingEventInfo } = this.props;
    return (
      <div className="stepper-container flex-center">
        <Paper style={{ width: "70%" }}>
          <div style={{ width: "100%", maxWidth: 700, margin: "auto" }}>
            <Stepper activeStep={stepIndex}>
              <Step>
                <StepLabel>Select a Meetup Group</StepLabel>
              </Step>
              <Step>
                <StepLabel>Select an event</StepLabel>
              </Step>
            </Stepper>
            <RenderedContent />
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stepIndex: state.stepIndex,
    loadingEventList: state.loadingEventList,
    eventList: state.eventList,
    selectedGroup: state.selectedGroup,
    selectedEventIndex: state.selectedEventIndex,
    eventInfo: state.eventInfo,
    loadingEventInfo: state.loadingEventInfo
  };
};

export default connect(mapStateToProps, {
  handlePrev,
  fetchEventList,
  selectGroup,
  fetchEventInfo,
  selectEvent
})(MeetupStepper);
