import { Link } from "react-router-dom";
import "./MyCarousel.css";
import { register } from "swiper/element/bundle"; // import register function to register Swiper custom elements
import { CSSProperties } from "react";
import RecipeType from "../../../../types/recipe-type";
// register Swiper custom elements
register();

export const MyCarousel = ({
    topFive,
}: {
    topFive: Array<RecipeType>;
}) => {
    return (
        topFive && (
            <swiper-container
                slides-per-view={3}
                sliders-per-group={1}
                space-between={15}
                speed={1000}
                loop={true}
                // pagination={true}
                style={{ "--swiper-pagination-color": "#fff" } as CSSProperties}
                autoplay-pause-on-mouse-enter="true"
                autoplay-delay="2500"
            >
                {topFive.map((recipe) => (
                    <swiper-slide>
                        <Link
                            className="carousel__link"
                            // onClick={(e) => {
                            //     e.stopPropagation();
                            // }}
                            to={`/browse/recipes/${recipe._id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="carousel__slide">
                                <img
                                    className="swiper__img"
                                    src={recipe.imageUrl}
                                    alt={recipe.title}
                                    loading="lazy"
                                ></img>
                                <h2 className="carousel_recipe-title">
                                    {recipe.title}
                                </h2>
                            </div>
                        </Link>
                    </swiper-slide>
                ))}
            </swiper-container>
        )
    );

    //   // Used to implement autoplay on carousel
    //     const autoplay = useRef(Autoplay({ delay: 4000 }));

    //     return (
    //         topFive &&
    //         <Carousel
    //         //   withIndicators
    //         height="100%"
    //         slideSize="100%"
    //         slideGap="5%"
    //         controlSize={50}
    //         loop
    //         align="center"
    //         initialSlide={1}
    //         breakpoints={[
    //             // { maxWidth: "lg", slideSize: "50%", slideGap: 10 },
    //             // { maxWidth: "md", slideSize: "50%"},
    //             // { maxWidth: "sm", slideSize: "50%"},
    //         ]}
    //         plugins={[autoplay.current]}
    //         onMouseEnter={autoplay.current.stop}
    //         onMouseLeave={autoplay.current.reset}
    //         >
    //         {topFive &&
    //             topFive.map((recipe) => (
    //             <Carousel.Slide>
    //                 <Link
    //                     className="carousel__link"
    //                     onClick={(e) => {
    //                         e.stopPropagation();
    //                     }}
    //                     to={`/browse/recipes/${recipe._id}`}
    //                     style={{ textDecoration: "none" }}
    //                 >
    //                     <div className="carousel__slide">
    //                         <img className="carousel__img" src={recipe.imageUrl} alt={recipe.title} loading="lazy"></img>
    //                         <h2 className="carousel_recipe-title">{recipe.title}</h2>
    //                     </div>
    //                 </Link>
    //             </Carousel.Slide>
    //             ))}
    //         </Carousel>
    //     );
};
