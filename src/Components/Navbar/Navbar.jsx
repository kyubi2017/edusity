import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";
import { Slide } from "react-awesome-reveal";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handelNavToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="container">
      <Slide>
        <img className="logo" src={logo} alt="logo" />
      </Slide>
      <Slide direction="down" triggerOnce cascade damping={0.1}>
        <ul className={` ${toggle ? "active" : ""}`}>
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={250}
              onClick={handelNavToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              smooth={true}
              offset={-260}
              duration={250}
              onClick={handelNavToggle}>
              Program
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handelNavToggle}>
              About us
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-260}
              duration={250}
              onClick={handelNavToggle}>
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-260}
              duration={250}
              onClick={handelNavToggle}>
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-260}
              duration={250}
              className="btn dark-btn"
              onClick={handelNavToggle}>
              Contact us
            </Link>
          </li>
        </ul>
      </Slide>
      {toggle ? (
        <GrClose className="menu-icon" onClick={handelNavToggle} />
      ) : (
        <FaBarsStaggered className="menu-icon" onClick={handelNavToggle} />
      )}
    </nav>
  );
}

export default Navbar;
