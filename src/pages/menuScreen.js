import React, {useState, useEffect} from 'react';
import '../css/menuScreen.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import logo from '../assets/logo-black.png'

const SearchBar = () => (
  <div className="App">
      <form action="/" method="get">
            <input
              type="textBox"
              id="header-search"
            /> 
      </form>
  </div>
)

const ListOfProducts = ({products}) => {
  return(
     
     <ul>
         <section className="menuContainer">
         {
             products.map((item) => 
             <div className="itemDisplay">
                 <li key={item.id}>
                     <Link to={`/products/${item.id}`}><img src={item.photo} alt="bread"></img></Link>
                         <div className="itemName">
                             <p>{item.name}</p>
                         </div>
                         <div className="itemPrice">
                             <p>{item.price}</p>
                         </div>
                         
                 </li>
                 </div>
         )
         }
         </section>
     </ul>
 )
}

const menuDisplay = {
  ListOfProducts, SearchBar
}

export default menuDisplay;



