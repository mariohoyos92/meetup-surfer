import React from "react";

// Import Redux
import { connect } from "react-redux";

// Import Material UI Components
import CardTitle from "material-ui/Card/CardTitle";

const EventDetails = ({ eventList, selectedEventIndex }) => {
  const event = eventList[selectedEventIndex];
  const localTime = new Date(
    `${event.local_date} ${event.local_time}`
  ).toLocaleTimeString();

  return (
    <div>
      <CardTitle title="Event Info" />

      <ul>
        <li>
          <strong>Group Name: </strong> {event.group.name}
        </li>
        <li>
          <strong>Event Name: </strong> {event.name}
        </li>

        <li>
          <strong>Event Date/Time: </strong>
          {`${event.local_date} at ${localTime}`}
        </li>

        <li>
          <strong>Venue: </strong>
          {event.venue.name}{" "}
          <a
            href={`http://www.google.com/maps/place/${event.venue.lat},${
              event.venue.lon
            }`}
            target="_blank"
          >
            Google Maps
          </a>
        </li>
        <li>
          <a href={`${event.link}`} target="_blank">
            Look on Meetup
          </a>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    eventList: state.eventList,
    selectedEventIndex: state.selectedEventIndex
  };
};

export default connect(mapStateToProps)(EventDetails);
