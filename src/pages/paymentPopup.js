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
                    <h2>User: {reorder.User}</h2>
                    <h2>Your Order id is: #{reorder.orderNo}</h2>
                    <table>
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
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{CartMath.TotalPrice(item.price, item.quantity)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <h2>Total Cost (including delivery fee): ${reorder.Total}</h2>
                    <h3> Thanks for paying with Wake and Bake</h3>
                </div>
            ):(
            <div className = "Orders">
                <h2> Thanks for paying with Wake n Bake</h2>
            </div>
            )
            }

        </div>
    )
}

export default PaymentPopup