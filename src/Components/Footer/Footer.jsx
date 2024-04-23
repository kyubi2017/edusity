import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        © Copyright 2024. Made by {" "}
         <a href="https://github.com/kyubi2017" target="_blank">
          Oussama Ait-ikhlef
        </a>
      </p>
      <ul>
        <li>
          <a href="#">Terms of Services</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
