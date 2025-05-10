import React, { useState } from 'react';
import { skillsData } from '../data/ExperienceData';

const Skills = () => {
    const [isTechIconsExpanded, setIsTechIconsExpanded] = useState(false);
    const [isSkillCategoriesExpanded, setIsSkillCategoriesExpanded] = useState(false);

    const toggleTechIcons = () => {
        setIsTechIconsExpanded(!isTechIconsExpanded);
    };

    const toggleSkillCategories = () => {
        setIsSkillCategoriesExpanded(!isSkillCategoriesExpanded);
    };

    // Skill images mapping
    const skillImages = {
        "JavaScript": "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
        "HTML": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        "CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        "React.js": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        "Python": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
        "Django": "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzx5g6fxr3kdrfpwxpvec.png",
        "Bootstrap": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
        "Docker containerization": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
        "SQL databases": "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
        "NoSQL databases": "https://cdn-icons-png.flaticon.com/512/8387/8387508.png"
    };

    // Convert all skills into a flat array with categories for display
    const allSkills = [
        ...skillsData.development.map(skill => ({ id: skill.toLowerCase().replace(/\s+/g, '-').replace(/\./g, ''), name: skill, category: 'Development', image: skillImages[skill] || '' })),
        ...skillsData.design.map(skill => ({ id: skill.toLowerCase().replace(/\s+/g, '-').replace(/\./g, ''), name: skill, category: 'Design', image: '' })),
        ...skillsData.tools.map(skill => ({ id: skill.toLowerCase().replace(/\s+/g, '-').replace(/\./g, ''), name: skill, category: 'Tools', image: skillImages[skill] || '' })),
        ...skillsData.databases.map(skill => ({ id: skill.toLowerCase().replace(/\s+/g, '-').replace(/\./g, ''), name: skill, category: 'Databases', image: skillImages[skill] || '' }))
    ];

    // Filter to just show skills with images for the tech icons section
    const techSkills = allSkills.filter(skill => skill.image);

    return (
        <section id="technologies">
            <div className="container">
                <div className={`section-header collapsible-header ${isTechIconsExpanded ? 'expanded' : 'collapsed'}`}
                    onClick={toggleTechIcons}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            toggleTechIcons();
                        }
                    }}
                >
                    <h2>Technical Skills</h2>
                    <div className="toggle-icon">{isTechIconsExpanded ? '−' : '+'}</div>
                </div>

                {isTechIconsExpanded && (
                    <>
                    <div id="tech-icons">
                        {techSkills.map((skill) => (
                            <div id={skill.id} key={skill.id} className="tech-icon">
                                <img src={skill.image} alt={skill.name.toLowerCase()} />
                                <h3>{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                     <div className="skill-categories">                        <div className="skill-category">
                        <h3>Development</h3>
                        <ul>
                            {skillsData.development.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                        <div className="skill-category">
                            <h3>Design</h3>
                            <ul>
                                {skillsData.design.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Tools</h3>
                            <ul>
                                {skillsData.tools.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="skill-category">
                            <h3>Databases</h3>
                            <ul>
                                {skillsData.databases.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>                    </div>
               
                    </>
                )}




            </div>
        </section>
    );
};

export default Skills;
