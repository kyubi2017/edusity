import React from "react";
import "./Title.css";
import { Fade } from "react-awesome-reveal";
function Title({ subTitle, title }) {
  return (
    <Fade direction="up">
      <div className="title">
        <p>{subTitle}</p>
        <h2>{title}</h2>
      </div>
    </Fade>
  );
}

export default Title;
