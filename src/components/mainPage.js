import React, {useState, useEffect} from 'react';
import GridComponent from './gridComponent';
import axios from 'axios'
import styled from 'styled-components'
import Button from './NavBar'

function MainPage(props) {

  const [gridItem, setGridItem] = useState()

    useEffect(() => {
    
        axios.get('https://morning-sea-62543.herokuapp.com/api/stories/')
        .then(response => {
         setGridItem(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }, []);
      

      return(
      <div className='grid-main-container' >
        {gridItem === undefined? <p>Loading...</p>: (gridItem.map(item => (
          <div key={item.id}>
            <GridComponent item={item} key={item.id} />
          </div>
        ))) }


      </div>
      )


  //     return (
  //       <div>
  //         {dataX? (dataX.map((item) => (
  //         <div className='grid-item' key={item.id}>
  //           <GridComponent render={(props) => (<GridComponent {...props} item={item}/> )}/>
  //         </div>
  //     ))): <p>Loading...</p>}
        
  //   </div>
  // );
}

export default MainPage;