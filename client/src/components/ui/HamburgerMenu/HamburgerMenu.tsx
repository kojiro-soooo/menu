import MenuIcon from "../../../images/menu.png";
import "./HamburgerMenu.css";

interface toggleSidebarProps {
    toggleSidebar: () => void;
}

const HamburgerMenu = ({ toggleSidebar }: toggleSidebarProps) => {
    return (
        <div className="logo">
            <img
                className="navbar__menu-icon"
                src={MenuIcon}
                alt="menu_icon"
                onClick={toggleSidebar}
                height="60"
                width="60"
            ></img>
        </div>
    );
};

export default HamburgerMenu;
