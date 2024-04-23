import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import { Slide } from "react-awesome-reveal";

function Programs() {
  return (
    <div className="programs">
        {/* */}
      <Slide direction="right" cascade damping={0.2}>
        <div className="program">
          <img src={program_1} alt="university student" />
          <div className="caption">
            <p>Graduation Degree</p>
            <img src={program_icon_1} alt="" />
          </div>
        </div>
        {/* */}
        <div className="program">
          <img src={program_2} alt="university student" />
          <div className="caption">
            <p>Masters Degree</p>
            <img src={program_icon_2} alt="" />
          </div>
        </div>
        {/* */}
        <div className="program">
          <img src={program_3} alt="university student" />
          <div className="caption">
            <p>Post Graduation</p>
            <img src={program_icon_3} alt="" />
          </div>
        </div>
    </Slide>
      </div>
  );
}

export default Programs;
