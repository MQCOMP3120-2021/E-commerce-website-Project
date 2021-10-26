import React from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Link, useRouteMatch
  } from "react-router-dom";
import { useState } from 'react'
import '../css/Checkout.css'
import Delivery from './checkoutFolder/Delivery';
import Payment from './checkoutFolder/Payment';
import Confirm from './checkoutFolder/Confirm';

const CheckoutScreen = () => {

    const { path } = useRouteMatch
    console.log(path)
    
    const CheckoutNavBar = () => {
        return(
        <ul className="Navbar">
          <li><Link to= "/Checkout/Delivery" className="brightNav">Delivery</Link></li>
          <li><Link to= "/Checkout/Payment" className="brightNav">Payment</Link></li>
          <li><Link to= "/Checkout/Confirm" className="brightNav">Confirm</Link></li>
        </ul>
        )
    }


    return (
        <>
            <h2>CheckoutScreen</h2>

            {CheckoutNavBar()}

            <Switch>
                <Router>

                    <Route path= "/Checkout/Delivery">
                        <Delivery />
                    </Route>

                    <Route path={`${path}/Payment`}>
                        <Payment />

                    </Route>

                    <Route path={`${path}/Confirm`}>
                        <Confirm />
                    </Route>
                
                </Router>
            </Switch>



            <Link to='/My-Cart'>
                <button className="cartButton">Back to Cart<i className="inline-icon material-icons">trending_flat</i></button>  
            </Link>
                
        </>

    )
}

export default CheckoutScreen