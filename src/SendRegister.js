import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function SendRegister(props) {
  alert("in Send register");
  alert(JSON.stringify(props));
  var db = firebase.firestore();

  if (props.registrationType === "email") {
    db.collection("emailAlerts")
      .add({
        email: props.email,
        latitude: props.latitude,
        longitude: props.longitude,
        distance: props.distance,
        status: "active"
      })
      .then(function(docRef) {
        return docRef.id;
      })
      .catch(function(error) {
        return "Error adding document: " + error;
      });
  }
}

export default SendRegister;
