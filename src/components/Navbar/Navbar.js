import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
import { heroImageItem } from "../Animations/Animation";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo">
            <motion.img src={Logo} variants={heroImageItem}></motion.img>
          </div>
        </Link>
        <div className={click ? "nav-list active" : "nav-list"}>
          <Link to="/" className="nav-link" onClick={() => setClick(false)}>
            Home
          </Link>
          <Link
            to="/plans"
            className="nav-link"
            onClick={() => setClick(false)}
          >
            Plans
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setClick(false)}
          >
            About
          </Link>
          <Link
            to="/product"
            className="nav-link"
            onClick={() => setClick(false)}
          >
            Product
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setClick(false)}
          >
            Contact
          </Link>
          <Link to="/" className="login-btn" onClick={() => setClick(false)}>
            <button className="btn navbar-btn">Purchase Now</button>
          </Link>
        </div>
        <button onClick={handleClick} className="burger-menu">
          {click ? (
            <IoMdClose size={24} style={{ color: "white" }} />
          ) : (
            <GiHamburgerMenu size={24} style={{ color: "white" }} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
