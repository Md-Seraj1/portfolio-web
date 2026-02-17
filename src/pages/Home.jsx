import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index, text]);

    return (
        <div className="home-container">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I'm <span className="highlight">Md Seraj</span>
                </motion.h1>
                <h2 className="typing-text">{text}<span className="cursor">|</span></h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    I build modern and scalable web applications.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <Link to="/projects">
                        <button className="cta-button">View My Work</button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
