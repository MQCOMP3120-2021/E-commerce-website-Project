import React, {useState, useEffect} from 'react';
import productService from './services/productService';
const CartData = () => {
    const [cart, setCart] = useState([])
    
    useEffect(()=>{
    console.log("effect is being run")
        productService.getCart()
        .then(objects => {
        console.log("we have a response", objects)
        setCart(objects)
     })
    },
    [])

    const addCart = (content) => {
        console.log(content)
        productService.addtoCart( content ).then((object) => {
        console.log("POST response: ", object)
        setCart(cart.concat(object))
        console.log("new item added", object)
    })
    }

    
  const deleteCart = (content) => {
    productService.removeCart(content)
    .then((object) => {
      console.log("Item has been removed", object)
      let newCart = cart.filter((c) => c.id !== cart.id)
      setCart(newCart)
    })
    .catch((error) => {
      console.log("Item has not been removed")
    })
    //fetchCart()
  }
}

export default CartData

//Note this is just a temporary placeholder for delete 