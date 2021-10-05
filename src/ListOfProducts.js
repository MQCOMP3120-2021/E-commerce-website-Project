import React from 'react'
import { useParams, Link
} from "react-router-dom"

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
            <img src={product.photo} alt="bread"></img>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button >Quantity button goes here</button>
            <button onClick={() => moreCart(singleP)}>Add to Cart</button>

            <ul>
              <li>Review goes here</li>
            </ul>
            </>
        )
    }
}

const productDisplay = {
    ListOfProducts, SingleProduct
}

export default productDisplay