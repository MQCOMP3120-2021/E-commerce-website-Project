import React, {useState, useEffect} from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

const Login = () => (

        <div className="App">
            <ul className="Navbar">
                <li><Link to= "/" className="brightNav">Home</Link></li>
                <li><Link to= "/Menu" className="brightNav">Menu</Link></li>
                <li><Link to= "/About" className="brightNav">About</Link></li>
                <li><img src="" className="App-logo" alt="logo" /> </li>
                <li><Link to= "/FAQ" className="brightNav">FAQ</Link></li>
                <li><Link to= "/My-cart" className="brightNav">Cart</Link></li>
                <li><Link to= "/Login" className="brightNav">Login</Link></li>
            </ul>
        </div>

)

export default Login;