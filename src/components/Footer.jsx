import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon"><Github size={24} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon"><Linkedin size={24} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon"><Twitter size={24} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
