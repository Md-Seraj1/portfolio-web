import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import './Projects.css';
import ktmScreenshot from '../assets/Screenshot 2025-06-26 143000.png';
import aiEcommerceScreenshot from '../assets/Screenshot 2026-02-12 121623.png';

const projectsData = [
    {
        id: 1,
        title: 'AI Try-On E-commerce App',
        category: 'Mobile',
        image: aiEcommerceScreenshot,
        description: 'An AI-powered mobile app allowing users to virtually try on clothes using augmented reality.',
        techStack: ['React Native', 'Python', 'TensorFlow'],
        github: 'https://github.com',
        demo: ''
    },
    {
        id: 2,
        title: 'KTM Duke Bike Website',
        category: 'Web',
        image: ktmScreenshot,
        description: 'A dynamic and visually rich website showcasing KTM Duke motorcycles with interactive galleries.',
        techStack: ['React', 'Tailwind', 'Framer Motion'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    },
    {
        id: 3,
        title: 'AI Chatbot',
        category: 'AI',
        image: 'https://placehold.co/600x400/2a2a2a/00ff88?text=AI+Chatbot',
        description: 'An AI-powered chatbot using OpenAI API for customer support.',
        techStack: ['Python', 'Flask', 'OpenAI'],
        github: 'https://github.com',
        demo: ''
    },
    {
        id: 4,
        title: 'Portfolio Website',
        category: 'Web',
        image: 'https://placehold.co/600x400/2a2a2a/646cff?text=Portfolio+Website',
        description: 'This website! Built with React and Framer Motion.',
        techStack: ['React', 'Vite', 'CSS'],
        github: 'https://github.com',
        demo: 'https://demo.com'
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="filter-buttons">
                {['All', 'Web', 'Mobile', 'AI'].map(category => (
                    <button
                        key={category}
                        className={`filter-btn ${filter === category ? 'active' : ''}`}
                        onClick={() => setFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <motion.div
                className="projects-grid"
                layout
            >
                {filteredProjects.map(project => (
                    <motion.div
                        key={project.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
