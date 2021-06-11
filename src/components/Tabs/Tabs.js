import React, { useState } from "react";
import { motion } from "framer-motion";
import { FeaturesData } from "../../data/FeaturesData";
import Company1 from "../../assets/images/company/company1.png";
import Company2 from "../../assets/images/company/company2.png";
import Company3 from "../../assets/images/company/company3.png";
import Company4 from "../../assets/images/company/company4.png";
import Company5 from "../../assets/images/company/company5.png";
import Company6 from "../../assets/images/company/company6.png";

import { heroImageContainer, heroImageItem } from "../Animations/Animation";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Starter
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Team
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Enterprise
        </button>
      </div>

      <div className="content-tabs">
        {FeaturesData.map((features, index) => (
          <div
            key={index}
            className={
              toggleState === index + 1
                ? "content-item active-content-item"
                : "content-item"
            }
          >
            <motion.div className="content-left-item">
              <motion.div
                className="features-image"
                variants={heroImageContainer}
                initial="hidden"
                animate={toggleState === index + 1 ? "show" : "hidden"}
              >
                <motion.img
                  className="features-image-front"
                  src={features.image}
                  variants={heroImageItem}
                ></motion.img>
                <button className="btn features-btn">Get started</button>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="content-company">
        <motion.img src={Company1} alt={Company1}></motion.img>
        <motion.img src={Company2} alt={Company2}></motion.img>
        <motion.img src={Company3} alt={Company3}></motion.img>
        <motion.img src={Company4} alt={Company4}></motion.img>
        <motion.img src={Company5} alt={Company5}></motion.img>
        <motion.img src={Company6} alt={Company6}></motion.img>
      </div>
    </div>
  );
}

export default Tabs;
