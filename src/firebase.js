// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPGYny9oNcGmheHi-Red7MAE49sujIvFw",
  authDomain: "react-1c45d.firebaseapp.com",
  databaseURL: "https://react-1c45d.firebaseio.com",
  projectId: "react-1c45d",
  storageBucket: "react-1c45d.appspot.com",
  messagingSenderId: "16073780429",
  appId: "1:16073780429:web:d790e8a412cf35073a8d84",
  measurementId: "G-ZHE51PLVJR"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
