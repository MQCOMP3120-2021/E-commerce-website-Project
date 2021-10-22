import { useHistory } from "react-router-dom";
import productService from '../services/productService';

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
        <>
            <h2>Confirm LogOut?</h2>
            <button>Cancel</button>
            <button onClick={logoutHandle}>Yes</button>
        </>
    )
}
export default Logout