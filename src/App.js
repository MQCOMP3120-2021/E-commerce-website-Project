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
import navBar from './Navigation-bar'



const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)

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
     <div className="App">
      <Switch>

        <Route path="/products/:id">
           <navBar.BrightNavBar/>
           <productDisplay.SingleProduct product ={products} moreCart={addCart}/>
        </Route>

        <Route path="/Menu">
           <navBar.BrightNavBar/>
           <productDisplay.ListOfProducts  products={products}/> 
        </Route>

        <Route path="/About">
           <div className="aboutPage">
              <navBar.DarkNavBar/>
           </div>
           <About />
        </Route>

        <Route path="/FAQ">
          <navBar.BrightNavBar/>
          <Faq />
        </Route>

        <Route path="/My-cart">
          <navBar.BrightNavBar/>
          <Cart />
        </Route>

        <Route path="/Login">
          <navBar.BrightNavBar/>
          <Login user={user} setUser={setUser}/>
        </Route>

        <Route path="/">
           <div className="bg-img">
              <navBar.DarkNavBar/>
           </div>
           <Home />
        </Route>
      </Switch>
    </div>
 </Router>  );
}

export default App;
