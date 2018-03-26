import React from "react";
import PropTypes from "prop-types";

// Import Redux
import { connect } from "react-redux";

// Import Material UI Components
import Card from "material-ui/Card/Card";
import CardTitle from "material-ui/Card/CardTitle";
import Divider from "material-ui/Divider";

// Import Custom Components
import RsvpCard from "./RsvpCard";
import EventDetails from "./EventDetails";

const Rsvps = ({ rsvps }) => {
  const rsvpsDisplay = rsvps.map(person => (
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
      <CardTitle title="Who's Going?" subtitle={`Responses: ${rsvps.length}`} />
      <Divider />
      <div className="profiles-container">{rsvpsDisplay}</div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    rsvps: state.rsvps
  };
};

export default connect(mapStateToProps)(Rsvps);

Rsvps.propTypes = {
  rsvps: PropTypes.array.isRequired
};
