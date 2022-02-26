import React from "react";
import ResponsiveWebsite from "../assests/images/Responsive.png";
import Memories from "../assests/images/memories.png";
import TextUtility from "../assests/images/TextUtility.png";
import newsApp from "../assests/images/newsapp.png";
import moreWorks from "../assests/images/moreworks.png";

const Work = () => {
  return (
    <div className="container">
      <h1 className="center">My Works</h1>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a
              href="https://github.com/rahulsrivastava1/Responsive-website"
              target="_blank"
            >
              <img
                src={ResponsiveWebsite}
                className="d-block w-100 carouselimg"
                alt="Responsive website project"
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>Responsive UI of online food app.</h5>
              <p>This UI is totally based on CSS.</p>
            </div>
          </div>
          <div className="carousel-item">
            <a
              href="https://github.com/rahulsrivastava1/memories"
              target="_blank"
            >
              <img
                src={Memories}
                className="d-block w-100 carouselimg"
                alt="Memories App Project"
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>Memories App project</h5>
              <p>
                This app is based on MERN stack where you can save your
                memories,delete,edit and like. your and others post.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <a
              href="https://github.com/rahulsrivastava1/text-utility"
              target="_blank"
            >
              <img
                src={TextUtility}
                className="d-block w-100 carouselimg"
                alt="Text Utility App Project"
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>Text Utility App</h5>
              <p>
                This app is based on React JS where you can manipulate your
                strings in various ways.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <a
              href="https://github.com/rahulsrivastava1/text-utility"
              target="_blank"
            >
              <img
                src={newsApp}
                className="d-block w-100 carouselimg"
                alt="News App Project"
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <h5>News App App</h5>
              <p>
                This app is based on React JS where you can see all news based
                on genres.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <a
              href="https://github.com/rahulsrivastava1?tab=repositories"
              target="_blank"
            >
              <img
                src={moreWorks}
                className="d-block w-100 carouselimg"
                alt="More Works"
              />
            </a>
            <div className="carousel-caption d-none d-md-block">
              <p>
                For more works,please click on image so that i can redirect you
                to my github repository page.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Work;
