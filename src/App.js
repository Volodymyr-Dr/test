
import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import SignUp from  './Components/SignUp';
import SignIn from './Components/SignIn';

import './App.css';


function App() {
  return (
    <div className="App">
      <Link className="link link_button" to="/test/sign-in">Sign In</Link>
      <Link className="link link_button" to="/test/sign-up">Sign Up</Link>
      <Switch>
        <Route path="/test/sign-in" component={SignIn}/>
        <Route path="/test/sign-up" component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
