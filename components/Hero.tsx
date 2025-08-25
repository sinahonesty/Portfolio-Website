import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center relative">
            <div className="space-y-6 opacity-0 animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                    Sina S.B.
                </h1>
                <p className="text-xl md:text-2xl text-brand-light max-w-3xl mx-auto">
                    A Portfolio of <span className="text-brand-accent font-semibold">Automation</span>, <span className="text-brand-accent font-semibold">Analytics</span>, and <span className="text-brand-accent font-semibold">Thoughtful Design</span>.
                </p>
                <a 
                    href="#projects" 
                    className="inline-block bg-brand-accent text-brand-dark font-bold py-3 px-8 rounded-md hover:bg-brand-accent-hover transition-transform transform hover:scale-105 duration-300"
                >
                    View My Work
                </a>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <a href="#about" aria-label="Scroll to about section">
                    <svg className="w-8 h-8 text-brand-light animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;