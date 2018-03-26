import React from "react";
import PropTypes from "prop-types";

// Import Redux
import { connect } from "react-redux";
import { resetApp } from "../../ducks/actions";

// Import MaterialUI Components
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

// Import Custom Components
import MeetupStepper from "../Stepper/MeetupStepper";
import EventInfo from "../EventInfo/EventInfo";

const App = ({ rsvps, resetApp }) => (
  <div>
    <AppBar
      title="Meetup Surfer"
      showMenuIconButton={false}
      iconElementRight={
        rsvps.length > 0 && (
          <FlatButton onClick={resetApp}>Start Over</FlatButton>
        )
      }
    />
    {rsvps.length > 0 ? <EventInfo /> : <MeetupStepper />}
  </div>
);

const mapStateToProps = state => {
  return { rsvps: state.rsvps };
};

export default connect(mapStateToProps, { resetApp })(App);

App.propTypes = {
  rsvps: PropTypes.array,
  resetApp: PropTypes.func
};
