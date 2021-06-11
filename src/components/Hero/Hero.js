import React from "react";
import HeroImage from "../../assets/images/hero-img.png";
import { motion } from "framer-motion";
import {
  heroTextContainer,
  heroTextItem,
  heroImageContainer,
  heroImageItem,
} from "../Animations/Animation";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <header className="hero">
      <Navbar />
      <div className="hero-container">
        <div className="hero-left">
          <motion.div
            className="hero-text"
            variants={heroTextContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1 className="hero-text-heading" variants={heroTextItem}>
              Make your software better using the best solutions in one tool
            </motion.h1>
            <motion.p className="hero-text-description" variants={heroTextItem}>
              Task tracking, customer support, and workflow management all
              wrapped up into one software tool your team and customers will
              love.
            </motion.p>
            <motion.div className="hero-text-btn" variants={heroTextItem}>
              <button className="btn chrome-btn">Start free trial</button>
              <button className="btn firefox-btn">Learn more</button>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-right">
          <motion.div
            className="hero-image"
            variants={heroImageContainer}
            initial="hidden"
            animate="show"
          >
            <motion.img
              className="hero-image-front"
              src={HeroImage}
              variants={heroImageItem}
            ></motion.img>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
