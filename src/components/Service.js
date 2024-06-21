// src/components/Service.js
import React from 'react';
import { FaShoppingCart, FaMotorcycle } from 'react-icons/fa';
import './Service.css';

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-header">
        <h1>SERVICES</h1>
        <div className="underline-2"></div>
      </div>

      <div className="grid-container">
        <div className="grid-item-1">
          <img className="icon" src="/water.png" width={'100px'} height={'100px'} alt="water" />
          <h2>GOBEBA WATER</h2>
          <p>Tired of making multiple trips to refill your water bottles? GoBEBA will deliver your 20L water bottles for brands such as Keringet, Aquamist, Quencher, and others. Call us at 0710440403</p>
        </div>
        <div className="grid-item-1">
          <img className="icon" src="/work.png" width={'100px'} height={'100px'} alt="shopping-cart" />
          <h2>GOBEBA WORK</h2>
          <p>Let us restock your office pantry with snacks, tea, sugar, etc. and refill your drinking water and cooking gas. We also provide bathroom & cleaning necessities. Call 0710440403</p>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <div className="icon"><FaShoppingCart /></div>
          <h2>GOBEBA SHOPPING</h2>
          <p>Get your snacks, general groceries, and more from our shopping category. Call us at 0710440403</p>
        </div>
        <div className="grid-item">
          <div className="icon"><FaMotorcycle /></div>
          <h2>MORE TO COME....</h2>
          <p>Stay tuned for more categories. Call 0710440403</p>
        </div>
      </div>
      <div className='about-grid'>
      <div className="about-us">
        <h2>ABOUT US</h2>
        <div className="underline-3"></div>
        <p>GoBEBA is an on-demand retailer of bulky household and workplace essentials. We deliver your daily instant needs e.g. cooking gas, drinking water, and office pantry necessities, to your doorstep in under an hour. We operate a network of dark stores (micro-fulfillment centers) around popular areas to make sure that orders get to you quickly.<br/>
          GoBEBA was born out of a strong desire to make the lives of people easier. From peering through traffic to having multiple responsibilities at home and work, our lives have never been so complex. In such times GoBEBA is your convenience partner; working hard to simplify your life!</p>
      </div>
      </div>

      <div className="container-2">
        <div className="image-container">
          <img src="/image02.png" alt="image02" />
        </div>
        <div className="text-container">
          <h2>OUR TEAM</h2>
          <p>GoBEBA is led by a team of consumer internet experts that comprehend local nuances to build the largest distribution network of household goods in Africa.</p>
          <div className="underline-4"></div>
          <h2>WORK WITH US</h2>
          <p>We are hiring. Please send your CV to <a href="mailto:vipi@gobeba.com">vipi@gobeba.com</a></p>
        </div>
      </div>

    </div>
  );
};

export default Service;
