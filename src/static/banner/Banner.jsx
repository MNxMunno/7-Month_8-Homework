import React from "react";
import hero from "../../assets/images/hero.webp";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <img src={hero} alt="" />
      </div>
    </section>
  );
};

export default Banner;
