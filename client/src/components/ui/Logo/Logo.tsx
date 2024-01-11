import { NavLink } from "react-router-dom";
import logoImage from "../../../images/logo-no-background.png";

const Logo = () => {
    return (
        <div className="navbar__logo">
            <NavLink to="/">
                <img
                    src={logoImage}
                    alt="authentic recipes logo"
                    data-testid="logo"
                ></img>
            </NavLink>
        </div>
    );
};

export default Logo;