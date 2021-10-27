import { render } from "@testing-library/react"
import '../css/AboutScreen.css';
import logo from '../assets/j-logo.png'
import fbIcon from '../assets/facebook.png'
import igIcon from '../assets/instagram.png'
import emailIcon from '../assets/email.png'
import twitterIcon from '../assets/twitter.png'

const About = () => {
    return(
        <div className="aboutPage">

            <div className="aboutSection">
                <h2>ABOUT US</h2>
                <p>Wake and Bake has been in the baking industry since 1920. The business started out with a small food stand that goes around the town, 
                    offering simple pastries to a small group of people. With our secret recipes passed down by the ancestors,
                    we select our baking ingredients carefully, ensuring that it wouldn't affect the taste of our precious 
                    breads. The product menu is kept small, allowing our bakers to make every bread to perfection. At Wake and Bake, 
                    our breads and pastries are freshly baked so that they are only served to our 
                    dearest customers under their best conditions. Our breads and pastries may seem simple, but we believe that these 
                    baked goods that we make can actually make a difference in people's life. 
                </p>
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
                <h6>Macquarie Centre, NSW</h6>
            </div>

            <div className="socialMedia">
                <h2>KEEP IN TOUCH</h2>
                <ul className="sm-icons">
                    <li className="sm-icon"><a href="https://www.gmail.com/" target="_blank"><img src={emailIcon} width="50px" height="50px" alt="email"/></a></li>
                    <li className="sm-icon"><a href="https://www.instagram.com/" target="_blank"><img src={igIcon} width="50px" height="50px" alt="instagram"/></a></li>
                    <li className="sm-icon"><a href="https://www.twitter.com/" target="_blank"><img src={twitterIcon} width="50px" height="50px" alt="twitter"/></a></li>
                    <li className="sm-icon"><a href="https://www.facebook.com/" target="_blank"><img src={fbIcon} width="50px" height="50px" alt="facebook"/></a></li>
                </ul>
            </div>
        </div>
    ) 
}

export default About