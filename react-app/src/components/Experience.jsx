import React, { useState } from 'react';
import { experienceData, educationData } from '../data/ExperienceData';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';

const Experience = () => {
    const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
    const [isEducationExpanded, setIsEducationExpanded] = useState(false);

    const toggleExperience = () => {
        setIsExperienceExpanded(!isExperienceExpanded);
    };

    const toggleEducation = () => {
        setIsEducationExpanded(!isEducationExpanded);
    };

    return (
        <section id="experience">
            <div className="container">
                <div className={`section-header collapsible-header ${isExperienceExpanded ? 'expanded' : 'collapsed'}`}
                    onClick={toggleExperience}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            toggleExperience();
                        }
                    }}
                >
                    <h2>Training & Experience</h2>
                    <div className="toggle-icon">{isExperienceExpanded ? '−' : '+'}</div>
                </div>

                {isExperienceExpanded && (
                    <>
                        <p className="section-subheading">Click or tap on each item to view more details</p>
                        <div className="timeline">
                            {experienceData.map((job) => (
                                <ExperienceItem
                                    key={job.id}
                                    position={job.position}
                                    company={job.company}
                                    location={job.location}
                                    period={job.period}
                                    description={job.description}
                                />
                            ))}
                        </div>
                          <div className="timeline education-timeline">
                            <h4 className='text-center'>Education</h4>
                        {educationData.map((edu) => (
                            <EducationItem
                                key={edu.id}
                                degree={edu.degree}
                                institution={edu.institution}
                                location={edu.location}
                                year={edu.year}
                            />
                        ))}
                    </div>
                    </>
                )}


            </div>
        </section>
    );
};

export default Experience;
