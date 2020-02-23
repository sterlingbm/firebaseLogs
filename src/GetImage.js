import React, { useState, useEffect } from "react";
import firebase from "./firebase";

function GetImage() {
  var storage = firebase.storage();

  var imageRef = storage.refFromURL(
    "gs://react-1c45d.appspot.com/imageLogs/preview.jpg"
  );

  const getDownloadUrl = () => {
    try {
      imageRef.getDownloadURL().then(function(url) {
        setImageDownloadUrl(url);
      });
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
  };

  const [imageDownloadUrl, setImageDownloadUrl] = useState();

  return (
    <div>
      <input
        type="button"
        value="Get Download Url"
        onClick={() => getDownloadUrl()}
      />
      <br />
      <p>Image Download Url: {imageDownloadUrl}</p>
    </div>
  );
}

export default GetImage;
