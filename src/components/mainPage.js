import React, {useState, useEffect} from 'react';
import GridComponent from './gridComponent';
import axios from 'axios'


function MainPage(props) {


    useEffect(() => {
    
        axios.get('https://morning-sea-62543.herokuapp.com/api/stories/')
        .then(response => {
         props.setGridItem(response.data);
        })
        .catch(error => {
          console.log(error);
        })
      }, []);
      

      return(
      <div className='grid-main-container' >
        {props.gridItem === undefined? <div className="lds-dual-ring"></div>: (props.gridItem.map(item => (
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