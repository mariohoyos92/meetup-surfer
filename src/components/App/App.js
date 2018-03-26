import React from "react";
import PropTypes from "prop-types";

// Import Redux
import { connect } from "react-redux";
import { resetApp } from "../../ducks/reducer";

// Import MaterialUI Components
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

// Import Custom Components
import MeetupStepper from "../Stepper/MeetupStepper";
import EventInfo from "../EventInfo/EventInfo";

// Import CSS
import "./App.css";

const App = ({ eventInfo, resetApp }) => (
  <div>
    <AppBar
      title="Meetup Surfer"
      showMenuIconButton={false}
      iconElementRight={
        eventInfo.length > 0 && (
          <FlatButton onClick={resetApp}>Start Over</FlatButton>
        )
      }
    />
    {eventInfo.length > 0 ? <EventInfo /> : <MeetupStepper />}
  </div>
);

const mapStateToProps = state => {
  return { eventInfo: state.eventInfo };
};

export default connect(mapStateToProps, { resetApp })(App);

App.propTypes = {
  eventInfo: PropTypes.array,
  resetApp: PropTypes.func
};
