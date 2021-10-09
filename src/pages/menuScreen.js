import React, {useState, useEffect} from 'react';
import '../menuScreen.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import logo from '../assets/logo-black.png'

const Menu = () => (
  <div className="App">
      <form action="/" method="get">
            <input
              type="text"
              id="header-search"
            /> 
      </form>
  </div>
)

export default Menu;



