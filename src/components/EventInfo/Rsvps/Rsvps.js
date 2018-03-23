import React from "react";

// Import Redux
import { connect } from "react-redux";

// Import Material UI Components
import Card from "material-ui/Card/Card";
import CardTitle from "material-ui/Card/CardTitle";
import Divider from "material-ui/Divider";

import RsvpCard from "./RsvpCard";
import EventDetails from "../EventDetails";

const Rsvps = ({ eventInfo }) => {
  const rsvps = eventInfo.map(person => (
    <RsvpCard
      key={person.member.id}
      name={person.member.name}
      response={person.response}
      imageURL={person.member.photo.thumb_link}
    />
  ));
  return (
    <Card>
      <EventDetails />
      <CardTitle
        title="Who's Going?"
        subtitle={`Responses: ${eventInfo.length}`}
      />
      <Divider />
      <div className="profiles-container">{rsvps}</div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    eventInfo: state.eventInfo
  };
};

export default connect(mapStateToProps)(Rsvps);
