import { render } from '@testing-library/react'
import '../Product.css'
import defaultImg from '../assets/defaultImg.jpg'
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom";
import logo from '../assets/logo-black.png'
import { useParams } from 'react-router';

const Product = ({products, moreCart}) => {
    const id = Number(useParams().id)
    const product = products.find(p => p.id === id)

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
            {product ? (
                <>
                    <div className="productCard">
                        <img src={product.photo} className="productImg" onError={()=>this.img.src=defaultImg}/>
                        <div className="productInfo">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <h6>{product.price}</h6>
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
                    <div className="reviewSec">
                        <h3>Reviews</h3>
                        <hr/>
                        <div className="productReviews">
                            {product.reviews.map((review) => {
                                return <div className="productReview">
                                            <p>{review}</p>
                                            <h5>USERNAME</h5>
                                        </div>
                            })}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="product404">
                        <h3>Product not found :(</h3>
                    </div>
                </>
            )}
        </>
    )
}

export default Product