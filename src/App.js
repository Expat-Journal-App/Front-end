import React, {useState} from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import formikCreateNewStory from "./components/createNewStory";
import NavBar from "./components/NavBar";
import StoryPage from './components/storyPage'
import StoryList from "./components/storyList";
import MainPage from "./components/mainPage";
import error404 from './components/error404'
import GridComponent from "./components/gridComponent";

function App() {
  const [stories, setStories] = useState([])
  const [gridItem, setGridItem] = useState()
  

  return (
    <>
      <NavBar />
      <Route exact path ='/'  render={(props) => {
       return (
            <MainPage {...props} gridItem={gridItem} setGridItem={setGridItem} />
        )}} />
      <Route exact path="/stories/add" component={formikCreateNewStory} gridItem={gridItem} setGridItem={setGridItem} />
      <Route exact path="/stories" 
       render={(props) => {
       return (
            <div><StoryList {...props} stories={stories} setStories={setStories} /></div>
        )}} /> 
      <Route path="/stories/:id" render={(props) => (<StoryPage {...props}/> )}/>
      <Route exact path='/error404' component={error404} />
    </>
  );
}
export default App;

