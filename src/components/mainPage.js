import React, {useState, useEffect} from 'react';
import GridComponent from './gridComponent';
import axios from 'axios'
import styled from 'styled-components'
import Button from './NavBar'

function MainPage() {
    const [gridItem, setGridItem] = useState([])


    useEffect(() => {
    
        axios.get('https://morning-sea-62543.herokuapp.com/api/stories/')
        .then(response => {
         setGridItem(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }, []);
  
    return (
    <div>
        {gridItem.map((item) =>(
          <div className='grid-item' key={item.id}>
            <GridComponent render={(props) => (<GridComponent {...props}/> )}/>
          </div>
      ))}
    </div>
  );
}

export default MainPage;