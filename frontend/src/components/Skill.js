import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skill = () => {
  return (
    <>
      <div className="container">
        <h1 className="center">My Skill</h1>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-3">
            <CircularProgressbar
              strokeWidth="10"
              background="true"
              backgroundPadding="2"
              className="bar"
              value={80}
              text="C++"
              styles={buildStyles({
                textColor: "red",
              })}
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <CircularProgressbar
              strokeWidth="10"
              background="true"
              backgroundPadding="2"
              className="bar"
              value={50}
              text="Python/Java"
              styles={buildStyles({
                textSize: "12px",
                textColor: "red",
              })}
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <CircularProgressbar
              strokeWidth="10"
              background="true"
              backgroundPadding="2"
              className="bar"
              value={70}
              text="HTML"
              styles={buildStyles({
                textColor: "red",
              })}
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <CircularProgressbar
              strokeWidth="10"
              background="true"
              backgroundPadding="2"
              className="bar"
              value={70}
              text="CSS"
              styles={buildStyles({
                textColor: "red",
              })}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-sm-6 col-md-3">
            <CircularProgressbar
              strokeWidth="10"
              background="true"
              backgroundPadding="2"
              className="bar"
              value={50}
              text="JavaScript"
              styles={buildStyles({
                textSize: "16px",
                textColor: "red",
              })}
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <CircularProgressbar
              strokeWidth="10"
              background="true"
              backgroundPadding="2"
              className="bar"
              value={65}
              text="React JS"
              styles={buildStyles({
                textColor: "red",
              })}
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <CircularProgressbar
              strokeWidth="10"
              background="true"
              backgroundPadding="2"
              className="bar"
              value={40}
              text="Node Js"
              styles={buildStyles({
                textColor: "red",
              })}
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <CircularProgressbar
              strokeWidth="10"
              background="true"
              backgroundPadding="2"
              className="bar"
              value={40}
              text="Express"
              styles={buildStyles({
                textColor: "red",
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
