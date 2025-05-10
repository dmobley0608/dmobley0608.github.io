import React from 'react';

const ProjectCard = ({ project }) => {
    const [lastUpdate, setLastUpdate] = React.useState(null);
    async function fetchRepoLastUpdate(repoUrl) {
        try {
            // Extract owner and repo from GitHub URL
            const urlParts = repoUrl.split('github.com/')[1].split('/');
            const owner = urlParts[0];
            const repo = urlParts[1].replace('.git', '');

            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
            const data = await response.json();

            if (response.ok) {
                const date = new Date(data.updated_at);
                setLastUpdate(date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                }));
            }
            return null;
        } catch (error) {
            console.error('Error fetching repo data:', error);
            return null;
        }
    }

    React.useEffect(() => {
        if (project.github) {
            fetchRepoLastUpdate(project.github);
        }
    }, [project.github]);

    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
                {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </div>
            {project.inDevelopment && <small>This project is still under development</small>}
            <div className="project-links-container">
                {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Site
                    </a>
                )}
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Code
                    </a>
                )}
            </div>
            {lastUpdate && (
                <div className="last-updated">
                    Last updated: {lastUpdate}
                </div>
            )}
            
        </div>
    );
};

export default ProjectCard;
