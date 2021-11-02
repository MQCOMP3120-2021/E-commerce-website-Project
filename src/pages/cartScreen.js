import React, {useState} from 'react';
import '../css/cartScreen.css';
import {
   Link
} from "react-router-dom";
import CartMath from '../CartMath';

const CartScreen = ({cartcontents, removeItem, updateItem, user}) => {
  
  const [amount, setAmount] = useState(1)
  const [edit, setEdit] = useState(false)

  const editing = (qty) => {
    setEdit(true)
    setAmount(qty)
  }
  const cancelEdit = () => {
    setEdit(false)
  }
  const finaliseEdit = (item, newQty) => {
    setEdit(false)
    updateItem(item, newQty)
  }
  
  const Decrease = () => {
    if (amount < 2){
      setAmount(1)
    }
    else{
      setAmount(amount-1)
      console.log(amount-1)
    }
  }

  const Increase = () => {
    if (amount > 98){
      setAmount(99)
    }
    else{
      setAmount(amount+1)
      console.log(amount+1)
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
      {user ? (
        <>
         <h2>Loggin in as User</h2>
        </>
      ) : (
        <>
          <h2>Guest</h2>
        </>
      )

      }
      <table className="cartTable">
        <tbody>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>ITEM TOTAL</th>
          </tr>

          {cartcontents ? (
            <>
            {cartcontents.map((item) => (
            <tr key={item.id}>
              <td><img src = {item.photo} alt = {item.name}></img></td>
              <td>{item.price}</td>
              <td>
                {edit === false ? (
                  <>
                  <input type="number" value={item.quantity} className="qtyInput" readOnly="{true}"/>
                  <div className="submitBtn">
                    <button type="submit" onClick={() => editing(item.quantity)}>Update Item</button>
                  </div>
                  </>
                ) : (
                  <>
                    <div className="quantityBtn">
                      <button onClick = {Decrease} className="decrement"> - </button>
                      <input type="number" value={amount} className="qtyInput" readOnly="{true}"/>
                      <button onClick = {Increase} className="incriment"> + </button>
                    </div>
                    <div className="submitBtn">
                      <button type="submit" onClick={() => cancelEdit()}>Back</button>
                      <button type="submit" onClick={() => finaliseEdit(item,amount)}>Finalise Item</button>
                    </div>
                  </>
                )}
              </td>
              <td>{"$" +TotalPrice(item.price, item.quantity)}
              <button onClick = {() => removeItem(item)}>Remove</button></td>
            </tr>
            ))}

            </>

          ) : ( 
          <>
            <h2>No Item in Cart: Lets get some bread</h2>
          </>
          )
        }
        </tbody>
      </table>
      <p>Total costs = {"$" + TotalAmount()} </p>
        <Link to='/Checkout'>
          <button className="checkoutButton">Checkout   <i className="inline-icon material-icons">trending_flat</i></button>  
        </Link>
  
      </div>
       
      )
}

export default CartScreen;