import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6cdbd59-8e24-48bd-ab2d-3471f5130eec");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <Fade direction="left">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <MdEmail className="icon" />
              oussamaaitikhlf@gmail.com
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              +212 667-443-145
            </li>
            <li>
              <FaLocationDot className="icon" />
              77 Massachusetts Ave, Cambridge MA 02139, United States
            </li>
          </ul>
        </div>
      </Fade>
        <div className="contact-col">
      <Fade direction="right" cascade>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number (optional)"
            />
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              required></textarea>
            <button type="submit" className="btn dark-btn">
              Submit <FaArrowRightToBracket />
            </button>
          </form>
          <span>{result}</span>
      </Fade>
        </div>
    </div>
  );
}

export default Contact;
