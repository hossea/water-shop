import React, { useEffect, useState } from 'react';
import Card from './CardItem';
import { FaSortDown } from 'react-icons/fa';
import './CardItemList.css';

const CardItemList = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('popularity');
  const cardsPerPage = 12;

  const waterTypes = [
    'keringet', 
    'aquamist', 
    'quencher', 
    'mayers', 
    'jibu', 
    'aquaclear'
  ];

  useEffect(() => {
    // Simulate fetching images from an API

    const fetchedCards = [
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      { imageUrl: '/water5.png', title: 'GOBEBA', subtitle: 'Spring Water', cost: 10 },
      { imageUrl: '/water4.png', title: 'GOBEBA', subtitle: 'Mineral Water', cost: 15 },
      // Add more cards as needed
    ];

    setCards(fetchedCards);
    setFilteredCards(fetchedCards);
  }, []);

  const handleFilter = (type) => {
    const filtered = cards.filter(card => card.subtitle === type);
    setFilteredCards(filtered);
    setCurrentPage(1); 
  };

  const handleAddToCart = (card) => {
    // Implement add to cart functionality here
    console.log(`${card.title} added to cart`);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <div className="card-list-container-1">
      <button className="top-button">Water</button>
      <div className="filter-buttons">
        {waterTypes.map((type, index) => (
          <button key={index} onClick={() => handleFilter(type)} className="filter-button">
            {type}
          </button>
        ))}
      </div>
      <div className="results-info">
        <span>Showing {indexOfFirstCard + 1}–{Math.min(indexOfLastCard, filteredCards.length)} of {filteredCards.length} results</span>
        <div className="sort-dropdown">
          <select onChange={(e) => setSortOption(e.target.value)} className="sort-select">
            <option value="popularity">Sort by Popularity</option>
            <option value="rating">Sort by Average Rating</option>
            <option value="latest">Sort by Latest</option>
            <option value="highPrice">Sort by High Price</option>
            <option value="lowPrice">Sort by Low Price</option>
          </select>
          <FaSortDown />
        </div>
      </div>
      <div className="card-list">
        {currentCards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            subtitle={card.subtitle}
            cost={card.cost}
            onAddToCart={() => handleAddToCart(card)}
          />
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(filteredCards.length / cardsPerPage)).keys()].map(number => (
          <button key={number + 1} onClick={() => paginate(number + 1)} className="page-number">
            {number + 1}
          </button>
        ))}
        {filteredCards.length > cardsPerPage && <button className="page-number">→</button>}
      </div>
      <div>
        <p className='paragraph'>
        Get your 20 liter water refill or disposable bottles such as Aquamist, Keringet, Quencher, Grange Park, Mayers, Mt Kenya, etc delivered to your home. Best drinking water delivery services in Nairobi.<br/>

Delivery locations include: Adams Arcade, Akiba, Amboseli, Bellevue, Bomas, Brookside, Buruburu, CBD, Dagoretti, Donholm, Eastleigh, Edenville, Embakasi, Fedha, Gachie, Garden Estate, Garden City, Gigiri, Golf Course, Highridge, Highrise, Hurlingham, Imara Daima, Jamhuri, Jogoo Road, Kahawa Sukari, Kangemi, Karen, Kasarani, Kawangware, Kiambu Road, Kikuyu, Kileleshwa, Kilimani, Kinoo, Kitengela, Kitisuru, Kiserian, Kyuna, Langata, Lavington, Limuru Rd, Loresho, Lower Kabete, Madaraka, Makadara, Marurui, Mbagathi, Membley, Milimani, Mimosa, Mombasa Rd, Muthaiga, Muthangari, Mwiki, Mzima Springs, Nairobi West, Ngara, Ngong Road, Ngumba, Ngumo, Nyari Estate, Nyayo Estate, Ongata Rongai, Pangani, Parklands, Peponi, Riara, Ridgeways, Ridge View, Riruta, Riverside, Rosslyn, Roysambu, Ruaka, Runda, South B, South C, Spring Valley, State House, Syokimau, Tassia, Thika Road, Thindigua, Thome, Two Rivers, Umoja, Upper Hill, Uthiru, Valley Arcade, Waiyaki Way, Wangige, Westlands, Woodley, Zimmerman
        </p>
      </div>
    </div>
  );
};

export default CardItemList;

