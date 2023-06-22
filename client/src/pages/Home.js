import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Countries } from '../data';
import { Link } from "react-router-dom";
import { backend_url } from "../config";
import "./Home.css";

const Home = () => {
  const [topFive, setTopFive] = useState();

  useEffect(() => {
    window.scrollTo(0,0); 
  }, []);

  useEffect(() => {
    const getTopFive = async () => {
      const response = await fetch(`${backend_url}/`, {
        method: "GET",
      });
      const json = await response.json();
      setTopFive(json);
    };
    getTopFive();
  }, []);


  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <div className="home-container">
      <section className="featured-recipes">
        <h1 className="featured-recipes__title">
          Your Tastiest Recipes, Waiting To Be Cooked.
        </h1>
        <div className="carousel__container">
          <Carousel
            withIndicators
            height="100%"
            slideSize="55%"
            slideGap="5%"
            controlSize={50}
            loop
            align="center"
            initialSlide={1}
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {topFive &&
              topFive.map((recipe) => (
                <Carousel.Slide>
                  <Link
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    to={`/browse/recipes/${recipe._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="carousel__slide">
                      <h2 className="carousel__title">{recipe.title}</h2>
                      <img
                        className="carousel__img"
                        src={recipe.imageURL}
                      ></img>
                    </div>
                  </Link>
                </Carousel.Slide>
              ))}
          </Carousel>
        </div>
      </section>
      <section className="countries">
        <div className="countries__title">
          <h1>Travel The World Through Food</h1>
        </div>
        <div className="country-container">
          <div className="countries__cards">
            {Countries &&
              Countries.map((country) => (
                <Link className="card"
                  style={{ textDecoration: "none" }}
                  to={`/browse`}
                  state={{country: country.country.toLowerCase()}}
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
          </div>
        </div>
      </section>
      {/* <section className="banner"></section> */}
    </div>
  );
};

export default Home;
