import React from 'react';

import Header from '../header';
import HomePage from '../../pages/home-page';
import SignInPage from '../../pages/sign-in-page';
import SignUpPage from '../../pages/sign-up-page';
import Footer from '../footer';

import './app.css';

const App = () => {
  return (
    <>
      <Header/>
      {/*<HomePage/>*/}
      {/*<SignInPage/>*/}
      <SignUpPage/>
      <Footer/>
    </>
  );
}

export default App;
