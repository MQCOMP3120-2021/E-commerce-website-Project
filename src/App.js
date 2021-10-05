import React, {useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import productDisplay from './ListOfProducts';
import productService from './services/productService';
import Home from './pages/homeScreen.js';
import Menu from './pages/menuScreen.js';
import Contact from './pages/contactScreen.js';
import Faq from './pages/FAQScreen.js';
import Cart from './pages/cartScreen.js';
import Login from './pages/loginScreen.js';
import About from './pages/aboutScreen.js'


const App = () => {
  const [products, setProducts] = useState([])

  const [cart, setCart] = useState([])

  useEffect(()=>{
    console.log("effect is being run")
    productService.getAll()
    .then(objects => {
      console.log("we have a response", objects)
      setProducts(objects)
    })
  },
  [])

  useEffect(()=>{
    fetchCart()
  },
  [])

  const fetchCart = () => {
    console.log("effect is being run")
    productService.getCart()
    .then(objects => {
      console.log("we have a response", objects)
      setCart(objects)
    })
  }

  const addCart = (content) => {
    console.log(content)
    productService.addtoCart( content )
    .then((object) => {
      console.log("POST response: ", object)
      setCart(cart.concat(object))
      console.log("new item added", object)
    })
  }


  return (
   <Router>
    {/* <div className="App">
          <ul className="Navbar">
            <li><Link to= "/" className="appNav">Home</Link></li>
            <li><Link to= "/Menu" className="appNav">Menu</Link></li>
            <li><Link to= "/Contact-us" className="appNav">Contact</Link></li>
            <li><img src="" className="App-logo" alt="logo" /> </li>
            <li><Link to= "/FAQ" className="appNav">FAQ</Link></li>
            <li><Link to= "/My-cart" className="appNav">Cart</Link></li>
            <li><Link to= "/Login" className="appNav">Login</Link></li>
          </ul> */}
      <Switch>
        <Route path="/products/:id">
         <productDisplay.SingleProduct product ={products} moreCart={addCart}/>
        </Route>
        <Route path="/Menu">
          <Menu />
         <productDisplay.ListOfProducts  products={products}/> 
        </Route>
        <Route path="/About">
          <About />

        </Route>
        <Route path="/FAQ">
          <Faq />

        </Route>
        <Route path="/My-cart">
          <Cart />

        </Route>
        <Route path="/Login">
          <Login />

        </Route>
        <Route path="/">
          <Home />

        </Route>
      </Switch>
 </Router>  );
}

export default App;
