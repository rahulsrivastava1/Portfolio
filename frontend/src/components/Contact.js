import React, { useState } from "react";
import axios from "axios";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    linkedinUrl: "",
    message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://portfolio-rahuls.herokuapp.com/add`, input)
      .then((res) => {
        alert("Your message sent successfully!,I will get back to you.");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <h1 className="center">Contact Me</h1>
      <div className="form">
        <form onSubmit={formSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={inputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={inputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="linkedin">LinkedIn profile:</label>
            <input
              type="text"
              name="linkedinUrl"
              id="linkedin"
              placeholder="Enter your linkedin profile url"
              onChange={inputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Your Message:</label>
            <textarea
              name="message"
              rows="5"
              cols="75"
              id="textarea"
              placeholder="Enter your message"
              onChange={inputHandler}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <div className="social">
        <span>
          <SocialIcon
            className="socialicons"
            url="https://www.linkedin.com/in/rahulsriv/"
            target="_blank"
          />
          <SocialIcon
            className="socialicons"
            url="https://github.com/rahulsrivastava1"
            target="_blank"
            bgColor="white"
          />
          <SocialIcon
            className="socialicons"
            url="mailto:srivastavar433@gmail.com"
            target="_blank"
            bgColor="red"
          />
          <SocialIcon
            className="socialicons"
            url="https://twitter.com/rahul_raja_sriv"
            target="_blank"
          />
          <SocialIcon
            className="socialicons"
            url="https://www.facebook.com/rahul.raja.srivastava/"
            target="_blank"
            bgColor="#3366ff"
          />
        </span>
      </div>
    </div>
  );
};

export default Contact;
