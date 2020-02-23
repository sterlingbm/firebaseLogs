import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function Login() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState();

  const signOut = () => {
    firebase.auth().signOut();
    alert("Sign Out");
  };

  const signIn = () => {
    var email;
    var password;
    var loginResponse;
    email = "fuckerlogin@audizer.com";
    password = "Tankinator2$";
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    alert(loginResponse);
  };

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setUserData(JSON.stringify(user));
      //alert(JSON.stringify(user));
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      setUserData(user);
      // User is signed out.
      // ...
    }
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `Welcome ${userData.email}`;
  });

  return (
    <div>
      Username: <input />
      <br />
      Password: <input />
      <br />
      <input type="button" value="Log in" onClick={() => signIn()} />
      <input type="button" value="Sign Out" onClick={() => signOut()} />
      <p>
        Userdata: <br /> {userData}
      </p>
    </div>
  );
}

export default Login;
