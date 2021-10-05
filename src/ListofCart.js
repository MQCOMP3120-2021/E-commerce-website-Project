import React from 'react';
import { Link
} from "react-router-dom"


const ListofCart = ({cartcontents, removeItem}) => {
  return(
    <ul>
    {cartcontents.map((item) => (
      <li key={item.id}>
        <Link to={`/products/${item.productid}`}><img src={item.photo} alt="bread"></img></Link><br></br>
        Product Name: {item.name}<br></br>
        Price: {item.price} <br></br>
        Amount: {item.quantity} 
        <button>Edit Amount</button>
        <button onClick={() => removeItem(item)}>Delete Item</button>
      </li>
    ))}
  </ul>
  )
}

export default ListofCart

//Note this is just a temporary placeholder for delete 