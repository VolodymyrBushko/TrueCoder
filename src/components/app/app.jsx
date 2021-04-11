import React from 'react';

import Header from '../header';
import HomePage from '../../pages/home-page';
import SignInPage from '../../pages/sign-in-page';
import Footer from '../footer';

import './app.css';

const App = () => {
  return (
    <>
      <Header/>
      {/*<HomePage/>*/}
      <SignInPage/>
      <Footer/>
    </>
  );
}

export default App;
