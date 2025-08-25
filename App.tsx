
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import AIAssistant from './components/AIAssistant';
import type { Project } from './types';
import { projects } from './data/projects';

function App() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectSelect = (project: Project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="min-h-screen bg-brand-dark">
            <Header />
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
