import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-heading">
        CONNECT WITH US
        <div className="underline"></div>
      </h2>
      <div className="social-media">
        <div className="social-media-item">
          <FaPhone className="icon-1" />
          <span>+123 456 7890</span>
        </div>
        <div className="vertical-line"></div>
        <div className="social-media-item">
          <FaEnvelope className="icon-1" />
          <span>info@gobeba.com</span>
        </div>
        <div className="vertical-line"></div>
        <div className="social-media-item">
          <FaFacebook className="icon-1" />
          <span>Facebook</span>
        </div>
        <div className="vertical-line"></div>
        <div className="social-media-item">
          <FaTwitter className="icon-1" />
          <span>Twitter</span>
        </div>
        <div className="vertical-line"></div>
        <div className="social-media-item">
          <FaInstagram className="icon-1" />
          <span>Instagram</span>
        </div>
      </div>
      <p className="footer-text">Copyright © 2024 GOBEBA EVERYTHING LTD</p>
    </footer>
  );
};
export default Footer;
