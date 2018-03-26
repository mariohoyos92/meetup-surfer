import React from "react";
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
import Card from "material-ui/Card";
import CardTitle from "material-ui/Card/CardTitle";

import RenderedContent from "./RenderedContent";

const MeetupStepper = ({ loadingEventList, stepIndex, loadingEventInfo }) => {
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
