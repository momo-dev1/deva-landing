import React from "react";
import Startups from "../../assets/images/startups.png";
import Employees from "../../assets/images/employees.png";
import Entrepreneurs from "../../assets/images/entrepreneurs.png";
import Fade from "react-reveal/Fade";
import { FaArrowRight } from "react-icons/fa";

function Features() {
  return (
    <section className="features-card">
      <div className="features-card-container">
        <div className="features-card-header">
          <h3 className="features-sub-heading">Basic Features</h3>
          <h1 className="features-card-heading">
            Tool for every kind of business
          </h1>

          <p className="features-card-description">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus.
          </p>
        </div>
        <div className="features-cards">
          <Fade left delay={200}>
            <div className="features-card-item">
              <img
                className="features-card-image"
                src={Startups}
                alt="Chrome Logo"
              ></img>
              <div className="features-card-item-header">
                <h3 className="features-card-item-heading">Startups</h3>
                <p className="features-card-item-description">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit minus.
                </p>
              </div>
              <div className="features-card-item-button">
                <button className="btn features-card-btn">
                  Discover more <FaArrowRight />
                </button>
              </div>
            </div>
          </Fade>

          <Fade bottom delay={300}>
            <div className="features-card-item">
              <img
                className="features-card-image"
                src={Employees}
                alt="Firefox Logo"
              ></img>
              <div className="features-card-item-header">
                <h3 className="features-card-item-heading">Entrepreneurs</h3>
                <p className="features-card-item-description">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit minus.
                </p>
              </div>
              <div className="features-card-item-button">
                <button className="btn features-card-btn">
                  Discover more <FaArrowRight />
                </button>
              </div>
            </div>
          </Fade>

          <Fade right delay={400}>
            <div className="features-card-item">
              <img
                className="features-card-image"
                src={Entrepreneurs}
                alt="Opera Logo"
              ></img>
              <div className="features-card-item-header">
                <h3 className="features-card-item-heading">Employees</h3>
                <p className="features-card-item-description">
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit minus.
                </p>
              </div>
              <div className="features-card-item-button">
                <button className="btn features-card-btn">
                  Discover more <FaArrowRight />
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Features;
