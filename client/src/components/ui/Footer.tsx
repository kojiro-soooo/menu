import React, { FormEvent, useState } from "react";
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
  const [submit, setSubmit] = useState(false);
  const submitHandler = (e:FormEvent) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="communications-container">
          <div className="newsletter-container">
            <form
              name="newsletter"
              // method="POST"
              className="newsletter__form"
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <input type="hidden" name="newsletter" value="newsletter" />

              <div className="newsletter__label">
                <label>Sign up for our newsletter:</label>
              </div>
              <div className="newsletter__input-button">
                <input type="email" required></input>
                <button type="submit">Submit</button>
                {submit && <p>Submitted!</p>}
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
              <NavLink to={"/About"}>About</NavLink>
            </li>
            <li>
              <NavLink to="">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="">News</NavLink>
            </li>
            <li>
              <NavLink to="">Careers</NavLink>
            </li>
            <li>
              <NavLink to="">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
