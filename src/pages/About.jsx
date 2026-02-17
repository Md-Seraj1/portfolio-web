import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import image from '../assets/WhatsApp Image 2026-02-17 at 9.55.42 AM.jpeg'

const About = () => {
    return (
        <div className="about-container">
            <motion.div
                className="about-content"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>About Me</h1>
                <div className="profile-section">
                    <div className="profile-image-placeholder">
                        <img src={image} alt="Profile" className="profile-img" />
                    </div>
                    <div className="bio">
                        <p>
                            I am a passionate developer with expertise in React, Node.js, and modern web technologies.
                            I love creating efficient, scalable, and user-friendly applications.
                        </p>
                        <div className="education">
                            <h3>Education</h3>
                            <div className="edu-item">
                                <h4>B.Sc. Computer Science</h4>
                                <p>Birmingham city univercity, 2025 - 2029</p>
                            </div>
                        </div>
                        <a href="/resume.pdf" download className="download-btn">Download CV</a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default About;
