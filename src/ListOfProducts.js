import React from 'react'
import { useParams, Link
} from "react-router-dom"
import './css/Product.css'
import './css/menuScreen.css'
import defaultImg from './assets/defaultImg.jpg'
import logo from './assets/logo-black.png'
import productService from './services/productService';

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

const SingleProduct = ({product, moreCart}) => {
    const id = useParams().id
    const singleP = product.filter(
        (data) => {
            return data.id === id
        }
    )
    console.log(singleP)
    if(singleP){
        return(
            <>
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
                            <div className="submitBtn">
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
                        <h3>Product not found</h3>
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