import React, {useState} from 'react';

import FormField from '../../components/form-field';
import Button from '../../components/button';
import UserService from '../../services/user-service';
import ExerciseService from '../../services/exercise-service';

import './admin-page.css';

const AdminPage = () => {

  const userService = new UserService();
  const exerciseService = new ExerciseService();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [expectedResult, setExpectedResult] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');

  const handleLoginChange = e => setLogin(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const handleTitleChange = e => setTitle(e.target.value);
  const handleLanguageChange = e => setLanguage(e.target.value);
  const handleExpectedResultChange = e => setExpectedResult(e.target.value);
  const handleDifficultyChange = e => setDifficulty(e.target.value);
  const handleDescriptionChange = e => setDescription(e.target.value);
  const handleCodeChange = e => setCode(e.target.value);

  const createButton = {
    title: 'Create',
    color: 'success',
    type: 'submit'
  };

  const createUserFields = [
    {id: 'login', name: 'login', label: 'Login', placeholder: 'Enter login here', type: 'text', onChange: handleLoginChange},
    {id: 'email', name: 'email', label: 'Email', placeholder: 'Enter email here', type: 'email', onChange: handleEmailChange},
    {id: 'password', name: 'password', label: 'Password', placeholder: 'Enter password here', type: 'password', onChange:handlePasswordChange},
  ];

  const createExerciseFields = [
    {id: 'title', name: 'title', label: 'Title', placeholder: 'Enter title here', type: 'text', onChange:handleTitleChange},
    {id: 'difficulty', name: 'difficulty', label: 'Difficulty', placeholder: 'Enter difficulty here', type: 'text', onChange:handleDifficultyChange},
    {id: 'language', name: 'language', label: 'Language', placeholder: 'Enter language here', type: 'text', onChange:handleLanguageChange},
    {id: 'expectedResult', name: 'expectedResult', label: 'Expected Result', placeholder: 'Enter expected result here', type: 'text', onChange:handleExpectedResultChange},
    {id: 'description', name: 'description', label: 'Description', placeholder: 'Enter description here', type: 'text', useTextarea: true, onChange:handleDescriptionChange},
    {id: 'code', name: 'code', label: 'Code', placeholder: 'Enter code here', type: 'text', useTextarea: true, onChange: handleCodeChange},
  ];

  const submitCreateUser = event => {
    event.preventDefault();
    const user = {
      login,
      email,
      password
    };
    console.log(user);
    userService.register(user)
      .then(res => console.log(res));
  }

  const submitCreateExercise = event => {
    event.preventDefault();
    const exercise = {
      title,
      difficulty,
      language,
      expectedResult,
      description,
      code
    };
    exerciseService.createExercise(exercise)
      .then(res => console.log(res));
  }

  return (
    <div className="admin-page container">

      <div className="row justify-content-center mb-5">
        <div className="col-6">
          <h3 className="text-center">User management</h3>
          <form action="#" method="post" onSubmit={submitCreateUser}>
            {createUserFields.map(field => <FormField {...field}/>)}
            {<Button {...createButton} type="submit"/>}
          </form>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-6">
          <h3 className="text-center">Exercise management</h3>
          <form action="#" method="post" onSubmit={submitCreateExercise}>
            {createExerciseFields.map(field => <FormField {...field}/>)}
            {<Button {...createButton} type="submit"/>}
          </form>
        </div>
      </div>

    </div>
  );
}

export default AdminPage;
