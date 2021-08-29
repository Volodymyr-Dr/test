
import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import SignUp from  './Components/SignUp';
import SignIn from './Components/SignIn';

import './App.css';


function App() {
  return (
    <div className="App">
      <Link className="link link_button" to="/sign-in">Sign In</Link>
      <Link className="link link_button" to="/sign-up">Sign Up</Link>
      <Switch>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
