import React, {useState} from 'react';
import '../css/cartScreen.css';
import {
   Link
} from "react-router-dom";
import CartMath from '../CartMath';
import logo from '../assets/logo-black.png'
import minusSign from '../assets/minusSign.png'
import plusSign from '../assets/plusSign.png'

const CartScreen = ({cartcontents, removeItem, updateItem, clearCart, user}) => {
  
  const [amount, setAmount] = useState(1)
  const [edit, setEdit] = useState(false)
  const [checkName, setCheckName] = useState()

  const editing = (qty, name) => {
    setEdit(true)
    setAmount(qty)
    setCheckName(name)
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
         <h2>Logged in as {user.username}</h2>
        </>
      ) : (
        <>
          <h2>Guest</h2>
        </>
      )}

      {cartcontents && cartcontents.length !== 0 ? (
        <>
          <table className="cartTable">
            <tbody>
              <tr>
                <th></th>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>ITEM TOTAL</th>
              </tr>
              {cartcontents.map((item) => (
                <tr key={item.id}>
                  <td className="blank"><button className="removeBtn" onClick = {() => removeItem(item)}><i className="inline-icon material-icons">close</i></button></td>
                  <td><img src = {item.photo} alt = {item.name}></img>
                    <p>{item.name}</p>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    {edit === true && item.name === checkName ? (
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
                  ) : (
                    <>
                    <input type="number" value={item.quantity} className="qtyInput" readOnly="{true}"/>
                      <div className="submitBtn">
                        <button type="submit" onClick={() => editing(item.quantity, item.name)}>Update Item</button>
                      </div>
                    </>
                    )}
                  </td>
                  <td>
                    <div className="submitBtn">{"$" +TotalPrice(item.price, item.quantity)}
                      <button onClick = {() => removeItem(item)}>Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
              
          <div className="subtotalPrice">
            <p className="subtotalName">SUBTOTAL</p>
            <p className="totalCost">{"$" + TotalAmount()} </p>
            <button className="checkoutButton" type="submit" onClick={() => clearCart()}>Clear Cart<i className="inline-icon material-icons">trending_flat</i></button>
          </div>
          <div>
            <Link to='/Checkout'>
              <button className="checkoutButton">Checkout</button>  
            </Link>  
          </div>
      

        </>

      ) : ( 
        <>
        <table className="cartTable">
          <tbody>
            <tr>
              <th></th>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>ITEM TOTAL</th>
            </tr>
          </tbody>
        </table>
        <h2>No Item in Cart: Lets get some bread</h2>
        <div className="subtotalPrice">
          <p className="subtotalName">SUBTOTAL</p>
          <p className="totalCost">{"$" + TotalAmount()} </p>
          <button className="checkoutButton" type="submit" onClick={() => clearCart()}>Clear Cart<i className="inline-icon material-icons">trending_flat</i></button>
        </div>
        </>
          
      )}

    </div>
  )
      
}

export default CartScreen;