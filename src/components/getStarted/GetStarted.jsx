import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyzy</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us all over
            the world
            <br />
            Find your residence Soon
          </span>
          <button className="button">
            <a href="mailto:kenneth.oshogwe@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
