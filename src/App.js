import React, {useState} from "react";
import "./App.css";
import { Route } from "react-router-dom";
import FormikCreateNewStory from "./components/createNewStory";
import NavBar from "./components/NavBar";
import StoryPage from './components/storyPage'
import StoryList from "./components/storyList";
import MainPage from "./components/mainPage";
import error404 from './components/error404'



function App() {
  const [stories, setStories] = useState([])
  const [gridItem, setGridItem] = useState([])
  

  return (
    <>
      <NavBar />
      <Route exact path ='/'  render={(props) => {
       return (
            <MainPage {...props} gridItem={gridItem} setGridItem={setGridItem} />
        )}} />
      <Route exact path="/add-story" render={(props) => {
       return (
            <FormikCreateNewStory {...props} gridItem={gridItem} setGridItem={setGridItem} />
        )}} />
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

