import React, { useState } from "react";
import MenuIcon from "../assets/menu-icon.svg";
import CloseIcon from "../assets/menu-close-icon.svg";
import Logo from "../assets/logo.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div>
      <div className="header">
        <Link to="/">
          <div className="flex items-center gap-2">
            {/* <img className="site-logo" src={Logo} alt="" /> */}
            <p className="site-title">HLC media Ipaja</p>
          </div>
        </Link>
        <img
          onClick={closeMenu}
          id="menu-close-icon"
          className={`menu-close-icon ${isMenuOpen ? "visible" : "hidden"}`}
          src={CloseIcon}
          alt=""
        />
        <img
          onClick={openMenu}
          id="menu-open-icon"
          className={`menu-icon ${isMenuOpen ? "hidden" : "visible"}`}
          src={MenuIcon}
          alt=""
        />
        <nav
          id="nav-menu"
          className={`nav-menu ${isMenuOpen ? "visible" : "hidden"}`}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
}

export default Header;
