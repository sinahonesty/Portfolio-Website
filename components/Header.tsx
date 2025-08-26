import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
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

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (href === '#home') {
             window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-brand-secondary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-gray-900 dark:text-white tracking-wider">
                    Sina<span className="text-brand-accent">SB</span>
                </a>
                <nav>
                    <ul className="flex items-center space-x-2 md:space-x-6">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-gray-600 dark:text-brand-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                         <li>
                            <ThemeToggle theme={theme} setTheme={setTheme} />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;