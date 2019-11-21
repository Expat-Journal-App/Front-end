import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

const ButtonDelete = styled.a`
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
          <div className="lds-dual-ring"></div>
        )
    }

    const { title, story, date_trip, created_at, city, country, description, url } = currentStory;
  return (
    <div className='story-page'>
      <div className='story-heading'>
      <div className='edit-delete-div'>
      <ButtonBlack>Edit Story</ButtonBlack>
      <Link to='/'>
      <ButtonDelete onClick={ () => {
        axios.delete(`https://morning-sea-62543.herokuapp.com/api/stories/${props.match.params.id}`)
          .then(response => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
          }
      }>Delete Story</ButtonDelete>
      </Link>
      </div>
      <h1>{title}</h1>
      <p>{city}, {country}</p>
      </div>
      <img alt={description} src={url} width='700px' />
      <p>Post created at: {created_at}</p>
      <p className='date-of-trip'>Date of trip: {date_trip}</p>
      <p className='story-p'> {story} </p>

    </div>
  );
}

export default StoryPage;