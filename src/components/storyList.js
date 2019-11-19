import React, { useEffect, useState } from 'react';
import axios from 'axios'

function StoryList() {
    const [stories, setStories] = useState([])

    useEffect(() => {
    
        axios.get('http://localhost:4400/api/stories')
        .then(response => {
         setStories(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }, []);

  return (
    <div>
      {stories.map(story =>(
          <div className='story' key={story.id}>
            <h1>{story.title}</h1>
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
