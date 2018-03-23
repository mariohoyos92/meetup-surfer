import React, { Component } from "react";
//import Redux
import { connect } from "react-redux";
import {
  handlePrev,
  fetchEventList,
  selectGroup,
  fetchEventInfo
} from "../../ducks/reducer";

// Import Material UI Components
import AppBar from "material-ui/AppBar";
import { Step, Stepper, StepLabel } from "material-ui/Stepper";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

// Import CSS
import "./App.css";

class App extends Component {
  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <SelectField
            floatingLabelText="Event Group"
            value={this.props.selectedGroup}
            onChange={this.props.selectGroup}
          >
            <MenuItem value={0} primaryText="ReactJs Dallas" />
            <MenuItem value={1} primaryText="Seriously, ReactJs Dallas" />
            <MenuItem value={2} primaryText="Dallas, TX - ReactJs" />
            <MenuItem value={3} primaryText="The one Mike Runs" />
          </SelectField>
        );
      case 1:
        const availableEvents = this.props.eventList.map((event, i) => {
          return (
            <MenuItem
              value={i}
              primaryText={`At ${event.venue.name} on ${event.local_date}`}
              key={event.id}
            />
          );
        });
        return (
          <SelectField
            autoWidth
            maxHeight={200}
            floatingLabelText="Select an Event"
            value={this.props.selectedEventIndex}
            onChange={this.props.selectEvent}
          >
            {availableEvents}
          </SelectField>
        );
      default:
        return "Something went wrong, please refresh the page";
    }
  }
  renderContent() {
    const {
      stepIndex,
      fetchEventList,
      handlePrev,
      fetchEventInfo,
      eventList,
      selectedEventIndex,
      selectedGroup
    } = this.props;
    const contentStyle = { margin: "0 16px", overflow: "hidden" };
    const selectedEvent =
      eventList.length > 0 && eventList[selectedEventIndex].id;

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
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
  }

  render() {
    const { loadingEventList, stepIndex } = this.props;
    console.log(this.props);
    return (
      <div>
        <AppBar title="Meetup Surfer" />
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
              {this.renderContent()}
            </div>
          </Paper>
        </div>
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
    eventInfo: state.eventInfo
  };
};

export default connect(mapStateToProps, {
  handlePrev,
  fetchEventList,
  selectGroup,
  fetchEventInfo
})(App);
