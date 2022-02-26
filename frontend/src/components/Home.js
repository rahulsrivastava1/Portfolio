import React from "react";
import profile from "../assests/images/profile.png";
import { SocialIcon } from "react-social-icons";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img src={profile} className="img-thumbnail" alt="profile" />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="hometext">
              <h6 className="hometitle">Hi! I am,</h6>
              <h1 className="homeheading">Rahul Srivastava</h1>
              <h5 className="homesubtitle">MERN Stack Developer</h5>
              <span>
                <SocialIcon
                  className="socialicon"
                  url="https://www.linkedin.com/in/rahulsriv/"
                  target="_blank"
                />
                <SocialIcon
                  className="socialicon"
                  url="https://github.com/rahulsrivastava1"
                  target="_blank"
                  bgColor="white"
                />
                <SocialIcon
                  className="socialicon"
                  url="https://twitter.com/rahul_raja_sriv"
                  target="_blank"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
