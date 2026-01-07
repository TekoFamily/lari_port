import React from 'react';

const Navbar = () => {
    return (
        <header className="header">
            <div className="header-container">
                <a href="#" className="logo">
                    LARISSA
                </a>

                <nav className="nav-menu">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#works" className="nav-link">Works</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
