import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter  c-container">
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus, quas vero. Doloremque quia quidem veniam, saepe earum
          </span>

          <div className="flexColStart contactmodes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText ">Call</span>
                    <span className="secondaryText">023 2334 44</span>
                  </div>
                </div>

                <div className="flexCenter button">Call Now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText ">Chat</span>
                    <span className="secondaryText">023 2334 44</span>
                  </div>
                </div>

                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText ">Video Call</span>
                    <span className="secondaryText">023 2334 44</span>
                  </div>
                </div>

                <div className="flexCenter button">Video Call Now</div>
              </div>
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText ">Message</span>
                    <span className="secondaryText">023 2334 44</span>
                  </div>
                </div>

                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
