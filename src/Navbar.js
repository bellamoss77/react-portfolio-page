import React, { useState, useEffect } from "react";
import './Navbar.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-brand">
                <span className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}  onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </span>
            </div>
            <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#nature">Nature/Landscape</a></li>
                    <li><a href="#animal">Animal</a></li>
                    <li><a href="#ruins">Ruins</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;