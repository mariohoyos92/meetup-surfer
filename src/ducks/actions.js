import axios from "axios";

// Constants
export const HANDLE_PREV = "HANDLE_PREV";
export const SELECT_GROUP = "SELECT_GROUP";
export const SELECT_EVENT = "SELECT_EVENT";
export const FETCH_EVENT_LIST = "FETCH_EVENT_LIST";
export const FETCH_RSVPS = "FETCH_RSVPS";
export const RESET_APP = "RESET_APP";

// Action Creators
export const handlePrev = () => {
  return {
    type: HANDLE_PREV
  };
};
export const fetchEventList = groupName => {
  return {
    type: FETCH_EVENT_LIST,
    payload: axios
      .get(`/api/eventsInfo/${groupName}`)
      .then(eventList => eventList)
      .catch(console.log)
  };
};
export const fetchRsvps = (selectedGroup, eventId) => {
  return {
    type: FETCH_RSVPS,
    payload: axios
      .get(`/api/rsvps/${selectedGroup}/${eventId}`)
      .then(rsvps => rsvps)
      .catch(console.log)
  };
};
export const selectGroup = (event, index, value) => {
  return {
    type: SELECT_GROUP,
    payload: value
  };
};
export const selectEvent = (event, index, value) => {
  return {
    type: SELECT_EVENT,
    payload: value
  };
};

export const resetApp = () => {
  return {
    type: RESET_APP
  };
};
