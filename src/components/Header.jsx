import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.png";
import logo2 from "../images/newLogo.png";
import "../css/style.css";
import "../css/details.css";
import "../css/normalize.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        headerRef.current?.classList.add("scrolled");
      } else {
        headerRef.current?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <img src={logo2} alt="logo image" />
          </div>
          <div className="nav-links">
            <Link to="/">home</Link>
           <a href="/catalog.pdf" download className="catalog-button">catalog </a>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
