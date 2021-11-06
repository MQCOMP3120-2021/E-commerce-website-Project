import { render } from "@testing-library/react"
import { useHistory } from "react-router-dom"
import checked from '../assets/checked.png'
import CartMath from "../CartMath"
import '../css/paymentPopup.css'

const PaymentPopup = (order) => {
    let history = useHistory()
    let reorder = order.order

    const redirectHome = () => {
        history.push("/")
    }

    return (
        <div className = "successPopup">
            <div className = "successMsg">
                <img src = {checked} height="100"/>
                <h2>Payment Sucess</h2>
                <button onClick = {redirectHome}>Home</button>
            </div>
            {order ? (
                <div className ="Orders">
                    <h2 className="orderID">User: {reorder.User}</h2>
                    <h2 className="orderID">Your Order id is: #{reorder.orderNo}</h2>
                    <table className="orderTable">
                        <tbody>
                        <tr>
                        <th></th>
                        <th>ITEM</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        <th>ITEM TOTAL</th>
                        </tr>
                        {reorder.Cart.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.photo} alt={item.name}></img></td>
                                <td className="orderItem">{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{CartMath.TotalPrice(item.price, item.quantity)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <h2 className="orderTotal">Total Cost (including delivery fee): ${reorder.Total}</h2>
                    <h3 className="orderTotal"> Thanks for shopping with Wake and Bake!</h3>
                </div>
            ):(
            <div className = "Orders">
                <h2> Thanks for shopping with Wake n Bake!</h2>
            </div>
            )
            }

        </div>
    )
}

export default PaymentPopup