import React, { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'


function StoryList(props) {
    
    useEffect(() => {
    
        axios.get('https://morning-sea-62543.herokuapp.com/api/stories/')
        .then(response => {
         props.setStories(response.data);

        })
        .catch(error => {
          console.log(error);
        })
      }, []);

  return (
    <div>
         {props.stories.map(story =>(
          <div className='story' key={story.id}>
            <h1>{story.title}</h1>
            <Link to={`/stories/${story.id}`}>
            <img src={story.url} alt={story.description} width='50%' />
            </Link>
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
