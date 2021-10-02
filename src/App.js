import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import productDisplay from './ListOfProducts';

function App() {



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
          
        </Route>
        <Route path="/Menu">
          
        </Route>
        <Route path="/Contact-us">

        </Route>
        <Route path="/FAQ">

        </Route>
        <Route path="/My-cart">

        </Route>
        <Route path="/Login">

        </Route>
      </Switch>
    </div>
 </Router>  );
}

export default App;
