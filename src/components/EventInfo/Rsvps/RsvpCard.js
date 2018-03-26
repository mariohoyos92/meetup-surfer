import React from "react";
import PropTypes from "prop-types";

// Import Material UI Components
import Card from "material-ui/Card/Card";
import CardHeader from "material-ui/Card/CardHeader";

const RsvpCard = ({ name, response, imageURL }) => {
  return (
    <Card style={{ margin: "5%" }}>
      <CardHeader title={name} subtitle={response} avatar={imageURL} />
    </Card>
  );
};

export default RsvpCard;

RsvpCard.propTypes = {
  name: PropTypes.string.isRequired,
  response: PropTypes.string,
  imageURL: PropTypes.string
};
