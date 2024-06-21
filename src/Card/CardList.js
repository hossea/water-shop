import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './CardList.css';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching images from an API
    const fetchedCards = [
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'WATER' },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'WATER' },
      
    ];
    setCards(fetchedCards);
  }, []);

  return (
    <div className="card-list-container">
      <button className="top-button" onClick={() => navigate('/water')}>Water</button>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </div>
    </div>
  );
};
export default CardList;

