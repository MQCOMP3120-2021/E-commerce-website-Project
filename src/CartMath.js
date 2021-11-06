import React, {useState} from "react";
import { createStore } from "redux"
import ReactDOM from 'react-dom'
import App from "./App"


// Calculates total cost of everything in the cart
const TotalAmount = (cart) => {
    
    let total = 0
    for(let i=0; i<cart.length; i++){
      total = total + TotalPrice(cart[i].price, cart[i].quantity)
    }

    return total
}

//Calculates the total cost of an item in the cart
const TotalPrice = (price, quantity) =>{
  let PriceString = price
  let ItemPrice = Number(PriceString.replace('$', ''))
  return ItemPrice * quantity
}


const CartMath = ({TotalAmount, TotalPrice}) 



export default CartMath