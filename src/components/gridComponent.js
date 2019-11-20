import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ButtonGrid = styled.a`
  border-radius: 3px;
  padding: 0.8rem 1.2rem;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  text-decoration: none;
  font-size: 1.2rem;
`

function GridComponent(props) {

  return (
    <div>
      {/* <img></img> */}
      {/* <p>Title: {props.gridItem.title} </p>
      <p>Location: {`${props.gridItem.country}, ${props.gridItem.city}`} </p> */}
      <p>Date</p>
      {/* <Link to={`/stories/${props.gridItem.id}`}> */}
      <ButtonGrid>See more</ButtonGrid>
      {/* </Link> */}
    </div>
  );
}

export default GridComponent;