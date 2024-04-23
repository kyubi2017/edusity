import React from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import "./Hero.css";
import { Fade} from "react-awesome-reveal";

function Hero() {
  return (
    <div className="hero container">
      <Fade direction="up">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more
          <FaArrowRightToBracket 
          className="hero-icon"/>
        </button>
      </div>
      </Fade>
    </div>
  );
}

export default Hero;
