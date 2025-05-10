import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo">Dwight Mobley</div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                    <li><a href="#about-me" onClick={() => setIsMenuOpen(false)}>About</a></li>
                    <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    <li><a href="#technologies" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
