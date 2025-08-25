
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="#home" className="text-2xl font-bold text-white tracking-wider">
                    Sina<span className="text-brand-accent">.</span>
                </a>
                <nav>
                    <ul className="flex items-center space-x-6">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-brand-light hover:text-brand-accent transition-colors duration-300">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
