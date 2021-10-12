import React from 'react'
import { useParams, Link
} from "react-router-dom"
import '../css/Product.css'
import defaultImg from '../assets/defaultImg.jpg'

const SingleProduct = ({product, moreCart}) => {
    const id = Number(useParams().id)
    const singleP = product.find(p=> p.id === Number(id))
    console.log(singleP)
    if(singleP){
        return(
            <>
            {product ? (
                <>
                    <div className="productCard">
                        <img src={singleP.photo} className="productImg" onError={()=>this.img.src=defaultImg}/>
                        <div className="productInfo">
                            <h3>{singleP.name}</h3>
                            <p>{singleP.description}</p>
                            <h6>{singleP.price}</h6>
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
                        <div className="productReviews">
                            <div className="productReview">
                                {/* <p>{singleP.reviews}</p> */}
                                {singleP.reviews.map(o => <span key={o}> {o} </span>)}
                            </div>
                        </div>
                        
                         {/* * FIX THIS FOR REVIEWS NOT WORKING PROPERLY (error: CANT MAP FROM REVIEWS)
                        <div className="productReviews">
                            {(product.reviews).map((review) => {
                                <div className="productReview">
                                            <p>{singleP.review}</p>
                                            <h5>USERNAME</h5>
                                        </div>
                            })}
                        </div>  */}
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

export default SingleProduct;