import axios from "axios";

// Initial State
let initialState = {
  loadingEventList: false,
  loadingEventInfo: false,
  finishedGettingEventInfo: false,
  stepIndex: 0,
  selectedGroup: 0,
  eventList: [],
  eventInfo: {}
};

// Constants
const HANDLE_PREV = "HANDLE_PREV";
const HANDLE_NEXT = "HANDLE_NEXT";
const SELECT_GROUP = "SELECT_GROUP";
const FETCH_EVENT_LIST = "FETCH_EVENT_LIST";
const FETCH_EVENT_INFO = "FETCH_EVENT_INFO";

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case HANDLE_PREV:
      return Object.assign({}, state, { stepIndex: (state.stepIndex -= 1) });
    case SELECT_GROUP:
      return Object.assign({}, state, { selectedGroup: action.payload });

    case FETCH_EVENT_LIST + "_PENDING":
      return Object.assign({}, state, { loadingEventList: true });
    case FETCH_EVENT_LIST + "_FULFILLED":
      return Object.assign({}, state, {
        eventList: action.payload.data,
        loadingEventList: false,
        stepIndex: (state.stepIndex += 1)
      });
    case FETCH_EVENT_LIST + "_REJECTED":
      console.log(action.payload);
      break;

    case FETCH_EVENT_INFO + "_PENDING":
      return Object.assign({}, state, { loadingEventInfo: true });
    case FETCH_EVENT_INFO + "_FULFILLED":
      return Object.assign({}, state, {
        eventInfo: action.payload.data,
        loadingEventInfo: false
      });
    case FETCH_EVENT_INFO + "_REJECTED":
      console.log(action.payload);
      break;

    default:
      return state;
  }
}
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
export const fetchEventInfo = eventID => {
  return {
    type: FETCH_EVENT_INFO,
    payload: axios
      .get("/api/eventsInfo/:groupName/:eventId")
      .then(eventInfo => eventInfo)
      .catch(console.log)
  };
};
export const selectGroup = (event, index, value) => {
  return {
    type: SELECT_GROUP,
    payload: value
  };
};
