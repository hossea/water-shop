// Navbar.js file
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Import FaBars for the menu icon
import './Navbar.css';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const [showMenu, setShowMenu] = useState(false); // State to manage mobile menu visibility

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleCartHover = () => {
    setShowCartMessage(true);
  };

  const handleCartLeave = () => {
    setShowCartMessage(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="brand-container">
          <div className="brand-name">GOBEBA</div>
          <div className="brand-tagline">Get It Delivered Now!</div>
        </div>
        <div className="contact-info">
          <div className="phone-number">0727976737</div>
          <div className="date-time">
            <div className="date">(8:00AM-9:00PM)</div>
            <div className="delivery-time">Delivered in 45min!</div>
          </div>
        </div>
      </div>
      <div className="navbar-right">
        {/* Menu Icon for Phones */}
        <FaBars className="menu-icon" onClick={toggleMenu} />

        {/* Nav Links */}
        <div className={`nav-links ${showMenu ? 'mobile-menu-active' : ''}`}>
        <FaTimes className="close-icon" onClick={toggleMenu} />
          <div className="dropdown">
            <a href='/' className="nav-link">HOME</a>
          </div>
          <div className="dropdown">
            <span className="nav-link">ORDER NOW</span>
            <div className="dropdown-content">
              
              <a href="/water">Water</a>
            </div>
          </div>
          <div className="dropdown">
            <span className="nav-link">ABOUT US</span>
            <div className="dropdown-content">
              <a href="/about">Company</a>
              <a href="/about">Team</a>
            </div>
          </div>
          <div>
            <a href="/about" className="nav-link">CONTACT</a>
          </div>
        </div>

        {/* Search Input */}
        <FaSearch className="icon-2" onClick={handleSearchClick} />
        {showSearch && <input type="text" className="search-input" placeholder="Search..." />}

        {/* Shopping Cart */}
        <FaShoppingCart
          className="icon-2"
          onMouseEnter={handleCartHover}
          onMouseLeave={handleCartLeave}
          onClick={() => window.location.href = '/cart'}
        />
        {showCartMessage && (
          <div className="cart-message">
            {cartIsEmpty ? 'Your cart is empty' : 'You have items in your cart'}
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;

