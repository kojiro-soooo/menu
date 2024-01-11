import { NavLink } from "react-router-dom";
import LoginButton from "../Login/Login";
import LogoutButton from "../Logout/Logout";
import "./NavBarElements.css";
import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

const NavBarElements = ({
    showSidebar,
    isAuthenticated,
    userId,
    isLoading,
}: {
    showSidebar: boolean;
    isAuthenticated: boolean | undefined;
    userId: string | undefined;
    isLoading: boolean | undefined;
}) => {
    const [profileDropdown, setProfileDropdown] = useState(false);
    const refOne = useRef<HTMLDivElement>(null);

    const toggleProfile = () => {
        setProfileDropdown(!profileDropdown);
    };

    const clickOutside = (e: MouseEvent) => {
        if (refOne.current === null) {
            return null;
        }
        if (!refOne.current.contains(e.target as HTMLElement)) {
            setProfileDropdown(false);
        } else {
            return null;
        }
    };

    useEffect(() => {
        document.addEventListener("click", clickOutside);
        return () => {
            document.removeEventListener("click", clickOutside);
        };
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? (
        <div
            className={
                showSidebar
                    ? `nav-elements__container active-sidebar`
                    : `nav-elements__container`
            }
        >
            <div className="nav-elements">
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
                        <div className="dropdown" ref={refOne}>
                            <a className="link" onClick={toggleProfile}>
                                My Account <FaAngleDown />
                            </a>
                            <div
                                className={`dropdown-menu ${
                                    profileDropdown && "active"
                                }`}
                            >
                                <ul
                                    className={`profile__dropdown ${
                                        profileDropdown && "active"
                                    }`}
                                >
                                    <li>
                                        <NavLink
                                            to={`/profile/${userId}`}
                                            onClick={toggleProfile}
                                        >
                                            Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <LogoutButton></LogoutButton>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="sidebar__overlay"></div>
        </div>
    ) : (
        <div
            className={
                showSidebar
                    ? `nav-elements__container active-sidebar`
                    : `nav-elements__container`
            }
        >
            <div className="nav-elements">
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
                        <LoginButton />
                    </li>
                </ul>
            </div>
            <div className="sidebar__overlay"></div>
        </div>
    );
};

export default NavBarElements;
