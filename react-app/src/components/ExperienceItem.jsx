import React, { useState } from 'react';


const ExperienceItem = ({ position, company, location, period, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`timeline-item ${isExpanded ? 'expanded' : ''}`}>
            <div className="timeline-dot"></div>
            <div
                className="timeline-content"
                onClick={() => setIsExpanded(!isExpanded)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        setIsExpanded(!isExpanded);
                    }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
            >
                <h3>{position}</h3>
                <h4>{company} - {location}</h4>
                <p className="timeline-date">{period}</p>
                <ul className="experience-description">
                    {!isExpanded ? (
                        <>
                            <li className="preview-text">{description[0]}</li>
                            {description.length > 1 && (
                                <li className="expand-prompt">
                                    <span className="expand-icon">{isExpanded ? '−' : '+'}</span>
                                    <span>{isExpanded ? 'Show less' : `Show ${description.length - 1} more`}</span>
                                </li>
                            )}
                        </>
                    ) : (
                        <>
                            {description.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                            <li className="expand-prompt">
                                <span className="expand-icon">−</span>
                                <span>Show less</span>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};


export default ExperienceItem;
