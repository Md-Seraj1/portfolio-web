import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    Md Seraj
                </Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <X color="white" /> : <Menu color="white" />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className={`nav-links ${isActive('/')}`} onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={`nav-links ${isActive('/about')}`} onClick={toggleMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className={`nav-links ${isActive('/projects')}`} onClick={toggleMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className={`nav-links ${isActive('/skills')}`} onClick={toggleMenu}>
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-links ${isActive('/contact')}`} onClick={toggleMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
