import React from 'react'
import { useParams, Link
} from "react-router-dom"

const ListOfProducts = ({products}) => {
     return(
        <ul>
            {
                products.map((item) => 
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}><img src={item.photo} alt='bread'></img></Link>
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
            <div className='productCard'>
                <img src={singleP.photo} alt='bread'></img>
                <h3>{singleP.name}</h3>
                <p>{singleP.description}</p>
                <p>{singleP.price}</p>
                <button>Quantity button goes here</button>
                <form>
                <label htmlFor='howmuch'></label>
                <input name = 'howmuch' value = {1} /> 
                </form>
                <button onClick={() => moreCart(singleP)}>Add to Cart</button>

                <ul>
                <li>Reviews</li>
                </ul>
            </div>
            
            </>
        )
    }
}


const productDisplay = {
    ListOfProducts, SingleProduct
}

export default productDisplay