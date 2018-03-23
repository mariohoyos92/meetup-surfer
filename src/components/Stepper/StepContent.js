import React from "react";

// Import Redux
import { connect } from "react-redux";
import { selectEvent, selectGroup } from "../../ducks/reducer";

// Import MaterialUI Components
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const StepContent = ({
  stepIndex,
  selectedGroup,
  eventList,
  selectedEventIndex
}) => {
  switch (stepIndex) {
    case 0:
      return (
        <SelectField
          floatingLabelText="Event Group"
          value={selectedGroup}
          onChange={selectGroup}
        >
          <MenuItem value={0} primaryText="ReactJs Dallas" />
          <MenuItem value={1} primaryText="Seriously, ReactJs Dallas" />
          <MenuItem value={2} primaryText="Dallas, TX - ReactJs" />
          <MenuItem value={3} primaryText="The one Mike Runs" />
        </SelectField>
      );
    case 1:
      const availableEvents = eventList.map((event, i) => {
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
          value={selectedEventIndex}
          onChange={selectEvent}
        >
          {availableEvents}
        </SelectField>
      );
    default:
      return "Something went wrong, please refresh the page";
  }
};
const mapStateToProps = state => {
  return {
    stepIndex: state.stepIndex,
    eventList: state.eventList,
    selectedGroup: state.selectedGroup,
    selectedEventIndex: state.selectedEventIndex
  };
};

export default connect(mapStateToProps, { selectEvent, selectGroup })(
  StepContent
);
