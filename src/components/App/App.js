import React from "react";

// Import Redux
import { connect } from "react-redux";

// Import MaterialUI Components
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

// Import Custom Components
import MeetupStepper from "../Stepper/MeetupStepper";
import EventInfo from "../EventInfo/EventInfo";

// Import CSS
import "./App.css";

const App = ({ eventInfo }) => (
  <div>
    <AppBar
      title="Meetup Surfer"
      showMenuIconButton={false}
      iconElementRight={
        eventInfo.length > 0 && <FlatButton>Start Over</FlatButton>
      }
    />
    {eventInfo.length > 0 ? <EventInfo /> : <MeetupStepper />}
  </div>
);

const mapStateToProps = state => {
  return { eventInfo: state.eventInfo };
};

export default connect(mapStateToProps)(App);
