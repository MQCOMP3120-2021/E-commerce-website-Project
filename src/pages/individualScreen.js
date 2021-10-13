import React from 'react'
import { useParams, Link
} from "react-router-dom"
import { useState } from 'react'
import '../css/Product.css'
import defaultImg from '../assets/defaultImg.jpg'

const SingleProduct = ({product, moreCart}) => {
    const { id } = useParams()
    const singleP = product.filter((p) => {
        return p.id === id
    })[0]
    const [qty, setQty] = useState(1)

    const decrementQty = () => {
        if(qty > 1){
            setQty(qty-1)
        }
        else{
            setQty(1)
        }
    }

    const incrementQty = () => {
        if(qty < 99){
            setQty(qty+1)
        }
        else{
            setQty(99)
        }
    }
    
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
                                <button onClick = {decrementQty} className="decrement"> - </button>
                                <input type="number" value={qty} className="qtyInput"/>
                                <button onClick = {incrementQty} className="incriment"> + </button>
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
                                {(singleP.reviews.length > 0) ? (
                                    singleP.reviews.map( o => 
                                        <div className="productReview">
                                            <span key={o}> {o} </span>
                                        </div> )
                                ) : (
                                    <div className="noReview">
                                        <h3>This product has no reviews.</ h3>
                                    </div>
                                )}
                        </div>
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