import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../data/ProjectData';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            <p className='text-center'>**Some projects are hosted on free services, which may lead to slower startup times.**</p>
            <div className="container">
                <div className="project-grid">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
