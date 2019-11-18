import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom'
import formikCreateNewStory from './components/createNewStory';


function App() {
  return (
    <div className="App">
      <h1>Expat Journal</h1>
      <Route exact path='/stories/add' component={formikCreateNewStory} />
    </div>
  );
}

export default App;
