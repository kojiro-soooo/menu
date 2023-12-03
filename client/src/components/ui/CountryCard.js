import React from "react";
// import { Countries } from "../../data";
import { Link } from "react-router-dom";
import "./CountryCard.css";

export const CountryCard = () => {
    const Countries = [
        {
            id: 0,
            country: "India",
            url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 1,
            country: "Morrocco",
            url: "https://plus.unsplash.com/premium_photo-1665972700836-50bbb88e43e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 2,
            country: "Japan",
            url: "https://images.unsplash.com/photo-1648221825803-4e02a95bf062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 3,
            country: "Spain",
            url: "https://images.unsplash.com/photo-1604543519952-12b7038886c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 4,
            country: "USA",
            url: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
        },
        {
            id: 5,
            country: "United Kingdom",
            url: "https://images.unsplash.com/photo-1655979283362-535e6a167a53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 6,
            country: "China",
            url: "https://images.unsplash.com/photo-1518983546435-91f8b87fe561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 7,
            country: "Italy",
            url: "https://images.unsplash.com/photo-1605888955907-d4bb98979b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
        },
        {
            id: 8,
            country: "Thailand",
            url: "https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 9,
            country: "Mexico",
            url: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 10,
            country: "France",
            url: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 11,
            country: "Jamaica",
            url: "https://images.unsplash.com/photo-1658833608786-22c4b4a621de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
    ];

    return (
        <>
            {Countries &&
                Countries.map((country) => (
                    <div className="country-card__container" key={country.id}>
                        <Link
                            className="card"
                            style={{ textDecoration: "none" }}
                            to={`/browse`}
                            state={{ country: country.country.toLowerCase() }}
                        >
                            <div className="country-card__content">
                                <div className="country-card__image">
                                    <img
                                        src={country.url}
                                        alt=""
                                        loading="lazy"
                                    ></img>
                                </div>
                                <div className="country-card__text">
                                    <h2 className="country-card__title">
                                        {country.country}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
        </>
    );
};
