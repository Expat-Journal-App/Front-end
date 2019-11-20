import React from 'react';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreateNewStory(props) {
  return (
    <div>
      <Form className='create-story-form'>
          <ErrorMessage name='title' render={msg => <div className='error'>{msg}</div>} />
          <label>Title
            <Field type='text' name='title' placeholder='Enter a title!' />
          </label>

          <ErrorMessage name='date_trip' render={msg => <div className='error'>{msg}</div>} />
          <label>Trip-Date
            <Field type='date' name='date_trip' placeholder='Enter the date of your trip!' />
          </label>

          <ErrorMessage name='country' render={msg => <div className='error'>{msg}</div>} />
          <label>Country
            <Field type='text' name='country' placeholder='Enter a country!' />
          </label>

          <ErrorMessage name='city' render={msg => <div className='error'>{msg}</div>} />
          <label>City
            <Field type='text' name='city' placeholder='Enter a city!' />
          </label>

          <ErrorMessage name='story' render={msg => <div className='error'>{msg}</div>} />
          <label>Your Story
            <Field type='text' name='story' placeholder='Enter your Story!' />
          </label>

          <ErrorMessage name='url' render={msg => <div className='error'>{msg}</div>} />
          <label>Main image
            <Field type='text' name='url' placeholder='Paste main image link here!' />
          </label>
        
        <input type='submit' />

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
            url: ''

        }
    },

    validationSchema: Yup.object().shape({
        title: Yup.string().required('Please enter a title!'),
        date_trip: Yup.string().required('Please enter a trip date!'),
        country: Yup.string().required('Please enter a country!'),
        city: Yup.string().required('Please enter a city!'),
        url: Yup.string().required('Please enter a valid image URL!'),
        
    }),

    handleSubmit(values, tools) {
        console.log(values);
        console.log(tools);

        axios.post('https://morning-sea-62543.herokuapp.com/stories/', values)
          .then(response => {
            tools.resetForm()
            tools.props.setGridItem([...tools.props.gridItem, response.data])
          })
          .catch(error => {
            console.log(error);
          })

    }
})(CreateNewStory)

export default formikCreateNewStory