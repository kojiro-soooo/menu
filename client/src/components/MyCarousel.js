import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

export const MyCarousel = ({ topFive }) => {
  // Used to implement autoplay on carousel
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
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
                <img className="carousel__img" src={recipe.imageURL}></img>
              </div>
            </Link>
          </Carousel.Slide>
        ))}
    </Carousel>
  );
};
