// src/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top top',
      end: '+=100',
      onUpdate: self => {
        setIsScrolled(self.progress > 0);
      }
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <span className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </span>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <ul>
        <li><Link to="/app" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        <li className='dropdown'>
            <span onClick={toggleDropdown}>
                Portfolios <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul className={`dropdown-menu ${isDropdownOpen ? 'is-active' : ''}`}>
                <li><Link to="/nature" onClick={toggleMenu}>Nature/Landscape</Link></li>
                <li><Link to="/animal" onClick={toggleMenu}>Animal</Link></li>
                <li><Link to="/ruins" onClick={toggleMenu}>Ruins</Link></li>
            </ul>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
