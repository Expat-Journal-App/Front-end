import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import formikCreateNewStory from "./components/createNewStory";
import NavBar from "./components/NavBar";

import StoryPage from './components/storyPage'

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/stories/add" component={formikCreateNewStory} />
    </>
  );
}
export default App;

