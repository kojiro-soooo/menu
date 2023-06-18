import React, { useState } from "react";
import Logo from "../images/authentic-recipes-high-resolution-logo-color-on-transparent-background.png";
import HamburgerMenu from "../images/menu.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);

  const toggleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <nav className="navbar">
      <div className="navbar--container">
        <div className="navbar--logo">
          <NavLink to="/">
            <img src={Logo} height="90"></img>
          </NavLink>
        </div>
        <div className="logo">
          <img className="navbar--menu-icon" src={HamburgerMenu} onClick={toggleNavBar} height="60" width="60"></img>
        </div>
        {/* if navvBar===True, then classname: nav-elements active */}
        <div className={`nav-elements ${navBar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/browse">Browse</NavLink>
            </li>
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
            <li>
              <NavLink to="/feedback">Feedback</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
