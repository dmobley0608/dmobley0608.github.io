import React from 'react';

const Hero = () => {
    // Hero section background image URL - modern coding/development theme
    const heroBackgroundImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

    return (
        <header id="home" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="hero-container">
                <div id="sun"></div>
                <div className="hero-content">
                    <h1>Dwight Mobley</h1>
                    <h2>Full-Stack Developer</h2>
                    <p>Crafting beautiful and functional digital experiences</p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Contact Me</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
