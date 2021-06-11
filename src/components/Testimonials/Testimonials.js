import React from "react";
import Bounce from "react-reveal/Bounce";
import ClientImg from "../../assets/images/clinet-img.png";
import WaveImg from "../../assets/images/wave.png";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <Bounce top cascade>
          <div className="testimonials-img">
            <img src={ClientImg} alt="client" />
          </div>
          <div className="testimonials-header">
            <h2 className="testimonials-header-title">
              "It is really refreshing to work with this software which is truly
              helpful in the client’s preferences."
            </h2>
            <h4 className="testimonials-header-subtitle">Rebecca Calderon</h4>
            <p className="testimonials-header-description">
              Head of marketing, Apple Inc.
            </p>
          </div>
        </Bounce>
      </div>
      <div className="testimonials-wave">
        <img src={WaveImg} alt="wave" />
      </div>
    </section>
  );
}

export default Testimonials;
