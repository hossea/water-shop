import React from 'react';
import './CardItem.css';

const Card = ({ imageUrl, title, subtitle, cost, onAddToCart }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-subtitle">{subtitle}</p>
        <p className="card-cost">${cost}</p>
        <button className="add-to-cart-button" onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
