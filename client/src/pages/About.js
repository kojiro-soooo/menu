import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__content">
        <div className="about__intro">
          <p className="about__p1">
            At Authentic Recipes, we understand the power of authentic,
            home-made food in connecting people with their cultural roots. As
            migrants ourselves, we have a deep appreciation for the flavors and
            traditions that remind us of the places we've called home: Japan,
            India, Australia, the USA, and beyond.
          </p>
          <div className="about__img1">
            <img src="https://images.unsplash.com/photo-1606787503066-794bb59c64bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"></img>
            {/* <p>
            Our mission is to create a modern and polished platform where food
            enthusiasts, like yourself, can come together to explore and share
            recipes from every corner of the world. We aim to fill the void we
            noticed in the online culinary landscape by offering a unique set of
            features that set us apart.
          </p> */}
          </div>
        </div>
        <p>
          Browse Recipes from Every Country: We have curated an extensive
          collection of recipes from diverse cultures around the globe. Whether
          you're searching for traditional Italian pasta, spicy Thai curry, or
          hearty Mexican tacos, our platform is your gateway to discovering
          culinary delights from all over the world. Immerse yourself in the
          richness of international cuisines and embark on a gastronomic
          adventure.
        </p>
        <p>
          Share Your Own Recipes: We believe that the best recipes often come
          from home kitchens. That's why we provide a platform for you to
          showcase your culinary creations. Share your treasured family recipes,
          innovative twists on traditional dishes, or newfound culinary
          experiments. By contributing your recipes, you'll become part of a
          global community that appreciates the art of cooking and sharing
          flavors from different cultures.
        </p>
        <p>
          Vote for Authenticity: We understand the importance of authenticity in
          preserving culinary traditions. We have implemented a voting system
          where users can express their agreement on the authenticity of a
          recipe. This ensures that the most genuine and true-to-roots recipes
          rise to the top, creating a reliable resource for users seeking an
          authentic taste experience.
        </p>
        <p>
          Find Hard-to-Find Ingredients: To make your cooking experience even
          more convenient, we offer a direct purchasing feature. When you
          discover a recipe that requires unique or hard-to-find ingredients, we
          provide a convenient option to purchase those items directly through
          our website. No more scouring multiple stores or specialty markets—get
          everything you need delivered to your doorstep, so you can focus on
          what you love most: creating delicious meals.
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
