import React, { useEffect } from 'react';
import axios from 'axios'

function StoryList() {

    useEffect(() => {
    
        axios.get('http://localhost:4400/api/stories')
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
      }, []);

  return (
    <div>
      
    </div>
  );
}

export default StoryList;
