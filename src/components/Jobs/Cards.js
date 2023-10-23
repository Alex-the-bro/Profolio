import React from 'react'
import './Card.css';
import { whatsApp } from '../../Assets';


const Card = ({ serviceName, imageSrc, description, buttonText, whatsappNumber }) => {
  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(url, '_blank');
  };
  
    return (
      <div className='card-container'>
         <div className="card">
        <img src={imageSrc} alt="Service" className="card-image" />
        <div className="card-content">
          <h2 className="card-service-name">{serviceName}</h2>
          <p className="card-description">{description}</p>
          <a href={`https://web.whatsapp.com/send?phone=${whatsappNumber}` } onClick={handleWhatsAppClick} className="card-button" target="_blank">
            <img src={whatsApp} alt="WhatsApp" className="whatsapp-icon" />
            {buttonText}
          </a>
        </div>
      </div>
      </div>
     
    );
  }
  
  export default Card;