import React from "react";
import PropTypes from "prop-types";

// Import Redux
import { connect } from "react-redux";
import { fetchRsvps, fetchEventList, handlePrev } from "../../ducks/actions";

// Import MaterialUI Components
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";

// Import Custom Components
import StepContent from "./StepContent";

const RenderedContent = ({
  stepIndex,
  fetchEventList,
  handlePrev,
  fetchRsvps,
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
              : () => fetchRsvps("reactjs-dallas", selectedEvent)
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
  fetchRsvps,
  fetchEventList,
  handlePrev
})(RenderedContent);

RenderedContent.propTypes = {
  stepIndex: PropTypes.number.isRequired,
  eventList: PropTypes.array,
  selectedEventIndex: PropTypes.number.isRequired,
  fetchEventList: PropTypes.func,
  fetchRsvps: PropTypes.func,
  handlePrev: PropTypes.func
};
