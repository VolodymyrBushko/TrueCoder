import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import FormField from '../../components/form-field';
import SubmitButton from '../../components/submit-button';
import UserService from '../../services/user-service';

import './sign-up-page.css';

const SignUpPage = () => {

  const userService = new UserService();

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleLoginChange = e => setLogin(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleConfirmChange = e => setConfirm(e.target.value);

  const submit = event => {
    event.preventDefault();
    const user = {
      login,
      email,
      password
    };
    userService.register(user)
      .then(() => setRedirect(true));
  }

  if (redirect) {
    return <Redirect to="/sign-in"/>;
  }

  return (
    <div className="sign-up-page container">
      <div className="row justify-content-center">
        <div className="col-4">
          <form action="#" method="post" onSubmit={submit}>
            <FormField label="Login" id="login" name="login" placeholder="Enter login here" type="text"
                       onChange={handleLoginChange}/>
            <FormField label="Email" id="email" name="email" placeholder="Enter email here" type="email"
                       onChange={handleEmailChange}/>
            <FormField label="Password" id="password" name="password" placeholder="Enter password here" type="password"
                       onChange={handlePasswordChange}/>
            <FormField label="Confirm" id="confirm" name="confirm" placeholder="Enter confirm password here"
                       type="password" onChange={handleConfirmChange}/>
            <SubmitButton label="Sign up"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
