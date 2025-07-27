import "../css/info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkedAlt,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faLinkedin,
    faInstagram,
    faWhatsapp ,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/newLogoWhite.png";

const Info = () => {
    return (
        <div className="info">
            <div className="container">
                <div className="details">
                    <div className="logo">
                        <img src={logo} alt="Company logo" />
                    </div>
                    <div className="desc">
                        At Regalith Marble, we deliver excellence in every slab — from the classic elegance of Galala and Sinai Pearl to the rich tones of Imperial Bronze. We serve global markets with reliable logistics, consistent quality, and a deep understanding of the needs of professionals in the building and design industries.
                    </div>
                </div>
                <div className="contact-info-links">
                    <h3 className="headline">contact information</h3>
                    <span className="short-line"></span>
                    <ul>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon icon={faMapMarkedAlt} />
                            </div>
                            <p className="text-start">Cairo Shaq El Thoban industrial zone</p>
                        </li>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon icon={faWhatsapp } />
                            </div>
                            <a href="https://wa.me/201108169636" target="_blank" rel="noopener noreferrer">
                                    +20 110 816 9636
                            </a>
                        </li>
                        <li>
                            <div className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <a href="mailto:info@regalithmarble.com">info@regalithmarble.com</a>
                        </li>
                        <li className="social-links">
                            <a href="https://www.facebook.com/share/1D7AEUw9TE/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://www.instagram.com/regalithmarble" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/company/regalith-marble" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Info;
