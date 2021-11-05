import React from 'react';
import {
   Link
} from "react-router-dom";
  import logo1 from './assets/logo-black.png'
  import logo2 from './assets/j-logo.png'
  import './css/navBar.css'


const BrightNavBar = () => {
    return(
    <ul className="Navbar">
      <li><Link to= "/" className="brightNav">Home</Link></li>
      <li><Link to= "/Menu" className="brightNav">Menu</Link></li>
      <li><Link to= "/About" className="brightNav">About</Link></li>
      <li><img src={logo1} width="130px" height="130px" className="App-logo" alt="logo" /> </li>
      <li><Link to= "/FAQ" className="brightNav">FAQ</Link></li>
      <li><Link to= "/My-cart" className="brightNav">Cart</Link></li>
      <li><Link to= "/Login" className="brightNav">Login</Link></li> 
    </ul>
    )
}


const DarkNavBar = () => {
    return(
      <ul className="Navbar" style={{ marginBottom: 0 }}>
        <li><Link to= "/" className="darkNav">Home</Link></li>
        <li><Link to= "/Menu" className="darkNav">Menu</Link></li>
        <li><Link to= "/About" className="darkNav">About</Link></li>
        <li><img src= {logo2} width="130px" height="130px" className="App-logo" alt="logo" /> </li>
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
    <li><img src={logo1} width="130px" height="130px" className="App-logo" alt="logo" /> </li>
    <li><Link to= "/FAQ" className="brightNav">FAQ</Link></li>
    <li><Link to= "/My-cart" className="brightNav">Cart</Link></li>
    <li><Link to= "/Logout" className="brightNav">Logout</Link></li> 
  </ul>
  )
}


const DarkNavBarUser = () => {
  return(
    <ul className="Navbar">
      <li><Link to= "/" className="darkNav">Home</Link></li>
      <li><Link to= "/Menu" className="darkNav">Menu</Link></li>
      <li><Link to= "/About" className="darkNav">About</Link></li>
      <li><img src= {logo2} width="130px" height="130px" className="App-logo" alt="logo" /> </li>
      <li><Link to= "/FAQ" className="darkNav">FAQ</Link></li>
      <li><Link to= "/My-cart" className="darkNav">Cart</Link></li>
      <li><Link to= "/Logout" className="darkNav">Logout</Link></li>
     </ul>
  )
}

const navBar = {DarkNavBar, BrightNavBar, DarkNavBarUser, BrightNavBarUser}

export default navBar