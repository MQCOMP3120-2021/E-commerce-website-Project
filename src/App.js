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
import ListofCart from './ListofCart';


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

  const producttoCart = (content) => {
    const body = content

    const newCart = {
      id: cart.length + 1,
      productid: body.id,
      name: body.name,
      description: body.description,
      review: body.review,
      price: body.price,
      photo: body.photo,
      quantity: 1
    }

    addCart(newCart)
  }

  const addCart = (content) => {
    productService.addtoCart( content )
    .then((object) => {
      console.log("POST response: ", object)
      setCart(cart.concat(object))
      console.log("Item added", object)
    })
  }

  const removeCart = (content) =>{
    productService.removeCart(content)
    .then((object) => {
      console.log("Item has been removed", object)
      let newCart = cart.filter((c) => c.id !== cart.id)
      setCart(newCart)
    })
    .catch((error) => {
      console.log("Item has not been removed")
    })
    fetchCart()
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
         <productDisplay.SingleProduct product ={products} moreCart={producttoCart}/>
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
          <ListofCart cartcontents={cart} removeItem={removeCart}/>

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
