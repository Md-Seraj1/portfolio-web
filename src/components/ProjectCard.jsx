import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                {/* Placeholder if no image */}
                {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                ) : (
                    <div className="project-image-placeholder">No Image</div>
                )}
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-link">
                        <Github size={18} /> Code
                    </a>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="btn-link">
                            <ExternalLink size={18} /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
