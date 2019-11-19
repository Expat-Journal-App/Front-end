import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import formikCreateNewStory from "./components/createNewStory";
import NavBar from "./components/NavBar";
import StoryPage from './components/storyPage'
import StoryList from "./components/storyList";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/stories/add" component={formikCreateNewStory} />
      <Route exact path='/stories' component={StoryList} />
    </>
  );
}
export default App;

