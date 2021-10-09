import React, {useState, useEffect} from 'react';
import '../css/loginForm.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import logo from '../assets/logo-black.png'
import loginImg from '../assets/loginImg.jpg'
import productService from '../services/productService';

const Login = ({user, setUser}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const formHandler =(event) => {
    event.preventDefault()
    console.log("Login form submitted")
  
  
  productService.login({username, password})
  .then(data => {
    console.log("Success:", data)
    setUser(data)
  })
  .catch(error =>{
    console.log("Error:", error)
  })
  }

  if(user){
    return(
      <div className="loggedIn">
        <p>Logged in as {user.name}</p>
      </div>
    )
  } else {
    return(
        <div className="LoginForm">

            <div className="loginSection">
              <div className="loginImg">
                <img src={loginImg} alt="pastry" className="loginImg"/>
              </div>
              <div className = "loginForm">
                <div className = "loginPadding">
                  <h3>Login To Your Account</h3>
                  <form onSubmit={formHandler} className="loginFormHandler">
                    <input type="text" name="username" placeholder="username" onChange={e=>setUsername(e.target.value)}/>
                    <input type="password" name="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                    <button type="submit">GO →</button>
                  </form>
                </div>
              </div>
            </div>
        </div>

    )}}

export default Login;