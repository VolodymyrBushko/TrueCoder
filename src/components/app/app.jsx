import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from '../header';
import HomePage from '../../pages/home-page';
import SignInPage from '../../pages/sign-in-page';
import SignUpPage from '../../pages/sign-up-page';
import ExercisesPage from '../../pages/exercises-page';
import ExecuteExercisePage from '../../pages/execute-exercise-page';
import ProfilePage from '../../pages/profile-page';
import AdminPage from '../../pages/admin-page/admin-page';
import Footer from '../footer';

import './app.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/exercises/:language">
          <ExercisesPage/>
        </Route>
        <Route path="/execute-exercise/:id">
          <ExecuteExercisePage/>
        </Route>
        <Route path="/profile">
          <ProfilePage/>
        </Route>
        <Route path="/admin">
          <AdminPage/>
        </Route>
        <Route path="/sign-in">
          <SignInPage/>
        </Route>
        <Route path="/sign-up">
          <SignUpPage/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
