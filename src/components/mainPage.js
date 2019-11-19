import React, {useState, useEffect} from 'react';
import GridComponent from './gridComponent';
import axios from 'axios'
import styled from 'styled-components'
import Button from './NavBar'

function MainPage() {
    const [gridItem, setGridItem] = useState([])


    useEffect(() => {
    
        axios.get('http://localhost:4400/api/stories')
        .then(response => {
         setGridItem(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }, []);
  
    return (
    <div>
        {gridItem.map(item =>(
          <div className='grid-item' key={item.id}>
            <img src='https://i.imgur.com/O1j4R2k.jpg'/>
            <div className='grid-item-text-div'>
            <h1>{item.title}</h1>
            <p>Date of trip: {item.date_trip}</p>
            <Button>See more</Button>
            </div>
          </div>
      ))}
    </div>
  );
}

export default MainPage;