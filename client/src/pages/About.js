import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  // scroll to top on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about__container">
      <div className="about__title">
        <h1>Our Story</h1>
      </div>
      <div className="about__content">
        <p>
          At Authentic Recipes, we understand the power of authentic, home-made
          food in connecting people with their cultural roots. As migrants
          ourselves, we have a deep appreciation for the flavors and traditions
          that remind us of the places we've called home: Japan, India,
          Australia, the USA, and beyond.
        </p>
        <p>
          Our mission is to create a modern and polished platform where food
          enthusiasts, like yourself, can come together to explore and share
          recipes from every corner of the world. We aim to fill the void we
          noticed in the online culinary landscape by offering a unique set of
          features that set us apart.
        </p>
        <h2> Browse Recipes from Every Country: </h2>
        <p>
          We have curated an extensive collection of recipes from diverse
          cultures around the globe. Whether you're searching for traditional
          Italian pasta, spicy Thai curry, or hearty Mexican tacos, our platform
          is your gateway to discovering culinary delights from all over the
          world. Immerse yourself in the richness of international cuisines and
          embark on a gastronomic adventure.
        </p>
        <h2>Share Your Own Recipes: </h2>
        <p>
          We believe that the best recipes often come from home kitchens. That's
          why we provide a platform for you to showcase your culinary creations.
          Share your treasured family recipes, innovative twists on traditional
          dishes, or newfound culinary experiments. By contributing your
          recipes, you'll become part of a global community that appreciates the
          art of cooking and sharing flavors from different cultures.
        </p>
        <h2>Vote for Authenticity: </h2>
        <p>
          We understand the importance of authenticity in preserving culinary
          traditions. We have implemented a voting system where users can
          express their agreement on the authenticity of a recipe. This ensures
          that the most genuine and true-to-roots recipes rise to the top,
          creating a reliable resource for users seeking an authentic taste
          experience.
        </p>
        <h2>Find Hard-to-Find Ingredients:</h2>
        <p>
          To make your cooking experience even more convenient, we offer a
          direct purchasing feature. When you discover a recipe that requires
          unique or hard-to-find ingredients, we provide a convenient option to
          purchase those items directly through our website. No more scouring
          multiple stores or specialty markets—get everything you need delivered
          to your doorstep, so you can focus on what you love most: creating
          delicious meals.
        </p>
        <p>
          Join us at Authentic Recipes and become part of a global community
          that celebrates culinary diversity and the joy of sharing food. Let's
          connect through flavors, traditions, and the universal language of
          taste. Together, we can savor the world, one recipe at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
