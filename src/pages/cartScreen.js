import React, {useState, useEffect} from 'react';
import '../css/cartScreen.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import logo from '../assets/logo-black.png'
import minusSign from '../assets/minusSign.png'
import plusSign from '../assets/plusSign.png'

const CartScreen = ({cartcontents, removeItem, updateItem}) => {
  const [amount, setAmount] = useState(1)

  const Decrease = () => {
    if (amount < 1){
      setAmount(1)
    }
    else{
      setAmount(amount-1)
      console.log(amount)
    }
  }

  const Increase = () => {
    if (amount > 99){
      setAmount(99)
    }
    else{
      setAmount(amount+1)
      console.log(amount)
    }
  }

  const TotalPrice = (price, quantity) =>{
    let PriceString = price
    let ItemPrice = Number(PriceString.replace('$', ''))
    return ItemPrice * quantity
  }

  const TotalAmount = () => {
    let total = 0
    for(let i=0; i<cartcontents.length; i++){
      let PriceString = cartcontents[i].price
      let cartItemPrice = Number(PriceString.replace('$', ''))
      let cartItemAmount = Number(cartcontents[i].quantity)
      total = total + (cartItemPrice * cartItemAmount)
    }

    return total
  }

  return(
    <div className="cartDisplay">
      
      <table className="cartTable">
        <tbody>
          <tr>
            <th></th>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>ITEM TOTAL</th>
          </tr>

          {cartcontents ? (
            <>
            {cartcontents.map((item) => (
            <tr key={item.id}>
              <td className="blank"><button className="removeBtn" onClick = {() => removeItem(item)}><i className="inline-icon material-icons">close</i></button></td>
              <td><img src = {item.photo} alt = {item.name}></img>
                  <p>{item.name}</p>
              </td>
              <td>{item.price}</td>
              <td>
              {/* <div className="quantityBtn">
                <button onClick = {Decrease} className="decrement"> - </button>
                {item.quantity}
                <button onClick = {Increase} className="increment"> + </button>
              </div> */}
              <div className="quantityBtn">
                <button onClick = {Decrease}><img src={minusSign} className="minus"/></button>
                {item.quantity}
                <button onClick = {Increase} className="increment"><img src={plusSign} className="plus"/></button>
                </div>
              </td>
              <td>{"$" +TotalPrice(item.price, item.quantity)}</td>
            </tr>
            ))}

            </>

          ) : ( 
          <div>
            <tr>No Item in Cart</tr>
          </div>
          )
        }
        </tbody>
      </table>
      <div className="subtotalPrice">
        <p className="subtotalName">SUBTOTAL</p>
        <p className="totalCost">{"$" + TotalAmount()} </p>
      </div>
        <Link to='/Checkout'>
          <button className="checkoutButton">Checkout</button>  
        </Link>  
  
      </div>
       
      )
}





export default CartScreen;