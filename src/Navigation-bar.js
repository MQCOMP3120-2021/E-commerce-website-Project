import React from 'react';
import {
   Link
} from "react-router-dom";
  import logo1 from './assets/logo-black.png'
  import logo2 from './assets/j-logo.png'


const BrightNavBar = () => {
    return(
    <ul className="Navbar">
      <li><Link to= "/" className="brightNav">Home</Link></li>
      <li><Link to= "/Menu" className="brightNav">Menu</Link></li>
      <li><Link to= "/About" className="brightNav">About</Link></li>
      <li><img src={logo1} width="100px" height="100px" className="App-logo" alt="logo" /> </li>
      <li><Link to= "/FAQ" className="brightNav">FAQ</Link></li>
      <li><Link to= "/My-cart" className="brightNav">Cart</Link></li>
      <li><Link to= "/Login" className="brightNav">Login</Link></li> 
    </ul>
    )
}


const DarkNavBar = () => {
    return(
      <ul className="Navbar">
        <li><Link to= "/" className="darkNav">Home</Link></li>
        <li><Link to= "/Menu" className="darkNav">Menu</Link></li>
        <li><Link to= "/About" className="darkNav">About</Link></li>
        <li><img src= {logo2} width="100px" height="100px" className="App-logo" alt="logo" /> </li>
        <li><Link to= "/FAQ" className="darkNav">FAQ</Link></li>
        <li><Link to= "/My-cart" className="darkNav">Cart</Link></li>
        <li><Link to= "/Login" className="darkNav">Login</Link></li>
       </ul>
    )
}

const BrightNavBarUser = () => {
  return(
  <ul className="Navbar">
    <li><Link to= "/" className="brightNav">Home</Link></li>
    <li><Link to= "/Menu" className="brightNav">Menu</Link></li>
    <li><Link to= "/About" className="brightNav">About</Link></li>
    <li><img src={logo1} width="100px" height="100px" className="App-logo" alt="logo" /> </li>
    <li><Link to= "/FAQ" className="brightNav">FAQ</Link></li>
    <li><Link to= "/My-cart" className="brightNav">Cart</Link></li>
    <li><Link to= "/My-Account" className="brightNav">My Account</Link></li> 
  </ul>
  )
}


const DarkNavBarUser = () => {
  return(
    <ul className="Navbar">
      <li><Link to= "/" className="darkNav">Home</Link></li>
      <li><Link to= "/Menu" className="darkNav">Menu</Link></li>
      <li><Link to= "/About" className="darkNav">About</Link></li>
      <li><img src= {logo2} width="100px" height="100px" className="App-logo" alt="logo" /> </li>
      <li><Link to= "/FAQ" className="darkNav">FAQ</Link></li>
      <li><Link to= "/My-cart" className="darkNav">Cart</Link></li>
      <li><Link to= "/My-Account" className="darkNav">My Account</Link></li>
     </ul>
  )
}

const navBar = {DarkNavBar, BrightNavBar, DarkNavBarUser, BrightNavBarUser}

export default navBar