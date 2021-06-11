import React from "react";
import Facebook from "../../assets/images/social/facebook.png";
import Instagram from "../../assets/images/social/instagram.png";
import Linkedin from "../../assets/images/social/linkedin.png";
import { FooterData } from "../../data/FooterData";

import { FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="logo">
              <img src={Logo} alt="logo"></img>
            </div>
            <div className="contact-us">
              <div className="contact-us-item">
                <FaPhone className="icon" />
                <span>+ 1805 73 78 00 </span>
              </div>
              <div className="contact-us-item">
                <FaRegEnvelope className="icon" />
                <span>info@momodev.com </span>
              </div>
              <div className="contact-us-item">
                <FaMapMarkerAlt className="icon" />
                <span>2307 Beverley, New York</span>
              </div>
            </div>
            <div className="social-box">
              <span className="social-item">
                <img src={Facebook} alt="facebook"></img>
              </span>
              <span className="social-item">
                <img src={Linkedin} alt="linkedin"></img>
              </span>
              <span className="social-item">
                <img src={Instagram} alt="instagram"></img>
              </span>
            </div>
          </div>

          <div className="footer-mid">
            {FooterData.map(
              ({ title, link1, link2, link3, link4, link5, link6 }) => (
                <ul className="footer-links">
                  <h4>{title}</h4>
                  <li>{link1}</li>
                  <li>{link2}</li>
                  <li>{link3}</li>
                  <li>{link4}</li>
                  <li>{link5}</li>
                  <li>{link6}</li>
                </ul>
              )
            )}
          </div>
        </div>
        <p className="copy-right">
          © 2021 Deva Created By <span>Mohamed</span>.
        </p>
      </footer>
    </>
  );
}

export default Footer;
