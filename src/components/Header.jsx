import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/NewLogo1.png";
import "../css/style.css";
import "../css/details.css";
import "../css/normalize.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

function Header() {
  const headerRef = useRef();
  const contactHeaderRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 5;

      // Hide first nav
      if (contactHeaderRef.current) {
        if (isScrolled) {
          contactHeaderRef.current.classList.add("hide-contact-header");
        } else {
          contactHeaderRef.current.classList.remove("hide-contact-header");
        }
      }

      // Shrink second nav
      if (headerRef.current) {
        if (isScrolled) {
          headerRef.current.classList.add("shrink-header");
        } else {
          headerRef.current.classList.remove("shrink-header");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header ref={contactHeaderRef} className="contact-header">
        <div className="container">
          <nav className="nav-links">
            <li className="will-disappear">Got a question? Let's talk!</li>
            <li className="will-disappear">
              <FontAwesomeIcon className="nav-links-icon" icon={faWhatsapp} />
              <a href="https://wa.me/201108169636" target="_blank" rel="noopener noreferrer">
                +20 110 816 9636
              </a>
            </li>
            <li className="will-disappear">
              <FontAwesomeIcon className="nav-links-icon" icon={faEnvelope} />
              <a href="mailto:info@regalithmarble.com" >info@regalithmarble.com</a>
            </li>
            <li>
              <FontAwesomeIcon className="nav-links-icon" icon={faClock} />
              <span>Sat - Thu : 8am - 7pm </span>
            </li>
            <li className="social-links">
              <a href="https://www.facebook.com/share/1D7AEUw9TE/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="nav-links-icon" icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/regalithmarble" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="nav-links-icon" icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/company/regalith-marble" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="nav-links-icon" icon={faLinkedin} />
              </a>
            </li>
          </nav>
        </div>
      </header>

      <header ref={headerRef} className="header">
        <div className="container">
          <nav className="nav">
            <div className="logo">
              <Link to="/"><img src={logo} alt="Company logo" /></Link>
            </div>
            <div className="nav-links">
              <Link to="/">home</Link>
              <Link to="/products">products</Link>
              <a href="/catalog.pdf" download className="catalog-button">catalog</a>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
