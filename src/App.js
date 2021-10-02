import React, {useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import productDisplay from './ListOfProducts';
import productService from './services/productService';



const App = () => {
  const [products, setProducts] = useState([])

 

  useEffect(()=>{
    console.log("effect is being run")
    productService.getAll()
    .then(objects => {
      console.log("we have a response", objects)
      setProducts(objects)
    })
  },
  [])

/**   const menuPage = () => (
    <productDisplay.ListOfProducts  products={products}/> 
  )
  const singleProductPage = () => (
    <productDisplay.SingleProduct product ={products} />
  )*/

  return (
   <Router>
    <div className="App">
      <ul className="Navbar">
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/Menu">Menu</Link></li>
        <li><Link to= "/Contact-us">Contact</Link></li>
        <li><img src="" className="App-logo" alt="logo" /> </li>
        <li><Link to= "/FAQ">FAQ</Link></li>
        <li><Link to= "/My-cart">Cart</Link></li>
        <li><Link to= "/Login">Login</Link></li>
      </ul>
      <Switch>
        <Route path="/products/:id">
         <productDisplay.SingleProduct product ={products} />
        </Route>
        <Route path="/Menu">
         <productDisplay.ListOfProducts  products={products}/> 
        </Route>
        <Route path="/Contact-us">
          <p>This is contact us content</p>

        </Route>
        <Route path="/FAQ">

        </Route>
        <Route path="/My-cart">

        </Route>
        <Route path="/Login">

        </Route>
        <Route path="/">
          <p>this is home page</p>

        </Route>
      </Switch>
    </div>
 </Router>  );
}

export default App;
