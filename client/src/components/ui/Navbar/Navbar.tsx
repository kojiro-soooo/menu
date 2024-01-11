import { useState } from "react";
import "./NavBar.css";
import AuthType from "../../../../types/auth0-type";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavBarElements from "../NavBarElements/NavBarElements";
// import SideBar from "../SideBar/SideBar";
import Logo from "../Logo/Logo";

interface NavBarProps extends AuthType {
    userId?: string;
}

const Navbar = ({ userId, isLoading, isAuthenticated }: NavBarProps) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Logo/>
                <HamburgerMenu toggleSidebar={toggleSidebar}/>
                <NavBarElements isAuthenticated={isAuthenticated} userId={userId} isLoading={isLoading} showSidebar={showSidebar}/>
            </div>
        </nav>
    );
};

export default Navbar;
