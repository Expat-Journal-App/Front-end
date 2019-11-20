import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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

{/*This routing doesnt work right now its because the API cant handle it YET! PLEASE DONT CHANGE!*/}
function StoryPage(props) {
    const [currentStory, setStory] = useState()
    // let ifGood = ''

    useEffect(() => {
        const id = props.match.params.id
        // ifGood = props.match.params.id

        axios.get(`https://morning-sea-62543.herokuapp.com/api/stories/${id}`)
        .then(response => {
            setStory(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    // if (!ifGood && ifGood != 0) {
    //     return (
    //         <Redirect to='/error404' />
    //     )
    // }
    
    if(!currentStory) {
        return(
            <h2>Loading...</h2>
        )
    }

    const { title, story, date_trip, created_at, city, country, description, url } = currentStory;
  return (
    <div className='story-page'>
      <div className='story-heading'>
      <h1>{title}</h1>
      <div className='edit-delete-div'>
      <ButtonBlack>Edit Story</ButtonBlack>
      <ButtonBlack>Delete Story</ButtonBlack>
      </div>
      </div>
      <img alt={description} src={url} width='500px' />
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