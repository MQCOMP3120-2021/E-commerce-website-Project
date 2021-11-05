import React, {useState} from "react";
import { createStore } from "redux"
import ReactDOM from 'react-dom'
import App from "./App"


const TotalAmount = (cartcontents) => {
    
    let total = 0
    for(let i=0; i<cartcontents.length; i++){
      let PriceString = cartcontents[i].price
      let cartItemPrice = Number(PriceString.replace('$', ''))
      let cartItemAmount = Number(cartcontents[i].quantity)
      total = total + (cartItemPrice * cartItemAmount)
    }

    return total
}

const TotalPrice = (price, quantity) =>{
  let PriceString = price
  let ItemPrice = Number(PriceString.replace('$', ''))
  return ItemPrice * quantity
}


const CartMath = ({TotalAmount, TotalPrice}) 



export default CartMath