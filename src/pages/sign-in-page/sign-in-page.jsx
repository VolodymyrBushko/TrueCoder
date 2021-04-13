import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

import FormField from '../../components/form-field';
import SubmitButton from '../../components/submit-button';

import CookieUtil from '../../util/CookieUtil';
import UserService from '../../services/user-service';

import './sign-in-page.css';

const SignInPage = () => {

  const userService = new UserService();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleLoginChange = e => setLogin(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  const submit = event => {
    event.preventDefault();
    const user = {
      login,
      password
    };
    userService.login(user)
      .then(res => {
        const {token, isAdmin} = res;
        CookieUtil.setCookie('access_token', token);
        CookieUtil.setCookie('is_admin', isAdmin);
        setRedirect(true);
      });
  }

  if (redirect) {
    return <Redirect to="/profile"/>;
  }

  return (
    <div className="sign-in-page container">
      <div className="row justify-content-center">
        <div className="col-4">
          <form action="#" method="post" onSubmit={submit}>
            <FormField label="Login" id="login" name="login" placeholder="Enter login here" type="text"
                       onChange={handleLoginChange}/>
            <FormField label="Password" id="password" name="password" placeholder="Enter password here" type="password"
                       onChange={handlePasswordChange}/>
            <SubmitButton label="Sign in"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
