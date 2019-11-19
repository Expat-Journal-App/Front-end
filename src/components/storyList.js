import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import StoryPage from './storyPage'

function StoryList() {
    const [stories, setStories] = useState([])

    useEffect(() => {
    
        axios.get('https://morning-sea-62543.herokuapp.com/api/stories/')
        .then(response => {
         console.log(response.data);
         setStories(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }, []);

  return (
    <div>
        <Route path='stories/:id' render={(props) => (<StoryPage {...props} />)} />
      {stories.map(story =>(
          <div className='story' key={story.id}>
            <h1>{story.title}</h1>
            <img src={story.url} alt={story.description} width='50%' />
            <p>Date of trip: {story.date_trip}</p>
            <p>Story created: {story.created_at}</p>
            <h2>Story:</h2>
            <p>{story.story}</p>
          </div>
      ))}
    </div>
  );
}

export default StoryList;
