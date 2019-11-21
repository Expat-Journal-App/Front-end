import React from 'react';
import { withFormik, ErrorMessage , Field, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'

import {Button} from './theme'



function CreateNewStory(props) {
  return (
    <div>
      <Form className='create-story-form'>
          <label>Title <br />
            <Field type='text' name='title' placeholder='Enter a title!' className='all-fields'/>
          </label>
          <ErrorMessage name='title' render={msg => <div className='error'>{msg}</div>} />

          <label>Trip-Date <br />
            <Field type='date' className='date-field' name='date_trip' placeholder='Enter the date of your trip!' />
          </label>
          <ErrorMessage name='date_trip' render={msg => <div className='error'>{msg}</div>} />

          <label>Description <br />
            <Field type='text' className='all-fields' name='description' placeholder='Enter the image description of the image!' />
          </label>
          <ErrorMessage name='description' render={msg => <div className='error'>{msg}</div>} />

          <label>Country <br />
            <Field type='text' className='all-fields' name='country' placeholder='Enter a country!' />
          </label>
          <ErrorMessage name='country' render={msg => <div className='error'>{msg}</div>} />

          <label>City <br />
            <Field type='text' className='all-fields' name='city' placeholder='Enter a city!' />
          </label>
          <ErrorMessage name='city' render={msg => <div className='error'>{msg}</div>} />


          <label>Your Story <br />
            <Field className='submissionfield' cols="40" rows="5" type='text' name='story' placeholder='Enter your Story!' />
          </label>
          <ErrorMessage name='story' render={msg => <div className='error'>{msg}</div>} />

          <label>Main image <br />
            <Field type='text' name='url' className='all-fields' placeholder='Paste main image link here!' />
          </label>
          <ErrorMessage name='url' render={msg => <div className='error'>{msg}</div>} />
        
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
      

        axios.post('http://localhost:4400/api/stories/', values)
          .then(response => {
            tools.resetForm()
            this.props.setGridItem([...this.props.gridItem, response.data])
            debugger
          })
          .catch(error => {
            console.log(error);
          })

    }
})(CreateNewStory)

export default formikCreateNewStory