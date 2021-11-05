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

    const submitPopup = () => {
        postOrder()
        setDone(true)
    }
    return(
        <>
        {done ? <PaymentPopup order={order}/> :
            <div className = "checkoutPage">
                <div className = "checkoutOptions">

                    <Link to='/My-Cart'>
                        <button className="returnBtn">⟵  Back to Cart</button>  
                    </Link>


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
                                <input type = "radio" name="deliveryMethod" value="menulog" checked/>
                                <img src = {menulog}/>
                        </label>
                        <label>
                                <input type = "radio" name="deliveryMethod" value="deliveroo"/>
                                <img src = {deliveroo}/>
                        </label>
                        <label>
                                <input type = "radio" name="deliveryMethod" value="ubereats" />
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
                                    <td className="tagName">Subtotal</td>
                                    <td className = "rightPrice">${cartTotal}</td>
                                </tr>
                                <tr>
                                    <td className="tagName">Delivery Charges</td>
                                    <td className = "rightPrice">$5.00</td>
                                </tr>
                                <tr className="tagTotal">
                                    <td className="tagName">TOTAL</td>
                                    <td className = "rightPrice">$35.00</td>
                                </tr>
                            </table>
                        </div>
                        <button type="submit" className = "confirmBtn" onClick = {submitPopup}>Confirm Order</button>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Checkout