import {
  HANDLE_PREV,
  SELECT_GROUP,
  SELECT_EVENT,
  FETCH_RSVPS,
  FETCH_EVENT_LIST,
  RESET_APP
} from "./actions";

// Initial State
let initialState = {
  loadingEventList: false,
  loadingRsvps: false,
  stepIndex: 0,
  selectedGroup: 0,
  selectedEventIndex: 0,
  eventList: [],
  rsvps: []
};

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case HANDLE_PREV:
      return Object.assign({}, state, { stepIndex: (state.stepIndex -= 1) });

    case SELECT_GROUP:
      return Object.assign({}, state, { selectedGroup: action.payload });

    case SELECT_EVENT:
      return Object.assign({}, state, { selectedEventIndex: action.payload });

    case RESET_APP:
      return Object.assign({}, state, initialState);

    // ---------------------------------------- Fetch Events---------------

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

    // ---------------------------------------- Fetch RSVPS ----------------------

    case FETCH_RSVPS + "_PENDING":
      return Object.assign({}, state, { loadingRsvps: true });

    case FETCH_RSVPS + "_FULFILLED":
      return Object.assign({}, state, {
        rsvps: action.payload.data,
        loadingRsvps: false
      });

    case FETCH_RSVPS + "_REJECTED":
      console.log(action.payload);
      break;

    // -------------------------------------- Default ---------------------------

    default:
      return state;
  }
}
