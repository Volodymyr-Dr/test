
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignUp from  './Components/SignUp';
import SignIn from './Components/SignIn';

import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/test/sign-up" component={SignUp}/>
        <Route path="/test/sign-in" component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
