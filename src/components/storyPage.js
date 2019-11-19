import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'

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


function StoryPage(props) {
    const [currentStory, setStory] = useState()

    useEffect(() => {
        const id = props.match.params.id

        axios.get(`http://localhost:4400/api/stories/${id}`)
        .then(response => {
            setStory(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    const { title, story, date_trip, created_at, city, country, description /* Add image here */ } = currentStory;
  return (
    <div className='story-page'>
      <div className='story-heading'>
      <h1>{title}</h1>
      <div className='edit-delete-div'>
      <ButtonBlack>Edit Story</ButtonBlack>
      <ButtonBlack>Delete Story</ButtonBlack>
      </div>
      </div>
      <img alt={description} src='#' />
      <p>{created_at}</p>
      <div className='date-location-div'>
      <p>{date_trip}</p>
      <p>{city}, {country}</p>
      <p> {story} </p>
      </div>

    </div>
  );
}

export default StoryPage;