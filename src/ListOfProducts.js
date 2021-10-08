import React from 'react'
import { useParams, Link
} from "react-router-dom"
//import './Product.css'
import defaultImg from './assets/defaultImg.jpg'
import logo from './assets/logo-black.png'


const ListOfProducts = ({products}) => {
     return(
        <ul>
            {
                products.map((item) => 
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}><img src={item.photo} alt="bread"></img></Link>
                        {item.name}
                        {item.price}
                    </li>
            )
            }
        </ul>
    )
}

const SingleProduct = ({product, moreCart}) => {
    const id = Number(useParams().id)
    const singleP = product.find(p=> p.id === id)
    console.log(singleP)
    if(singleP){
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
                        {/** FIX THIS FOR REVIEWS NOT WORKING PROPERLY (error: CANT MAP FROM REVIEWS)
                        <div className="productReviews">
                            {(product.reviews).map((review) => {
                                return <div className="productReview">
                                            <p>{review}</p>
                                            <h5>USERNAME</h5>
                                        </div>
                            })}
                        </div>*/}
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
}

const productDisplay = {
    ListOfProducts, SingleProduct
}

export default productDisplay