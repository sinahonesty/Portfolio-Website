import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import AIAssistant from './components/AIAssistant';
import type { Project } from './types';
import { projects } from './data/projects';

type Theme = 'light' | 'dark';

function App() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = window.localStorage.getItem('theme');
            if (storedTheme === 'dark' || storedTheme === 'light') {
                return storedTheme;
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'dark'; // default for SSR
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="min-h-screen">
            <Header theme={theme} setTheme={setTheme} />
            <main className="container mx-auto px-4 md:px-8 lg:px-16">
                <Hero />
                <About />
                <Projects projects={projects} onProjectSelect={handleProjectSelect} />
            </main>
            <Footer />
            <AIAssistant />
            {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </div>
    );
}

export default App;
