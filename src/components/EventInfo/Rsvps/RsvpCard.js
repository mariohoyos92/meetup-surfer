import React from "react";

// Import Material UI Components
import Card from "material-ui/Card/Card";
import CardText from "material-ui/Card/CardText";
import CardHeader from "material-ui/Card/CardHeader";

const RsvpCard = ({ name, rsvp, imageURL }) => {
  return (
    <Card style={{ margin: "5%" }}>
      <CardHeader title={name} subtitle={rsvp} avatar={imageURL} />
    </Card>
  );
};

export default RsvpCard;
