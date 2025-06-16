import React from "react";

const Nav = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <img src="images/Logo.png" alt="logo image" />
          </div>
          <div className="nav-links">
            <a href="/">home</a>
            <a href="/contact">contact us</a>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;