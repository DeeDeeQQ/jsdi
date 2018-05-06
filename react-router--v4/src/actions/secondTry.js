import db from "../db/fb";

export const getList = () => dispatch => {
  console.log("I got List");
  dispatch({ type: "VIEW_LIST", payload: getApiDataList() });
};
