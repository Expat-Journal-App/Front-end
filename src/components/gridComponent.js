import React from 'react';
import styled from 'styled-components'

const ButtonGrid = styled.a`
    color: white;
`

function GridComponent() {
  return (
    <div>
      <img></img>
      <p>Title</p>
      <p>Location</p>
      <p>Date</p>
      <ButtonGrid></ButtonGrid>
    </div>
  );
}

export default GridComponent;