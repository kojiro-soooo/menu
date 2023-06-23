import React from 'react';
import { Countries } from "../data";
import { Link } from "react-router-dom";

export const CountryCard = () => {
  return (
    <>
      {Countries &&
        Countries.map((country) => (
          <Link
            className="card"
            style={{ textDecoration: "none" }}
            to={`/browse`}
            state={{ country: country.country.toLowerCase() }}
          >
            <div className="country-card">
              <div className="country-card__image">
                <img src={country.url}></img>
              </div>
              <div className="country-card__text">
                <h2 className="country-card__title">{country.country}</h2>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};
