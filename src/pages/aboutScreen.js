import { render } from "@testing-library/react"
import '../AboutScreen.css'
import {
    Link
 } from "react-router-dom";
 import logo from '../assets/j-logo.png'

const About = () => {
    return(
        <div className="aboutPage">
            <ul className="Navbar">
                <li><Link to= "/" className="darkNav">Home</Link></li>
                <li><Link to= "/Menu" className="darkNav">Menu</Link></li>
                <li><Link to= "/Contact-us" className="darkNav">Contact</Link></li>
                <li><img src={logo} width="100px" height="100px" className="App-logo" alt="logo" /> </li>
                <li><Link to= "/FAQ" className="darkNav">FAQ</Link></li>
                <li><Link to= "/My-cart" className="darkNav">Cart</Link></li>
                <li><Link to= "/Login" className="darkNav">Login</Link></li>
            </ul>

            <div className="aboutSection">
                <h2>ABOUT US</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel sapien sem. 
                    Nunc vel feugiat tellus, sed euismod ante. Duis facilisis lacus eget tincidunt 
                    congue. Nam nisi orci, aliquet id pulvinar sollicitudin, pharetra pellentesque 
                    dolor. Sed efficitur sollicitudin sem at tincidunt. Etiam congue libero velit, 
                    in imperdiet tortor euismod nec. In sit amet magna in erat molestie accumsan. 
                    Morbi sagittis ac augue non consectetur. Mauris non tempus arcu. Duis commodo 
                    ligula id tortor dictum lacinia. Duis lectus metus, egestas ac ultricies rhoncus, 
                    ultrices sed tellus. Nunc suscipit nunc eu est blandit scelerisque. Aenean 
                    eleifend eget sapien ac aliquet. Donec vehicula auctor lacus, ac maximus sapien 
                    mattis congue. Donec tortor diam.</p>
            </div>

        </div>
    ) 
}

export default About