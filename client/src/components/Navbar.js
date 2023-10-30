import React, { useState } from "react";
import Logo from "../images/authentic-recipes-high-resolution-logo-color-on-transparent-background.png";
import HamburgerMenu from "../images/menu.png";
import LoginButton  from "../components/Login";
import LogoutButton from "../components/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [navBar, setNavBar] = useState(false);

    const toggleNavBar = () => {
        setNavBar(!navBar);
    };

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        isAuthenticated ? (
            <nav className="navbar">
                <div className="navbar__container">
                    <div className="navbar__logo">
                    <NavLink to="/">
                        <img src={Logo} alt="authentic recipes logo"></img>
                    </NavLink>
                    </div>
                    <div className="logo">
                    <img className="navbar__menu-icon" src={HamburgerMenu} alt="menu icon" onClick={toggleNavBar} height="60" width="60"></img>
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
                            <LogoutButton></LogoutButton>
                        </li>
                        <li>
                            <NavLink to="/profile">{user.name}</NavLink>
                        </li>
                        {/* <li>
                        <NavLink to="/feedback">Feedback</NavLink>
                        </li> */}
                    </ul>
                    </div>
                </div>
            </nav>
        ) : (
            <nav className="navbar">
                <div className="navbar__container">
                    <div className="navbar__logo">
                    <NavLink to="/">
                        <img src={Logo} alt="authentic recipes logo"></img>
                    </NavLink>
                    </div>
                    <div className="logo">
                    <img className="navbar__menu-icon" src={HamburgerMenu} alt="menu icon" onClick={toggleNavBar} height="60" width="60"></img>
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
                            <LoginButton></LoginButton>
                        </li>
                        {/* <li>
                        <NavLink to="/feedback">Feedback</NavLink>
                        </li> */}
                    </ul>
                    </div>
                </div>
            </nav>
        )
    );
};

export default Navbar;
