import React from 'react';

import FormField from '../../components/form-field';
import SubmitButton from '../../components/submit-button';

import './sign-in-page.css';

const SignInPage = () => {
  return (
    <div className="sign-in-page container">
      <div className="row justify-content-center">
        <div className="col-4">
          <form action="#" method="post">
            <FormField label="Login" id="login" name="login" placeholder="Enter login here" type="text"/>
            <FormField label="Password" id="password" name="password" placeholder="Enter password here" type="password"/>
            <SubmitButton label="Sign in"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
