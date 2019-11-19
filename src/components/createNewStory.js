import React from 'react';
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreateNewStory() {
  return (
    <div>
      <Form className='create-story-form'>
          <ErrorMessage name='title' render={msg => <div className='error'>{msg}</div>} />
          <label>Title
            <Field type='text' name='title' placeholder='Enter a title!' />
          </label>

          <ErrorMessage name='tripDate' render={msg => <div className='error'>{msg}</div>} />
          <label>Trip-Date
            <Field type='date' name='tripDate' placeholder='Enter the date of your trip!' />
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

          <ErrorMessage name='imageMain' render={msg => <div className='error'>{msg}</div>} />
          <label>Main image
            <Field type='text' name='imageMain' placeholder='Paste main image link here!' />
          </label>

          <ErrorMessage name='imageSec1' render={msg => <div className='error'>{msg}</div>} />
          <label>Seondary image one
            <Field type='text' name='imageSec1' placeholder='Paste secondary image link one here!' />
          </label>

          <ErrorMessage name='imageSec2' render={msg => <div className='error'>{msg}</div>} />
          <label>Secondary image two
            <Field type='text' name='imageSec2' placeholder='Paste secondary image link two here!' />
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
            tripDate: '',
            country: '',
            city: '',
            story: '',
            imageMain: '',
            imageSec1: '',
            imageSec2: ''

        }
    },

    validationSchema: Yup.object().shape({
        title: Yup.string().required('Please enter a title!'),
        tripDate: Yup.string().required('Please enter a trip date!'),
        country: Yup.string().required('Please enter a country!'),
        city: Yup.string().required('Please enter a city!'),
        image1: Yup.string().required('Please enter a valid image URL!'),
        image2: Yup.string().required('Please enter a valid image URL!'),
        image3: Yup.string().required('Please enter a valid image URL!'),
        
    }),

    handleSubmit(values, tools) {
        console.log(values);
        console.log(tools);

        //AXIOS CALL HERE

    }
})(CreateNewStory)

export default formikCreateNewStory