import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";

function Campus() {
  return (
    <div className="campus">
      <Slide direction="right" cascade>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      </Slide>
      <button className="btn dark-btn">
        See more here
        <FaArrowRightToBracket />
      </button>
    </div>
  );
}

export default Campus;
