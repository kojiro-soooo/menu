import React, { useRef, useEffect, useState } from "react";
import Logo from "../images/authentic-recipes-high-resolution-logo-color-on-transparent-background.png";
import HamburgerMenu from "../images/menu.png";
import LoginButton  from "../components/Login";
import LogoutButton from "../components/Logout";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ( {userFullName, userId, isLoading, isAuthenticated} ) => {
    const [navBar, setNavBar] = useState(false);
    const [profileDropdown, setProfileDropdown] = useState(false);
    const refOne = useRef(null);

    const toggleNavBar = () => {
        setNavBar(!navBar);
    };

    const toggleProfile = () => {
        setProfileDropdown(!profileDropdown)
    }

    const clickOutside = (e) => {
        if(refOne.current === null){
            return null
        }
        if(!refOne.current.contains(e.target)) {
            setProfileDropdown(false)
        } else {
            return null
        }
    }

    useEffect(()=> {
        document.addEventListener("click", clickOutside)
        return () => {
            document.removeEventListener("click", clickOutside)
        }
    },[])

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
                                <div className="dropdown" ref={ refOne }>
                                    <button className="link" onClick={toggleProfile}> 
                                        My Account
                                    </button>
                                    <div className={`dropdown-menu ${profileDropdown && 'active'}`} >
                                        {/* Dropdown Content */}
                                        <ul className={`profile__dropdown ${profileDropdown && 'active'}`}>
                                            <li>
                                                <NavLink to={`/profile/${userId}`} onClick={toggleProfile}>Profile</NavLink>
                                            </li>
                                            <li>
                                                <LogoutButton onClick={toggleProfile}></LogoutButton>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <NavLink to={`/profile/${userId}`}>{userFullName}</NavLink> */}
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
                        {/* <li>
                        <NavLink to="/create">Create</NavLink>
                        </li> */}
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
