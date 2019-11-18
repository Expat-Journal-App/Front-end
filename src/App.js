import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import formikCreateNewStory from "./components/createNewStory";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      {/* <h1>Expat Journal</h1> */}
      <Route exact path="/stories/add" component={formikCreateNewStory} />
    </>
  );
}
export default App;
