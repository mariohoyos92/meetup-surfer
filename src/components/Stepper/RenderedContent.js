import React from "react";

// Import Redux
import { connect } from "react-redux";
import {
  fetchEventInfo,
  fetchEventList,
  handlePrev
} from "../../ducks/reducer";

// Import MaterialUI Components
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

import StepContent from "./StepContent";

const RenderedContent = ({
  stepIndex,
  fetchEventList,
  handlePrev,
  fetchEventInfo,
  eventList,
  selectedEventIndex
}) => {
  const contentStyle = { margin: "0 16px", overflow: "hidden" };
  const selectedEvent =
    eventList.length > 0 && eventList[selectedEventIndex].id;

  return (
    <div style={contentStyle}>
      <div>
        <StepContent />
      </div>
      <div style={{ marginTop: 24, marginBottom: 12 }}>
        <FlatButton
          label="Back"
          disabled={stepIndex === 0}
          onClick={handlePrev}
          style={{ marginRight: 12 }}
        />
        <RaisedButton
          label={stepIndex === 1 ? "Look Up" : "Next"}
          primary={true}
          onClick={
            stepIndex === 0
              ? () => fetchEventList("reactjs-dallas")
              : () => fetchEventInfo("reactjs-dallas", selectedEvent)
          }
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stepIndex: state.stepIndex,
    eventList: state.eventList,
    selectedEventIndex: state.selectedEventIndex
  };
};

export default connect(mapStateToProps, {
  fetchEventInfo,
  fetchEventList,
  handlePrev
})(RenderedContent);
