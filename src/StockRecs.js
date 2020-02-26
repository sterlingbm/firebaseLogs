import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Label } from "semantic-ui-react";
import AddStockRec from "./AddStockRec";

function Logs() {
  var arrayOfStockSignals = [];

  const StockSignalLabels = ({ listOfStockSignals }) => (
    <div>
      {console.log("rendering StockSignalLabs")}
      {listOfStockSignals.map(stockSignal => (
        <div>
          <LabelElement
            id={stockSignal.id}
            symbol={stockSignal.symbol}
            action={stockSignal.action}
            publishDate={stockSignal.publishDate}
          />
          <br />
        </div>
      ))}
    </div>
  );

  const LabelElement = ({ id, symbol, action, publishDate }) => (
    <div>
      {console.log("rendering Label Element")}
      <Label key={id} as="a" color="blue" image>
        {symbol}
        <Label.Detail>{action}</Label.Detail>
        <Label.Detail>{publishDate}</Label.Detail>
      </Label>
    </div>
  );

  var db = firebase.firestore();
  const getStockSignals = () => {
    db.collection("stockSignals")
      .get()
      .then(snapshot => {
        console.log(snapshot);
        snapshot.forEach(doc => {
          arrayOfStockSignals.push({
            id: doc.id,
            symbol: doc.data().symbol,
            action: doc.data().action,
            publishDate: doc.data().publishDate
          });
          console.log(doc.id, "=>", doc.data());
        });
      })
      .then(() => setStockSignals(arrayOfStockSignals))
      .catch(err => {
        console.log("Error getting documents", err);
      });
  };

  const [stockSignalsList, setStockSignals] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      Add Stock:
      <input
        type="button"
        value="Google Buy Signal"
        onClick={() => AddStockRec("GOOG", "BUY")}
      />
      Stock Label List:
      <StockSignalLabels listOfStockSignals={stockSignalsList} />
      <input
        type="button"
        value="Get those stocks"
        onClick={() => getStockSignals()}
      />
    </div>
  );
}

export default Logs;
