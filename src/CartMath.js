import React, {useState} from "react";
import { createStore } from "redux"
import ReactDOM from 'react-dom'
import App from "./App"

const TotalAmount = (cartnumbers) => {
    let total = 0
    console.log(cartnumbers)
    for(let i=0; i<cartnumbers.length; i++){
      let PriceString = cartnumbers[i].price
      console.log(cartnumbers[i].price)
      let cartItemPrice = Number(PriceString.replace('$', ''))
      let cartItemAmount = Number(cartnumbers[i].quantity)
      total = total + (cartItemPrice * cartItemAmount)
      console.log(total)
    }
    console.log(total)
    return total
}


const CartMath = ({TotalAmount})

export default CartMath