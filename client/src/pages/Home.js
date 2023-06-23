import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { backend_url } from "../config";
import { MyCarousel } from "../components/MyCarousel";
import { CountryCard } from "../components/CountryCard";
import "./Home.css";

const Home = () => {
  // Used to store top five recipes from database
  const [topFive, setTopFive] = useState();

  // Scroll to top on render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get top five recipes from database
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

  return (
    <div className="home-container">
      <section className="featured-recipes">
        <h1 className="featured-recipes__title">
          Your Tastiest Recipes, Waiting To Be Cooked.
        </h1>
        <div className="carousel__container">
          <MyCarousel topFive={topFive} />
        </div>
        <div className="featured-background"></div>
      </section>
      <section className="countries">
        <div className="countries__title">
          <h1>Travel The World Through Food</h1>
        </div>
        <div className="country-container">
          <div className="countries__cards">
            <CountryCard />
          </div>
          <div class="to-browse">
            <Link to={"/browse"}>
              <button>See All Recipes</button>
            </Link>
          </div>
        </div>
        <div className="countries-background"></div>
      </section>
    </div>
  );
};

export default Home;
