import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function Logs() {
  var arrayOfData = [];

  const columns = [
    { heading: "Id", property: "id" },
    { heading: "Type", property: "type" },
    { heading: "Datetime", property: "dateTime" },
    { heading: "Owner Id", property: "ownerId" },
    { heading: "PictureRef", property: "pictureRef" }
  ];

  const Table = ({ columns, data }) => (
    <table className="table">
      <thead>
        <tr>
          {columns.map(col => (
            <th key={`header-${col.heading}`}>{col.heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(col => (
              <td>{item[col.property]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  var db = firebase.firestore();
  const getLogs = () => {
    db.collection("stoolLog")
      .get()
      .then(snapshot => {
        console.log(snapshot);
        snapshot.forEach(doc => {
          arrayOfData.push({
            id: doc.id,
            type: doc.data().type,
            dateTime: doc.data().dateTime,
            ownerId: doc.data().ownerId,
            pictureRef: doc.data().pictureRef
          });
          console.log(doc.id, "=>", doc.data());
        });
      })
      .then(() => setLogs(arrayOfData))
      .catch(err => {
        console.log("Error getting documents", err);
      });
  };

  const [logs, setLogs] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <Table columns={columns} data={logs} />
      <input type="button" value="Get that data" onClick={() => getLogs()} />
    </div>
  );
}

export default Logs;
