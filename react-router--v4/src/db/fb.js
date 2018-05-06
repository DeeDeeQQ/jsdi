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

export default db;
