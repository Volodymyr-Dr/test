import React, { useEffect, useState }  from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import SignUp from './SignUp';
import {ManeBox, Input, Button, TitleForm, TextCheck, BoxCheck, Copyright} from './MyComp.ui'

const margin = {
  marginRight: '3rem',
  cursor: 'pointer'
};

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const greyBorderColor = 'rgb(48, 48, 48)';
	const redBorderColor = 'rgba(228, 81, 81, 0.781)';
	const greenBorderColor = ' rgba(49, 255, 49, 0.507)';

  const [emailBorderColor, setEmailBorderColor] = useState(greyBorderColor);
  const [passwordBoderColor, setPasswordBorderolor] = useState(greyBorderColor);

  
  useEffect(() =>{
    if (localStorage.saveEmail) {
    const saveEm = localStorage.getItem('saveEmail')
    setEmail(saveEm)
    const savePas = localStorage.getItem('sevePassword')
    setPassword(savePas)
    }
  },[])
  
  const saveMe = () => {
    localStorage.setItem("saveEmail", email);
    localStorage.setItem("sevePassword", password);
  }
  
  const chekingInput = () => {
    const logEm = localStorage.getItem('email');
    const inputEm = document.getElementById('email');

    const logPas = localStorage.getItem('password');
    const inputPas = document.getElementById('password');
    if(logEm === inputEm.value && logPas === inputPas.value) {
      alert("Вірний логін та пароль!")
    }
    else {
      alert("Невірний логін або пароль!")
    }
  }

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

  const clearLocal = () => {
    localStorage.clear()
  }

    return( 
        <ManeBox className="App">
      <TitleForm>
        <div className="logo"><img src = "https://image.flaticon.com/icons/png/512/565/565547.png" alt="" className="logo_img"></img></div>
        Sign in
      </TitleForm>
      <form>
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
          onChange={passwordHandler}
          borderColor={passwordBoderColor}
        />
        <br/>
        <BoxCheck><input
          type="checkbox" onChange={saveMe}
        /><TextCheck>Remember me</TextCheck></BoxCheck>
        <br/>
        <Button type="submit" onClick={chekingInput}>SIGN IN</Button>
      </form>
      <div className="link" style={margin}>Forgot password?</div>
      <Link className="link" to="/test/" onClick={clearLocal}>Don't have an account? Sign Up</Link>
      <Copyright>Copyright 	&copy; Your Website 2021.</Copyright>
      <Switch>
        <Route path="/test/" component={SignUp}/>
      </Switch>
    </ManeBox>
    )
};

export default SignIn;