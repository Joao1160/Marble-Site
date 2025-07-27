import "../css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
        <div className="contact-us">
            <div className="container">
                <div className="contact-details">
                    <div className="phone">
                        <div className="icon">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                        <h3 className="label">Have a Question? WhatsApp Us Now</h3>
                        <ul className="phone-detail">
                            <li>
                                <span>WhatsApp :</span>
                                <a href="https://wa.me/201108169636" target="_blank" rel="noopener noreferrer">
                                    +20 110 816 9636
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="email">
                        <div className="icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <h3 className="label">Need Support? Drop Us an Email</h3>
                        <ul className="email-detail">
                            <li>
                                <a href="mailto:info@regalithmarble.com">info@regalithmarble.com</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
