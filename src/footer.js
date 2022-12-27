import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

function Footer() {

    return <>
        <div className="footer-container">
            <div className="footer-essence">
                <h2>ESSENCE</h2>
                <p>If you think you have the passion, attitude and capability to join us the next big software company s so that we can get the convers.</p>

                <div className="facebook">
                    <FaFacebookF />
                    <BsTwitter />
                    <AiOutlineInstagram />
                    <AiFillLinkedin />
                </div>
            </div>
            <div className="footer-shortlink">
                <h2>SHORT LINK</h2><br />
                <p>Service</p><br />
                <p>Wishlish</p><br />
                <p>FAQ</p><br />
                <p>Advance Search</p><br />
                <p>Site Map</p>

            </div>
            <div className="footer-contactus">
                <h2>Contact</h2><br />
                <p>Address: 1900 Pico Blvd, New York br Centernial, colorado</p><br />
                <p>Phone: +48 123 456 789</p><br />
                <p>E-mail: info@example.com</p>

            </div>
            <div className="footer-instagram">
                <h3>INSTAGRAM</h3>
            </div>
        </div>
        <hr />
        <div className="footer-bar">
            <h4>Crafted by UIdeck</h4>
            <h4>About Prime  TOS  Return Policy  FAQ  Contact</h4>
        </div>
    </>
}
export default Footer;