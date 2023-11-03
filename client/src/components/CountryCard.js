import React from 'react';
import { Countries } from "../data";
import { Link } from "react-router-dom";
import "./CountryCard.css";

export const CountryCard = () => {
  return (
    <>
      {Countries &&
        Countries.map((country) => (
        <div class="country-card__container">
          <Link
            className="card"
            style={{ textDecoration: "none" }}
            to={`/browse`}
            state={{ country: country.country.toLowerCase() }}
          >
            <div className="country-card__content">
              <div className="country-card__image">
                <img src={country.url} alt="" loading="lazy"></img>
              </div>
              <div className="country-card__text">
                <h2 className="country-card__title">{country.country}</h2>
              </div>
            </div>
          </Link>
          </div>
        ))}
    </>
  );
};
