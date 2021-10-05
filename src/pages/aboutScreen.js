import { render } from "@testing-library/react"
import '../AboutScreen.css'
import {
    Link
 } from "react-router-dom";
import logo from '../assets/j-logo.png'
import fbIcon from '../assets/facebook.png'
import igIcon from '../assets/instagram.png'
import emailIcon from '../assets/email.png'
import twitterIcon from '../assets/twitter.png'

const About = () => {
    return(
        <div className="aboutPage">
            <ul className="Navbar">
                <li><Link to= "/" className="darkNav">Home</Link></li>
                <li><Link to= "/Menu" className="darkNav">Menu</Link></li>
                <li><Link to= "/About" className="darkNav">About</Link></li>
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
            
            <div className = "locationSection">
                <h2>LOCATION</h2>
                <div className = "googleMap">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6680.80187835327!2d151.1085164407265!3d-33.77697748024791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a60cc14b5cfb%3A0x500fcb6f9f97861b!2sMacquarie%20Centre!5e0!3m2!1sen!2sph!4v1633336204159!5m2!1sen!2sph"
                width="700"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                />
                </div>
                <h6>Loren ipsum dolor sit amet</h6>
            </div>

            <div className="socialMedia">
                <h2>KEEP IN TOUCH</h2>
                <ul className="sm-icons">
                    <li className="sm-icon"><a href="#"><img src={emailIcon} width="50px" height="50px" alt="email"/></a></li>
                    <li className="sm-icon"><a href="#"><img src={igIcon} width="50px" height="50px" alt="instagram"/></a></li>
                    <li className="sm-icon"><a href="#"><img src={twitterIcon} width="50px" height="50px" alt="twitter"/></a></li>
                    <li className="sm-icon"><a href="#"><img src={fbIcon} width="50px" height="50px" alt="facebook"/></a></li>
                </ul>
            </div>
        </div>
    ) 
}

export default About