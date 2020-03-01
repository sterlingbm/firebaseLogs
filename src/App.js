import React from "react";
import "./styles.css";
import Login from "./Login";
import Logs from "./Logs";
import AddLogs from "./AddLogs";
import AddImage from "./AddImage";
import GetImage from "./GetImage";
import UpdateLog from "./UpdateLog";
import Cards from "./Cards";
import StockRecs from "./StockRecs";
import RegisterForm from "./RegisterForm";
import "semantic-ui-css/semantic.min.css";

/*
      <h1>StockRecs</h1>
      <StockRecs />
      <h1>Login</h1>
      <Login />
      <h1>Get Logs</h1>
      <Logs />
      <h1>Add Logs</h1>
      <AddLogs />
      <h1>Add Image</h1>
      <AddImage />
      <h1>Get Image</h1>
      <GetImage />
      <h1>Update Log</h1>
      <UpdateLog />
      <h1>Cards</h1>
      <Cards />
*/

export default function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />
      <RegisterForm />
    </div>
  );
}
