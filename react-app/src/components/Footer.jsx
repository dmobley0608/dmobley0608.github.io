import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h3>Dwight Mobley</h3>
                        <p>Building digital solutions with passion and precision.</p>
                    </div>
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about-me">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/dmobley0608" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                        <a href="https://linkedin.com/in/dwight-mobley-13825b296" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:dmobley0608@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Dwight Mobley. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
