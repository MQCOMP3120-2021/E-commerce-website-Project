import React, {useState, useEffect} from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import logo from '../assets/logo-black.png'

const Cart = (cartcontents, removeItem) => {

  const [listCart, setCart] = useState([cartcontents])
  const [amount, setAmount] = useState([1])

  const Decrease = () => {
    if (amount < 1){
      setAmount(1)
    }
    else{
      setAmount(amount-1)
    }
  }

  const Increase = () => {
    if (amount > 99){
      setAmount(99)
    }
    else{
      setAmount(amount+1)
    }
  }

  const TotalPrice = () =>{
    let total = 0
    
    for(let i=0; i<cartcontents.length; i++){
      let cartItemPrice = Number(cartcontents[i].price)
      let cartItemAmount = Number(cartcontents[i].amount)
      total = total + (cartItemPrice * cartItemAmount)
    }

    return total
  }

  
  const ListofCart = () => {

    return(
      <div className="cartScreen">

      {cartcontents.map((item) => (
        <li key={item.id}>
          <Link to={`/products/${item.productid}`}><img src={item.photo} alt="bread"></img></Link><br></br>
          Product Name: {item.name}<br></br>
          Price: {item.price} <br></br>
          Amount: {setAmount(item.quantity)}
          <div className="quantityBtn">
            <button onClick = {Decrease} className="decrement"> - </button>
            <input type="number" value={amount} className="qtyInput"/>
            <button onClick = {Increase} className="incriment"> + </button>
          </div>
          <button onClick={() => removeItem(item)}>Delete Item</button>
        </li>
      ))}

      

    </div>
    
    )
  }
  
  return (
    <>
      <h3>User Login details here</h3>
      {ListofCart}
      Total Price: {TotalPrice}
    </>
  )
  
}

export default Cart;