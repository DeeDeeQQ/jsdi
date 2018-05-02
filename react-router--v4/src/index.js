import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./App";
import "./index.css";

const firebase = require("firebase/app");
require("firebase/firestore");
const config = {
  apiKey: "AIzaSyAnuylzuIN3h8uILRdUaVDtRh0o3kuoHd0",
  authDomain: "react-router-v4.firebaseapp.com",
  databaseURL: "https://react-router-v4.firebaseio.com",
  projectId: "react-router-v4",
  storageBucket: "react-router-v4.appspot.com",
  messagingSenderId: "954651311913"
};

firebase.initializeApp(config);

const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

function countrieslist(state = [], action) {
  if (action.type === "VIEW_LIST") {
    db
      .collection("countries")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          state.push(doc.data());
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
    console.log("Clear state", state);
    console.log("[...] state", [...state]);
    return state;
  }
  return state;
}

function playlist(state = [], action) {
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

const store = createStore(
  countrieslist,
  // playlist,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
