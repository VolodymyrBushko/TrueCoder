import React from 'react';

import FormField from '../../components/form-field';
import SubmitButton from '../../components/submit-button';

import './sign-up-page.css';

const SignUpPage = () => {
  return (
    <div className="sign-up-page container">
      <div className="row justify-content-center">
        <div className="col-4">
          <form action="#" method="post">
            <FormField label="Login" id="login" name="login" placeholder="Enter login here" type="text"/>
            <FormField label="Email" id="email" name="email" placeholder="Enter email here" type="email"/>
            <FormField label="Password" id="password" name="password" placeholder="Enter password here" type="password"/>
            <FormField label="Confirm" id="confirm" name="confirm" placeholder="Enter confirm password here" type="password"/>
            <SubmitButton label="Sign up"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
