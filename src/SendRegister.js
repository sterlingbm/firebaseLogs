import React, { useState, useEffect } from "react";
import firebase from "./firebase";

async function SendRegister(props) {
  alert("in Send register");
  alert(JSON.stringify(props));
  var db = firebase.firestore();

  if (props.registrationType === "email") {
    const docRef = await db.collection("emailAlerts")
      .add({
        email: props.email,
        latitude: props.latitude,
        longitude: props.longitude,
        distance: props.distance,
        status: "active"
      })
      alert('In send register: ' + docRef.id);
        return docRef.id;
  }
}

export default SendRegister;
