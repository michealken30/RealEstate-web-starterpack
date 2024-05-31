import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className=" paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={100} />
          <span className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them
          </span>
        </div>

        <div className="f-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New york, FL 4571, USA</span>

          <div className="f-menu flexCenter">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
