import React from 'react';

import FormField from '../../components/form-field';
import Button from '../../components/button';

import './admin-page.css';

const AdminPage = () => {

  const createButton = {
    title: 'Create',
    color: 'success',
    type: 'submit'
  };

  const createUserFields = [
    {id: 'login', name: 'login', label: 'Login', placeholder: 'Enter login here', type: 'text'},
    {id: 'email', name: 'email', label: 'Email', placeholder: 'Enter email here', type: 'email'},
    {id: 'password', name: 'password', label: 'Password', placeholder: 'Enter password here', type: 'password'},
  ];

  const createExerciseFields = [
    {id: 'title', name: 'title', label: 'Title', placeholder: 'Enter title here', type: 'text'},
    {id: 'difficulty', name: 'difficulty', label: 'Difficulty', placeholder: 'Enter difficulty here', type: 'text'},
    {id: 'language', name: 'language', label: 'Language', placeholder: 'Enter language here', type: 'text'},
    {id: 'result', name: 'result', label: 'Result', placeholder: 'Enter result here', type: 'text'},
    {id: 'description', name: 'description', label: 'Description', placeholder: 'Enter description here', type: 'text', useTextarea: true},
    {id: 'struct', name: 'struct', label: 'Struct', placeholder: 'Enter struct here', type: 'text', useTextarea: true},
  ];

  return (
    <div className="admin-page container">

      <div className="row justify-content-center mb-5">
        <div className="col-6">
          <h3 className="text-center">User management</h3>
          <form action="#" method="post">
            {createUserFields.map(field => <FormField {...field}/>)}
            {<Button {...createButton}/>}
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <h3 className="text-center">Exercise management</h3>
          <form action="#" method="post">
            {createExerciseFields.map(field => <FormField {...field}/>)}
            {<Button {...createButton}/>}
          </form>
        </div>
      </div>

    </div>
  );
}

export default AdminPage;
