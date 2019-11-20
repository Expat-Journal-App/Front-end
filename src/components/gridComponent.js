import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;

function GridComponent(props) {
  console.log(props.item);
  

  return (
    <div>
      {!props.item ? (
        <h2>Loading...</h2>
      ) : (
        <div className='grid-component-div' style={{ background: `url(${props.item.url})` }}>
          <div className='text-and-button-component'>
          <p>{props.item.title}</p>
          <p>
            {`${props.item.country},  ${props.item.city}`}
          </p>
          <Link to={`/stories/${props.item.id}`}>
            <ButtonGrid>See more</ButtonGrid>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default GridComponent;
