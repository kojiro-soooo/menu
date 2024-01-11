import { NavLink } from "react-router-dom";
import LoginButton from "../Login/Login";
import "./NavBarElements.css";
import LogoutButton from "../Logout/Logout";
import Dropdown from "../Dropdown/Dropdown";

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
                        <Dropdown userId={userId} LogoutButton={LogoutButton}/>
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
