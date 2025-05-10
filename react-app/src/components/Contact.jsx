import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2>Get In Touch</h2>
                <p className="section-description">Interested in working together? Feel free to reach out!</p>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p><a href="mailto:dmobley0608@gmail.com">dwight@dwight-mobley.com</a></p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Location</h3>
                                <p>Gillsville, Ga.</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-code-branch"></i>
                            <div>
                                <h3>GitHub</h3>
                                <p><a href="https://github.com/dmobley0608" target="_blank" rel="noopener noreferrer">github.com/dmobley0608</a></p>
                            </div>
                        </div>
                        <div className='contact-item'>
                            <i className="fab fa-linkedin"></i>
                            <div>
                                <h3>LinkedIn</h3>
                                <p><a href="https://linkedin.com/in/dwight-mobley-13825b296" target="_blank" rel="noopener noreferrer">linkedin.com/in/dwight-mobley-13825b296</a></p>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
