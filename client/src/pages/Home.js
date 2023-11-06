import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { backend_url } from "../config";
import { MyCarousel } from "../components/MyCarousel";
import { CountryCard } from "../components/CountryCard";
import "./Home.css";
import collage from "../images/food_collage.png"

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
        <div className="featured-recipes__title">
                <p>Explore the world,</p>
                <div className="titles_container">
                <p>one</p>
                <div className="titles">
                    <span>Japanese</span>
                    <span>Swedish</span>
                    <span>Italian</span>
                    <span>Ukranian</span>
                    <span>Japanese</span>
                </div>
                <p>recipe</p>
                </div>
                <p>at a time.</p>
        </div>
        <div className="featured-collage">
            <img src={collage} alt="pad thai, mapo tofu, nabe soup, spare ribs, sushi, oyako donburi, seafood boil"></img>
        </div>
        </section>
        <section className="midsection">
        <div className="midsection__title">
            <h1 className="carousel__title">
                Share authentic recipes with 
                <br></br>
                your global neighbors
            </h1>
        </div>
        <div className="carousel__container">
            {/* <div className="carousel__content"> */}
                <MyCarousel topFive={topFive} />
            {/* </div> */}
        </div>
        <div className="midsection__background"></div>

        </section>
      <section className="countries">
        <div className="countries__title">
            <div className="cloud"></div>
            <div className="cloud_two"></div>
            <h1>Depart on your culinary adventure</h1>
            {/* <h1>Depart on your culinary adventure</h1> */}
            {/* <h1>Now boarding for...</h1>
            <h1>Now boarding for...</h1> */}
            {/* <h1>Where are you headed today?</h1> */}
          {/* <h1>Travel The World Through Food</h1> */}
        </div>
        <div className="country-container">
          <div className="countries__container">
            <CountryCard />
          </div>
          <div class="to-browse">
            <Link to={"/browse"}>
              <button>Browse All Recipes</button>
            </Link>
          </div>
        </div>
        <div className="countries-background"></div>
      </section>
    </div>
  );
};

export default Home;
