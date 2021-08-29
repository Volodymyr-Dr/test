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
      const borderEmail = document.querySelector("#email")
      borderEmail.classList.add('red');
    } else {
      const borderEmail = document.querySelector("#email")
      borderEmail.classList.remove('red');
      borderEmail.classList.add('green');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const regexPassword = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/);
    if (!e.target.value.match(regexPassword)) {
      const borderEmail = document.querySelector("#password")
      borderEmail.classList.add('red');
    } else {
      const borderEmail = document.querySelector("#password")
      borderEmail.classList.remove('red');
      borderEmail.classList.add('green');
    }
  };

  const cleareLocal = () => {
    localStorage.clear();
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
        />
        <br/>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          onChange={passwordHandler}
        />
        <br/>
        <BoxCheck><input
          type="checkbox" onChange={saveMe}
        /><TextCheck>Remember me</TextCheck></BoxCheck>
        <br/>
        <Button type="submit" onClick={chekingInput}>SIGN IN</Button>
      </form>
      <div className="link" style={margin}>Forgot password?</div>
      <Link className="link" to="/sign-up" onClick={cleareLocal}>Don't have an account? Sign Up</Link>
      <Copyright>Copyright 	&copy; Your Website 2021.</Copyright>
      <Switch>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
    </ManeBox>
    )
};

export default SignIn;