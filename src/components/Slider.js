// Slider.js
import React, { useState } from 'react';
import './Slider.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from react-icons

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const grids = [
    { id: 1, heading: 'GoBEBA Brings the Shop to Your Door', text: 'Get your household & workplace essentials delivered to your home or office within an hour. We will bring your cooking gas, drinking water, office pantry restock, and more. Call now at 0710440403.', className: 'grid1' },
    { id: 2, heading: 'Get Your Essentials Delivered Now', text: 'Need to quickly get your home or workplace essentials? Check out GoBEBA Gas, GoBEBA Water, GoBEBA Shopping, and get your items delivered now! Call GoBEBA now at 0710440403', className: 'grid2' },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % grids.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + grids.length) % grids.length);
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={handlePrev}>
        <FaChevronLeft />
      </button>
      <div className="slider">
        {grids.map((grid, index) => (
          <div
            key={grid.id}
            className={`grid ${grid.className} ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="grid-content">
              <h2 className="grid-heading">{grid.heading}</h2>
              <p className="grid-text">{grid.text}</p>
              <button className="order-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={handleNext}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Slider;




