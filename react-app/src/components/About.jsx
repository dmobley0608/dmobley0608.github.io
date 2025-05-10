import React from 'react';
import profileImage from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about-me">
            <div className="container">
                <h2>About Me</h2>
                <div className="row">
                    <div className="col">
                        <div className="profile-image">
                            <img src={profileImage} alt="profile" />
                        </div>
                    </div>
                    <div className="col">
                        <h3>Hello, I'm Dwight</h3>
                        <p>
                            I'm a passionate full-stack developer focused on creating elegant, efficient, and user-friendly web applications. With expertise in modern web technologies including HTML, CSS, JavaScript, React, Node.js, and more, I build solutions that solve real business problems.
                        </p>
                        <p>
                            My development philosophy centers around writing clean, maintainable code while delivering exceptional user experiences. I'm constantly expanding my knowledge through continuous learning and applying new techniques to my projects.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or helping local businesses establish their digital presence.
                        </p>
                        <div className="social-links">
                            <a href="https://github.com/dmobley0608" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com/in/dwight-mobley-13825b296" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:dmobley0608@gmail.com"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
