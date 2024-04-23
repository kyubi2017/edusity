import React, { useRef } from "react";
import "./Testimonials.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import User from "../User/User";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { Fade } from "react-awesome-reveal";

function Testimonials() {
  const usersData = [
    {
      id: 1,
      name: "Emily Williams",
      company: "Edusity, USA",
      img: user_1,
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 2,
      name: "William Jackson",
      company: "Edusity, USA",
      img: user_2,
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 3,
      name: "Jones Miller",
      company: "Edusity, USA",
      img: user_3,
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 4,
      name: "Jane Smith",
      company: "Edusity, USA",
      img: user_4,
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
  ];

  const slider = useRef();
  let translateX = 0;
  const handelNext = () => {
    if (translateX > -50) {
      translateX -= 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };
  const handelBack = () => {
    if (translateX < 0) {
      translateX += 25;
    }
    slider.current.style.transform = `translateX(${translateX}%)`;
  };

  return (
    <Fade direction="up">
    <div className="testimonials">
      <FaArrowCircleRight className="next-btn" onClick={handelNext} />
      <FaArrowCircleLeft className="back-btn" onClick={handelBack} />
      <div className="slider">
        <ul ref={slider}>
          {usersData.map((user) => (
            <li>
              <User key={user.id} {...user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Fade>
  );
}

export default Testimonials;
