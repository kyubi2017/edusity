import React from "react";
import "./User.css";

function User({ name, company, img, text }) {
  return (
    <div className="slide">
      <div className="user-info">
        <img src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <span>{company}</span>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default User;
