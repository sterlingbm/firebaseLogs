import firebase from "./firebase";

function todayDateGenerator() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return dd + "/" + mm + "/" + yyyy;
}

function AddStockRec(selectedSymbol, selectedAction) {
  var db = firebase.firestore();

  db.collection("stockSignals")
    .add({
      symbol: selectedSymbol,
      action: selectedAction,
      publishDate: todayDateGenerator()
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

export default AddStockRec;
