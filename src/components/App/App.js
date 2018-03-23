import React, { Component } from "react";

// Import MaterialUI Components
import AppBar from "material-ui/AppBar";

// Import Custom Components
import MeetupStepper from "../Stepper/MeetupStepper";

// Import CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Meetup Surfer" />
        <MeetupStepper />
      </div>
    );
  }
}
export default App;
