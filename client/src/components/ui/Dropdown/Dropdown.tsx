import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Dropdown.css";

const Dropdown = ({
    LogoutButton,
    userId,
}: {
    LogoutButton: React.ComponentType;
    userId: string | undefined;
}) => {
    const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
    const refOne = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setOpenDropdownMenu(!openDropdownMenu);
    };

    const clickOutside = (e: MouseEvent) => {
        if (refOne.current === null) {
            return null;
        }
        if (!refOne.current.contains(e.target as HTMLElement)) {
            setOpenDropdownMenu(false);
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

    return (
        <div className="dropdown" ref={refOne}>
            <a className="link" onClick={toggleDropdown}>
                My Account <FaAngleDown />
            </a>
            <div className={`dropdown-menu ${openDropdownMenu && "active"}`}>
                <ul>
                    <li>
                        <NavLink
                            to={`/profile/${userId}`}
                            onClick={toggleDropdown}
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
    );
};

export default Dropdown;
