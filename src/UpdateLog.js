import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function UpdateLog() {
  var db = firebase.firestore();
  const updateLogById = () => {
    var getThisId = document.getElementById("idToUpdate").value;

    var logRef = db.collection("stoolLog").doc(getThisId);

    // Set the "capital" field of the city 'DC'
    return logRef
      .update({
        pictureRef:
          "https://firebasestorage.googleapis.com/v0/b/react-1c45d.appspot.com/o/imageLogs%2Fpreview.jpg?alt=media&token=ee3a648f-6401-4821-a5cd-b7912373c53b"
      })
      .then(function() {
        console.log("Document successfully updated!");
        setUpdateLogStatus("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
        setUpdateLogStatus("Error updating document: " + error);
      });
  };

  const [updateLogStatus, setUpdateLogStatus] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <input id="idToUpdate" />
      <input
        type="button"
        value="Update Log by Id"
        onClick={() => updateLogById()}
      />
      <p>Add Log Status: {updateLogStatus}</p>
    </div>
  );
}

export default UpdateLog;
