import { render } from "@testing-library/react"
import { useHistory } from "react-router-dom"
import checked from '../assets/checked.png'
import '../css/paymentPopup.css'

const PaymentPopup = (order) => {
    let history = useHistory()
    let number = 0
    for(let i = 0; i < order.length; i++){
        number = number + i
    }
    
    

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
                    <h2>Your Order id is: #{number}</h2>
                    <h2> Thanks for paying with Wake and Bake</h2>
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