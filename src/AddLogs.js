import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function AddLogs() {
  var db = firebase.firestore();
  const addLog = () => {
    db.collection("stoolLog")
      .add({
        dateTime: Date.now(),
        ownerId: "Unknown",
        pictureRef: "gs://react-1c45d.appspot.com/imageLogs/preview.jpg",
        type: "Loose mushy pieces"
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        setAddLogStatus("Document written with ID: " + docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
        setAddLogStatus("Error adding document: " + error);
      });
  };

  const [addLogStatus, setAddLogStatus] = useState();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <input type="button" value="Add that data" onClick={() => addLog()} />
      <p>Add Log Status: {addLogStatus}</p>
    </div>
  );
}

export default AddLogs;
