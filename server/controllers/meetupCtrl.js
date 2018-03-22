require("dotenv").config();
const axios = require("axios");

const meetupKey = process.env.MEETUP_KEY;
const meetupAPIURL = "https://api.meetup.com/";

const getEventsInfo = (req, res) => {
  const { groupName } = req.params;
  axios
    .get(`${meetupAPIURL}${groupName}/events?key=${meetupKey}`)
    .then(eventsInfo => res.status(200).json(eventsInfo.data))
    .catch(err => {
      res.status(500).json("Could not get response from Meetup API");
      console.log(err);
    });
};

const getRSVPs = (req, res) => {
  const { groupName, eventID } = req.params;
  axios
    .get(`${meetupAPIURL}${req.params.groupName}/events/${eventID}/rsvps`)
    .then(rsvps => res.status(200).json(rsvps.data))
    .catch(err => {
      res.status(500).json("Could not get response from Meetup API");
      console.log(err);
    });
};

module.exports = {
  getEventsInfo,
  getRSVPs
};
