import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function AddImage() {
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  // Create a storage reference from our storage service
  var storageRef = storage.ref();

  var imageRef = storageRef.child("imageLogs/wtfd.png");
  //alert(imageRef);

  const uploadImage = () => {
    alert("In upload image");
    var selectedFile = document.getElementById("image").files[0];
    try {
      alert("In try");
      // Create a reference to 'images/mountains.jpg'
      imageRef.put(selectedFile).then(function(snapshot) {
        setImage("Booyah");
        console.log("Uploaded a blob or file!");
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const [uploadedImage, setImage] = useState();

  return (
    <div>
      <input type="file" id="image" />
      <br />
      <input type="button" value="Add image" onClick={() => uploadImage()} />
      <br />
      <p>Uploaded Image: {uploadedImage}</p>
    </div>
  );
}

export default AddImage;
