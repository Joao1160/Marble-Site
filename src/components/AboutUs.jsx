import Logo from "../images/newLogo.png";
import "../css/aboutUs.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebookF,
    faTwitter,
    faPinterest,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function AboutUs() {
    return (
        <section className="about-us">
            <div className="section-heading">
                <h2>about us</h2>
                <span></span>
            </div>
            <div className="container">
                <div className="logo-image">
                    <img src={Logo} alt="Logo-image" />
                </div>
                <div className="about-datails">
                    <p className="desc">
                        Regalith Marble is a leading Egyptian company specializing in the export of high-quality natural marble since 2015. With a solid presence in international markets such as Europe, the Middle East, Australia, and the Americas, we supply renowned varieties including Sinai Pearl, Galala, Sunny Minya, Silvia Menia, and Imperial Bronze — all available in a wide range of elegant finishes. Our stones are known for their strength, consistency, and unique aesthetic appeal, making them ideal for high-end construction and interior design. Over the years, we’ve proudly partnered with large-scale contractors, distributors, and architectural firms worldwide who trust Regalith for reliability, competitive pricing, and authentic Egyptian craftsmanship.
                    </p>

                    <div className="social-links">
                        <a href="http://">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="http://">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="http://">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="http://">
                            <FontAwesomeIcon icon={faPinterest} />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;
