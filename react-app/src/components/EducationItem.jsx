import React, { useState } from 'react';

const EducationItem = ({ degree, institution, location, year }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`timeline-item education-item ${isExpanded ? 'expanded' : ''}`}>
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
                <h3>{degree}</h3>
                <h4>{institution} - {location}</h4>
                <p className="timeline-date">{year}</p>
            </div>
        </div>
    );
};

export default EducationItem;
