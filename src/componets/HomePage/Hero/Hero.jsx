import React from "react";
import "./hero.css";
import { mainHeroImage } from "../../img";

export const Hero = () => {
  return (
    <div className="hero">
      <div>
        <p>Smart Home: Definition, How They Work, Pros and Cons</p>
        <p>
          What Is a Smart Home? A smart home refers to a convenient home setup
          where appliances and devices can be automatically controlled remotely
          from anywhere with an internet connection using a mobile or other
          networked device. Devices in a smart home are interconnected through
          the internet, allowing the user to control functions such as security
          access to the home, temperature, lighting, and a home theater
          remotely.
        </p>
      </div>
      <div>
        <img className="hero-image" src={mainHeroImage} alt="" />
      </div>
    </div>
  );
};
