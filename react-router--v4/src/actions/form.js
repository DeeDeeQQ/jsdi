import db from "../db/fb";

const getApiDataList = () => {
  const apiData = [];
  db
    .collection("countries")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        apiData.push(doc.id, doc.data());
        console.log(apiData);
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
  return apiData;
};

export const getList = () => dispatch => {
  console.log("I got List");
  dispatch({ type: "VIEW_LIST", payload: getApiDataList() });
};
