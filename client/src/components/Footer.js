import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="communications-container">
          <div className="newsletter-container">
            <form className="newsletter__form">
              <div className="newsletter__label">
                <label>Sign up for our newsletter: </label>
              </div>
              <div className="newsletter__input-button">
                <input type="email"></input>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="socials-container">
            <div className="socials-title">
              <h3>Follow Us</h3>
            </div>
            <div className="socials-icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>

        <div className="footer-elements">
          <ul>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>FAQs</NavLink>
            </li>
            <li>
              <NavLink>News</NavLink>
            </li>
            <li>
              <NavLink>Careers</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
