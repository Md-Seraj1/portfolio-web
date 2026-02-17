import React, { useState } from 'react';
import SkillBar from '../components/SkillBar';
import './Skills.css';

const skillsData = {
    Frontend: [
        { name: 'React', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind', level: 85 }
    ],
    Backend: [
        { name: 'Python', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
        { name: 'MongoDB', level: 70 }
    ],
    "AI & Tools": [
        { name: 'Git', level: 85 },
        { name: 'TensorFlow', level: 60 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 70 }
    ]
};

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Technical Skills</h1>
            <div className="skills-grid">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category} className="skill-category">
                        <h2>{category}</h2>
                        <div className="skills-list">
                            {skills.map(skill => (
                                <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
