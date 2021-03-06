import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonGrid = styled.a`
  border-radius: 3px;
  padding: 0.8rem 1.2rem;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: rgb(98, 23, 238);
  border: 2px solid rgb(98, 23, 238);
  text-decoration: none;
  font-size: 1.2rem;
  :hover {
    color: white;
    border: 2px solid white;
  }
`;

function GridComponent(props) {
  console.log(props.item);
  

  return (
    <div>
      {!props.item ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <Link to={`/stories/${props.item.id}`}>
        <div className='grid-component-div' style={{ background: `url(${props.item.url})` }}>
          <div className='text-and-button-component'>
          <p className='title-p'>{props.item.title}</p>
          <p className='location-p'>
            {`${props.item.country},  ${props.item.city}`}
          </p>
          </div>
        </div>
          </Link>
      )}
    </div>
  );
}

export default GridComponent;
