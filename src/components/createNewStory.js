import React from 'react';
import { withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'

import { Form, Input, Title, Text, Button } from "./theme.js";




function CreateNewStory(props) {
  return (
    <div>
      <Form className='create-story-form'>
          <ErrorMessage name='title' render={msg => <div className='error'>{msg}</div>} />
          <label>Title
            <Input type='text' name='title' placeholder='Enter a title!' />
          </label>

          <ErrorMessage name='date_trip' render={msg => <div className='error'>{msg}</div>} />
          <label>Trip-Date
            <Input type='date' name='date_trip' placeholder='Enter the date of your trip!' />
          </label>

          <ErrorMessage name='description' render={msg => <div className='error'>{msg}</div>} />
          <label>Description
            <Input type='text' name='description' placeholder='Enter the image description of the image!' />
          </label>

          <ErrorMessage name='country' render={msg => <div className='error'>{msg}</div>} />
          <label>Country
            <Input type='text' name='country' placeholder='Enter a country!' />
          </label>

          <ErrorMessage name='city' render={msg => <div className='error'>{msg}</div>} />
          <label>City
            <Input type='text' name='city' placeholder='Enter a city!' />
          </label>

          <ErrorMessage name='story' render={msg => <div className='error'>{msg}</div>} />
          <label>Your Story
            <Input type='text' name='story' placeholder='Enter your Story!' />
          </label>

          <ErrorMessage name='url' render={msg => <div className='error'>{msg}</div>} />
          <label>Main image
            <Input type='text' name='url' placeholder='Paste main image link here!' />
          </label>
        
          <Button type='submit'>Send Story</Button>

      </Form>
    </div>
  );
}

const formikCreateNewStory = withFormik ({
    mapPropsToValues() {
        return {
            title: '',
            date_trip: '',
            country: '',
            city: '',
            story: '',
            url: '',
            description: ''

        }
    },

    validationSchema: Yup.object().shape({
        title: Yup.string().required('Please enter a title!'),
        description: Yup.string().required('Please enter a title!'),
        date_trip: Yup.string().required('Please enter a trip date!'),
        country: Yup.string().required('Please enter a country!'),
        city: Yup.string().required('Please enter a city!'),
        url: Yup.string().required('Please enter a valid image URL!'),

        
    }),

    handleSubmit(values, tools) {

        debugger
        axios.post('http://localhost:4400/api/stories/', values)
          .then(response => {
            
            tools.resetForm()
            tools.props.setGridItem([...tools.props.gridItem, response.data])
            debugger
          })
          .catch(error => {
            debugger
            console.log(error);
          })

    }
})(CreateNewStory)

export default formikCreateNewStory