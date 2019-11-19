import React from 'react';
import styled from 'styled-components'

const ButtonBlack = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin-right: 1rem;
  padding: 0.25em 1em;
  margin-top: 2rem;
  align-self: right;
`


function StoryPage() {
  return (
    <div className='story-page'>
      <div className='story-heading'>
      <h1>Title goes here</h1>
      <div className='edit-delete-div'>
      <ButtonBlack>Edit Story</ButtonBlack>
      <ButtonBlack>Delete Story</ButtonBlack>
      </div>
      </div>

      <div className='date-location-div'>
      <p>Date of the trip</p>
      <p>City, Country</p>
      </div>

    </div>
  );
}

export default StoryPage;