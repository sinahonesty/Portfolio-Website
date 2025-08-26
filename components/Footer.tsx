import React from 'react';
import { LinkIcon } from '../constants';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-50 dark:bg-brand-secondary border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600 dark:text-brand-light text-sm mb-4 md:mb-0">
                    &copy; {currentYear} Sina S.B. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                    <a href="https://sinasb.link/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-accent dark:hover:text-brand-accent transition-colors" aria-label="Sina's Links">
                        <LinkIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;