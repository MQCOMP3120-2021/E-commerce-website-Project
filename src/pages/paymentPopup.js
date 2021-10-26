import { render } from "@testing-library/react"
import { useHistory } from "react-router-dom"
import checked from '../assets/checked.png'
import '../css/paymentPopup.css'

const PaymentPopup = () => {
    let history = useHistory()

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
        </div>
    )
}

export default PaymentPopup