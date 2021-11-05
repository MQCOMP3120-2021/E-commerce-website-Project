import mastercard from '../assets/mastercard.png'
import paypal from '../assets/paypal.png'
import visa from '../assets/visa.png'
import deliveroo from '../assets/deliveroo.png'
import menulog from '../assets/menulog.png'
import ubereats from '../assets/ubereats.png'
import '../css/checkoutScreen.css'
import React, { Component, useState, useEffect } from "react";
import PaymentPopup from './paymentPopup.js'
import {
    Link
 } from "react-router-dom"

const Checkout = ({cartTotal, postOrder, order}) => {
    const [done, setDone] = useState(false)
    const [delivery, setDelivery] = useState(0.00)
    const[overall, setOverall] = useState(0.00)

    const submitPopup = () => {
        postOrder(overall)
        setDone(true)
    }

    const deliveryAmount = (option) =>{
        if(option === "menulog"){
            setDelivery(4.00) 
            let amount = 4.00 + cartTotal
            setOverall(amount)
        }
        else if(option === "deliveroo"){
            setDelivery(3.00) 
            let amount = 3.00 + cartTotal
            setOverall(amount)
        }
        else if(option === "ubereats"){
            setDelivery(5.00) 
            let amount = 5.00 + cartTotal
            setOverall(amount)
        }
    }
    return(
        <>
        {done ? <PaymentPopup order={order}/> :
            <div className = "checkoutPage">
                <div className = "checkoutOptions">
                    <div className = "paymentPanel">
                        <p>Select your payment method</p>
                        <hr/>
                        <div className = "paymentMethods">
                            <label>
                                <input type = "radio" name="paymentMethod" value="mastercard" checked/>
                                <img src = {mastercard}/>
                            </label>
                            <label>
                                <input type = "radio" name="paymentMethod" value="visa"/>
                                <img src = {visa}/>
                            </label>
                            <label>
                                <input type = "radio" name="paymentMethod" value="paypal"/>
                                <img src = {paypal}/>
                            </label>
                        </div>
                    </div>
                    <div className = "deliveryPanel">
                        <p>Select your delivery method</p>
                        <hr/>
                        <div className = "deliveryMethods">
                        <label>
                                <input type = "radio" name="deliveryMethod" value="menulog" checked onClick={() => deliveryAmount("menulog")}/>
                                <img src = {menulog}/>
                        </label>
                        <label>
                                <input type = "radio" name="deliveryMethod" value="deliveroo" onClick={() => deliveryAmount("deliveroo")}/>
                                <img src = {deliveroo}/>
                        </label>
                        <label>
                                <input type = "radio" name="deliveryMethod" value="ubereats" onClick={() => deliveryAmount("ubereats")}/>
                                <img src = {ubereats}/>
                        </label>
                        </div>
                    </div>
                </div>
                <div className = "checkoutDetails">
                    <div className = "spacing">
                        <div className = "paymentTotal">
                            <table>
                                <tr>
                                    <td>Subtotal</td>
                                    <td className = "rightPrice">${cartTotal}</td>
                                </tr>
                                <tr>
                                    <td>Delivery Charges</td>
                                    <td className = "rightPrice">${delivery}</td>
                                </tr>
                                <tr>
                                    <td>TOTAL</td>
                                    <td className = "rightPrice">${overall}</td>
                                </tr>
                            </table>
                        </div>
                        <Link to='/My-Cart'>
                            <button className="confirmBtn">Back to Cart  </button>  
                        </Link>
                        <button type="submit" className = "confirmBtn" onClick = {submitPopup}>Confirm Order</button>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Checkout