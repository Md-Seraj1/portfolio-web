import React from 'react';
import { motion } from 'framer-motion';
import './SkillBar.css';

const SkillBar = ({ skill, level }) => {
    return (
        <div className="skill-bar">
            <div className="skill-info">
                <span className="skill-name">{skill}</span>
                <span className="skill-percentage">{level}%</span>
            </div>
            <div className="progress-bg">
                <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
};

export default SkillBar;
