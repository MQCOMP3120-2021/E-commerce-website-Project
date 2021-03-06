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

  return(
    <div className="cartDisplay">
     {user ? (
        <>
         <h2 className="loggedUser">Logged in as {user.username}</h2>
        </>
      ) : (
        <>
          <h2 className="loggedUser">Guest</h2>
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
                      <button onClick = {Decrease} className="decrement"><img src={minusSign} className="minus"/></button>
                      <input type="number" value={amount} className="qtyInput" readOnly="{true}"/>
                      <button onClick = {Increase} className="increment"><img src={plusSign} className="plus"/></button>
                    </div>
                    <div className="finaliseContainer">
                      <button type="back" onClick={() => cancelEdit()}>Back</button>
                      <button type="submit" onClick={() => finaliseEdit(item,amount)}>Finalise Item</button>
                    </div>
                    </>
                  ) : (
                    <>
                    <input type="number" value={item.quantity} className="qtyInput" readOnly="{true}"/>
                      <div className="updateContainer">
                        <button type="submit" className="updateBtn" onClick={() => editing(item.quantity, item.name)}>Update Item</button>
                      </div>
                    </>
                    )}
                  </td>
                  <td>
                    <div className="submitBtn">{"$" + CartMath.TotalPrice(item.price, item.quantity)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
              
          <div className="subtotalPrice">
            <p className="subtotalName">SUBTOTAL</p>
            <p className="totalCost">{"$" + CartMath.TotalAmount(cartcontents)} </p>

            <div className="buttonContainer">
            <button className="clearButton" type="submit" onClick={() => clearCart()}>Clear Cart</button>
            <Link to='/Checkout'>
              <button className="checkoutButton">Checkout</button>  
            </Link>  
          </div>
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
        <h2 className="emptyCart">No Item in Cart: Let's get some bread!</h2>
        </>
      )}

    </div>
  )
      
}

export default CartScreen;