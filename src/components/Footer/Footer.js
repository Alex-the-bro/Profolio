import React from 'react';
import './Footer.css';
import { facebook, linkedinIcon } from '../../Assets';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Reach out to us</h3>
          <address>
            Phone: (+27) 78 842 0053
            <br />
            Email: admin@profolio.co.za
          </address>
        </div>

        <div className="footer-section">
          <h3>Follow us on:</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                <img className="facebook-logo" src={facebook} alt='Facebook Logo'/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                <img className="linkedin-logo"src={linkedinIcon} alt='linkedIn Logo'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
