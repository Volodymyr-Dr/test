import React, { useState } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import SignIn from './SignIn';
import {ManeBox, Input, Button, TitleForm, TextCheck, BoxCheck, Copyright} from './MyComp.ui'


const SignUp = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const greyBorderColor = 'rgb(48, 48, 48)';
	const redBorderColor = 'rgba(228, 81, 81, 0.781)';
	const greenBorderColor = ' rgba(49, 255, 49, 0.507)';

  const [firstNameBorderColor, setFirstNameBorderColor] = useState(greyBorderColor);
  const [lastNameBorderColor, setLastNameBorderColor] = useState(greyBorderColor);
  const [emailBorderColor, setEmailBorderColor] = useState(greyBorderColor);
  const [passwordBoderColor, setPasswordBorderolor] = useState(greyBorderColor);

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if(String(e.target.value).length < 3) {
      setFirstNameBorderColor(redBorderColor);
    } else {
      setFirstNameBorderColor(greenBorderColor);
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if(String(e.target.value).length < 3) {
      setLastNameBorderColor(redBorderColor);
    } else {
      setLastNameBorderColor(greenBorderColor);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const regexEmail = /(^[^\s@]{3,})+(@[^\s@]{2,})+(\.[^\s@]{2,})+$/;
    if (!regexEmail.test(String(e.target.value).toLowerCase())){
      setEmailBorderColor(redBorderColor);
    } else {
      setEmailBorderColor(greenBorderColor);
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const regexPassword = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/);
    if (!e.target.value.match(regexPassword)) {
      setPasswordBorderolor(redBorderColor);
    } else {
      setPasswordBorderolor(greenBorderColor);
    }
  };

  const saveInLocal = () => {
    localStorage.setItem("firstName", FirstName);
    localStorage.setItem("lastName", LastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  }

  const authorized = localStorage.getItem('email')
  if (authorized) {
    alert('Ви зареєстровані!')
    return <Redirect  to="/test/sign-in"/>
  }

    return( 
        <ManeBox className="App">
      <TitleForm>
        <div className="logo"><img src = "https://image.flaticon.com/icons/png/512/565/565547.png" alt="" className="logo_img"></img></div>
        Sign up
      </TitleForm>
      <form>
        <Input names
          id="firstName"
          type="text"
          placeholder="First Name"
          value={FirstName}
          onChange={firstNameHandler}
          borderColor={firstNameBorderColor}
        />
        <Input names
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={LastName}
          onChange={lastNameHandler}
          borderColor={lastNameBorderColor}
        />
        <Input 
          id="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={emailHandler}
          borderColor={emailBorderColor}
        />
        <br/>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
          borderColor={passwordBoderColor}
        />
        <br/>
        <BoxCheck><input
          type="checkbox"
        /><TextCheck>I want to receive inspiration, marketing <br/>  
        promotions and updates via email</TextCheck></BoxCheck>
        <br/>
        <Button onClick={saveInLocal}>SIGN UP</Button>
      </form> 
      <Link className="link" to="/test/sign-in">Already have an account? Sign In</Link>
      <Copyright>Copyright 	&copy; Your Website 2021.</Copyright>
      <Switch>
        <Route exact path="/test/sign-in" component={SignIn}/>
      </Switch>
    </ManeBox>
    )
};

export default SignUp;