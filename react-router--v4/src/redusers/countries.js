export default function countriesList(state = ["usa"], action) {
  if (action.type === "VIEW_LIST") {
    state = action.payload;
    console.log(action.payload);
    return [...state];
  }
  return state;
}
