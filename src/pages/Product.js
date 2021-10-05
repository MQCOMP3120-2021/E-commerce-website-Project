import { render } from '@testing-library/react'
import '../Product.css'
import defaultImg from '../assets/defaultImg.jpg'
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom";
  import logo from '../assets/logo-black.png'

const Product = ({product, moreCart}) => {
    return(
        <>
            <ul className="Navbar">
                    <li><Link to= "/" className="brightNav">Home</Link></li>
                    <li><Link to= "/Menu" className="brightNav">Menu</Link></li>
                    <li><Link to= "/About" className="brightNav">About</Link></li>
                    <li><img src={logo} className="App-logo" alt="logo" height="100px" width="100px"/> </li>
                    <li><Link to= "/FAQ" className="brightNav">FAQ</Link></li>
                    <li><Link to= "/My-cart" className="brightNav">Cart</Link></li>
                    <li><Link to= "/Login" className="brightNav">Login</Link></li>
            </ul>
            <div className="productCard">
                <img src={defaultImg} className="productImg" onError={()=>this.img.src=defaultImg}/>
                <div className="productInfo">
                    <h3>Signature Sourdough</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h6>$10.00</h6>
                    <div className="quantityBtn">
                        <input type="button" value=" - " className="decrement"/>
                        <input type="number" value="1" min="1" className="qty"/>
                        <input type="button" value=" + " className="incriment"/>
                    </div>
                    <div ClassName="submitBtn">
                        <button type="submit">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product