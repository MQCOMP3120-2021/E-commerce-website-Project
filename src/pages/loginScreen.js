import React, {useState, useEffect} from 'react';
import '../loginForm.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import logo from '../assets/logo-black.png'
import loginImg from '../assets/loginImg.jpg'
const Login = () => (

        <div className="App">
            <ul className="Navbar">
                <li><Link to= "/" className="brightNav">Home</Link></li>
                <li><Link to= "/Menu" className="brightNav">Menu</Link></li>
                <li><Link to= "/About" className="brightNav">About</Link></li>
                <li><img src={logo} width="100px" height="100px" className="App-logo" alt="logo" /> </li>
                <li><Link to= "/FAQ" className="brightNav">FAQ</Link></li>
                <li><Link to= "/My-cart" className="brightNav">Cart</Link></li>
                <li><Link to= "/Login" className="brightNav">Login</Link></li>
            </ul>

            <div className="loginSection">
              <div className="loginImg">
                <img src={loginImg} alt="pastry" className="loginImg"/>
              </div>
              <div className = "loginForm">
                <div className = "loginPadding">
                  <h3>Login To Your Account</h3>
                  <form>
                    <input type="text" name="username" placeholder="username"/>
                    <input type="password" name="password" placeholder="password"/>
                    <button type="submit">GO →</button>
                  </form>
                </div>
              </div>
            </div>
        </div>

)

export default Login;