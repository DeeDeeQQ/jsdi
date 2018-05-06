export default function playlist(state = [], action) {
  if (action.type === "ADD_TRACK") {
    return [...state, action.payload];
  }
  if (action.type === "DELETE_TRACK") {
    state.splice(action.payload, 1);
    return [...state];
  }
  if (action.type === "EDIT_TRACK") {
    state.splice(action.payload, 1, action.value);
    return [...state];
  }
  return state;
}
