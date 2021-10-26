import { useHistory } from "react-router-dom";
import productService from '../services/productService';
import '../css/logoutPage.css';
const Logout = ({setUser}) => {
    let history = useHistory()

    const logoutHandle = (event) => {
        localStorage.clear()
        productService.logout()
        setUser(null)
        console.log("logged out!!!")
        history.push("/")
    }

    return (
        <div className = "logoutPage">
            <h2>Confirm Logout?</h2>
            <div className = "buttons">
                <button className = "cancelBtn" onClick = {() => {history.push("/")}}>Cancel</button>
                <button onClick={logoutHandle} className = "yesBtn">Yes</button>
            </div>
        </div>
    )
}
export default Logout