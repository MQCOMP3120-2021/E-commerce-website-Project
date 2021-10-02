import React from 'react'
const ListOfProducts = ({products}) => {
    return(
        <ul>
            {
                products.map((item) => {
                    <li key={item.id}>
                        {item.photo}
                        {item.name}
                        {item.price}
                    </li>
                })
            }
        </ul>
    )
}

const SingleProduct = ({product, addQuantity}) => {
    const id = Number(userParams().id)
    const singleP = product.find(p=> p.id === id)
    console.log(singleP)
    if(singleP){
        return(
            <>
            <img src={product.photo}></img>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button >Quantity button goes here</button>
            <button>Add to Cart button goes here</button>

            <ul>
              <li>Review goes here</li>
            </ul>
            </>
        )
    }
}
export default ListOfProducts