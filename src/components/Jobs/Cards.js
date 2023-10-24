import React from 'react';
import './Card.css';
import { whatsApp } from '../../Assets';

const Card = ({ serviceName, imageSrc, description, buttonText, whatsappNumber, formatWhatsAppNumber }) => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url);
  };

  return (
    <div className='card-container'>
      <div className="card">
        <img src={imageSrc} alt="Service" className="card-image" />
        <div className="card-content">
          <h2 className="card-service-name">{serviceName}</h2>
          <p className="card-description">{description}</p>
          <a href={`https://wa.me/${formatWhatsAppNumber(whatsappNumber)}`} onClick={handleWhatsAppClick} className="card-button">
            <img src={whatsApp} alt="WhatsApp" className="whatsapp-icon" />
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
