import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog<br/>(Coming Soon)</a></li>
            <li><a href="#">F.A.Q <br/>(Coming Soon)</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Reach out to us</h3>
          <address>
            
            Phone: (+27) 78 842 0053
            <br />
            Email: admin@profolio.co.za
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
