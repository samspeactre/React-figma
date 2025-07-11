import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <>
      <section>
        <div className="hero-section">
          {/* <div className="hero-image"></div> */}
          <div className="hero-card br-md ">
            <div className="hero-card-body ">
              <p className="fs-base letter-spacing-3 font-weight-500 m-0">
                New Arrival
              </p>
              <h1 className="hero-card-heading font-weight-700 lh-1-2 ">
                Discover Our <br />
                New Collection
              </h1>
              <p className="font-weight-500 fs-md lh-1-4 mb-2 m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="hero-card-btn font-weight-700 fs-base px-5 py-2">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
