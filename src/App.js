import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useHistory, Redirect, withRouter
} from "react-router-dom";
import ListOfProducts from './pages/menuScreen.js';
import productService from './services/productService';
import Home from './pages/homeScreen.js';
import faqDisplay from './pages/FAQScreen.js';
import Login from './pages/loginScreen.js';
import About from './pages/aboutScreen.js'
import navBar from './Navigation-bar';
import SingleProduct from './pages/individualScreen.js'
import ListofCart from './pages/cartScreen.js';
import SignUp from './pages/signupScreen';
import { render } from '@testing-library/react';
import Logout from './pages/logoutScreen.js';
import Checkout from './pages/checkoutScreen.js'
import CartScreen from './pages/cartScreen.js';
const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)
  let history = useHistory();

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

  useEffect(() => {
    productService.getCurrentUser()
                  .then(user => {
                    if(user){
                      setUser(user)
                      console.log("user: ", user)
                    }
                    else{
                      console.log("no user")
                    }
                  })
                  .catch((err) => {
                    console.log("error getting user")
                  })
  }, [])

  const fetchCart = () => {
    console.log("effect is being run")
    productService.getCart()
    .then(objects => {
      console.log("we have a response", objects)
      setCart(objects)
    })

  }

  const producttoCart = (content, qty) => {
    const body = content
    console.log(qty)

    const newCart = {
      name: body.name,
      price: body.price,
      photo: body.photo,
      quantity: qty
    }


    return newCart
  }

  const addCart = (content,qty) => {
    content = producttoCart(content, qty)
    console.log(content)
    productService.addtoCart( content )
    .then((object) => {
      console.log("POST response: ", object)
      setCart(cart.concat(object))
      console.log("Item added", object)
    })
    .catch((error) => {
      console.log("Item has not been added")
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

  const updateCart = (content) =>{
    console.log("Amount has been updated", content)
    productService.updateCart(content)
    .then((objects) => {
      console.log("Item has been updated")
    })
    .catch((error) => {
      console.log("Item has not been updated")
    })
    fetchCart()
  }

 if(user){
  return (
   <Router>

      <Switch>

        <Route path="/products/:id">
           <navBar.BrightNavBarUser/>
           <SingleProduct product ={products} moreCart={addCart}/>
        </Route>

        <Route path="/Menu">
           <navBar.BrightNavBarUser/>
           {/* <menuDisplay.SearchBar />
           <menuDisplay.ListOfProducts  products={products}/>  */}
           <ListOfProducts  products={products}/> 
        </Route>

        <Route path="/About">
           <div className="aboutPage">
              <navBar.DarkNavBarUser/>
           </div>
           <About />
        </Route>

        <Route path="/FAQ">
           <navBar.BrightNavBar/>
           <faqDisplay.Faq />
           <faqDisplay.FaqForm />
         </Route>

        <Route path="/My-cart">
          <navBar.BrightNavBarUser/>
          <CartScreen cartcontents={cart} removeItem={removeCart} />

        </Route>

        <Route path="/Logout">
          <navBar.BrightNavBarUser/>
          <Logout setUser={setUser}/>
        </Route>

        <Route path="/Checkout">
          <navBar.BrightNavBarUser/>
          <Checkout />
        </Route>

          <Route path="/">
            <div className="bg-img">
                <navBar.DarkNavBarUser/>
            </div>
            <Home />
          </Route>

      </Switch>

 </Router>  )
}
else {
  return (
    <Router>
      <div className="App">
       <Switch>

         <Route path="/products/:id">
            <navBar.BrightNavBar/>
            <SingleProduct product ={products} moreCart={addCart}/>
         </Route>

         <Route path="/Menu">
            <navBar.BrightNavBar/>
            {/* <menuDisplay.SearchBar /> */}
            <ListOfProducts  products={products}/>
         </Route>

         <Route path="/About">
            <div className="aboutPage">
               <navBar.DarkNavBar/>
            </div>
            <About />
         </Route>

         <Route path="/FAQ">
           <navBar.BrightNavBar/>
           <faqDisplay.Faq />
           <faqDisplay.FaqForm />
         </Route>

         <Route path="/My-cart">
           <navBar.BrightNavBar/>
           <CartScreen cartcontents={cart} removeItem={removeCart} updateItem={updateCart}/>
           {/* <ListofCart cartcontents={cart} removeItem={removeCart} updateItem={updateCart}/> */}
         </Route>

         <Route path="/Login">
           <navBar.BrightNavBar/>
           <Login user={user} setUser={setUser}/>
         </Route>

         <Route path="/sign-up">
           <navBar.BrightNavBar/>
           <SignUp setUser={setUser}/>
         </Route>

        <Route path="/Checkout">
          <navBar.BrightNavBarUser/>

        </Route>

         <Route path="/">
            <div className="bg-img">
               <navBar.DarkNavBar/>
            </div>
            <Home />
         </Route>
       </Switch>
     </div>
  </Router>  )
  }
}
export default App;
