import React, { useEffect, useState } from 'react';
import { withFormik, ErrorMessage , Field, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// import { BrowserHistory } from 'react-router-dom'

import {Button} from './theme'

function EditStory(props) {
  const [currentStor, setCurrentStor] = useState(props.currentStory)
  
    useEffect(() => {
      const subField = document.querySelector('#submissionfield')
      subField.value = currentStor.story
    
  }, [])

  return (

    <div>
      <Form className='create-story-form'>
      
          <label>New Story<br />
            <Field id='submissionfield' className='submissionfield' type='text' name='story' placeholder='Enter your Story!' />
          </label>
          <ErrorMessage name='story' render={msg => <div className='error'>{msg}</div>} />
        
          
          <Button type='submit'>Send Story</Button>


      </Form>
      
    </div>
  );
}

const formikEditStory = withFormik ({
    mapPropsToValues() {
        return {
            story: ''

        }
    },

    validationSchema: Yup.object().shape({
        story: Yup.string().required('Please enter a story!')

    }),

    handleSubmit(values, tools) {
      console.log(tools);

        axios.put(`https://morning-sea-62543.herokuapp.com/api/stories/${tools.props.currentStory.id}`, {
          story: `${values.story}`,
          title: `${tools.props.currentStory.title}`,
          date_trip: `${tools.props.currentStory.date_trip}`,
          country: `${tools.props.currentStory.country}`,
          city: `${tools.props.currentStory.city}`,
          url: `${tools.props.currentStory.url}`,
          description: `${tools.props.currentStory.description}`
        })
          .then(response => {
            console.log(response);
            tools.props.history.push(`/`);
          })
          .catch(error => {
            console.log(error);
          })

    }
})(EditStory)

export default formikEditStory