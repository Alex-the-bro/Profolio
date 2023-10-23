import React, { useState } from 'react';
import { navLinks } from '../../Constants';
import { Link } from 'react-scroll';
import { logo } from '../../Assets';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav className={`navbar ${showMenu ? 'active' : ''}`}>
        <div className="logo-container">
          <Link to="/" smooth={true} duration={1000}>
            <img src={logo} className="logo" alt="Logo" />
          </Link>
        </div>

        <div className={`nav-toggle ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id} onClick={toggleMenu}>
              <Link to={link.id} smooth={true} duration={1000}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
