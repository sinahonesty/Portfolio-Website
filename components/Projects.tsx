import React, { useState, useMemo } from 'react';
import type { Project } from '../types';
import { ProjectCategory } from '../types';
import ProjectCard from './ProjectCard';
import { PROJECT_CATEGORIES } from '../constants';

interface ProjectsProps {
    projects: Project[];
    onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectSelect }) => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = useMemo(() => {
        let tempProjects = projects;

        // Filter by category
        if (activeCategory !== 'All') {
            tempProjects = tempProjects.filter(project => project.category === activeCategory);
        }

        // Filter by search query
        if (searchQuery.trim() !== '') {
            const lowercasedQuery = searchQuery.toLowerCase();
            tempProjects = tempProjects.filter(project => 
                project.title.toLowerCase().includes(lowercasedQuery) ||
                project.description.toLowerCase().includes(lowercasedQuery) ||
                project.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
            );
        }
        
        return tempProjects;
    }, [activeCategory, projects, searchQuery]);

    return (
        <section id="projects" className="py-20 md:py-32">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Projects</h2>
                <p className="text-gray-600 dark:text-brand-light mt-4">A selection of my work. Click on a project to learn more.</p>
            </div>
            
            <div className="mb-12 w-full max-w-2xl mx-auto space-y-8">
                 <div className="relative">
                    <input
                        type="text"
                        placeholder="Search projects by title, description, or tag..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-100 dark:bg-brand-secondary border border-gray-300 dark:border-gray-700 rounded-full py-3 px-6 pl-12 text-gray-900 dark:text-brand-light placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                        aria-label="Search projects"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="flex justify-center flex-wrap gap-2 md:gap-4">
                    <button
                        onClick={() => setActiveCategory('All')}
                        className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors duration-300 ${activeCategory === 'All' ? 'bg-brand-accent text-white dark:text-brand-dark' : 'bg-gray-100 dark:bg-brand-secondary text-gray-700 dark:text-brand-light hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                    >
                        All
                    </button>
                    {PROJECT_CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 text-sm md:text-base font-medium rounded-full transition-colors duration-300 ${activeCategory === category ? 'bg-brand-accent text-white dark:text-brand-dark' : 'bg-gray-100 dark:bg-brand-secondary text-gray-700 dark:text-brand-light hover:bg-gray-200 dark:hover:bg-gray-700'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        onSelect={() => onProjectSelect(project)}
                        style={{ animationDelay: `${index * 100}ms` }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;