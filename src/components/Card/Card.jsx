import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, text, image, linkUrl, reverse,logo }) => {
  const navigate = useNavigate()
    return (
      <div className={`card ${reverse ? 'reverse' : ''}`}>
        <div className="card-content">
          <h2>{title}</h2>
          <p>{text}</p>
          <button onClick={() => navigate(`${linkUrl}`)} className="opacity-button">
      LEARN MORE
      <span className="hover-background"></span>
    </button>
        </div>
        <div className="card-image">
          {logo?logo:
          <img src={image} alt={title} />
}
        </div>
      </div>
    );
  };
export default Card;
