import React, { useState, useMemo, useEffect } from 'react';
import type { Project } from '../types';
import { ProjectCategory } from '../types';
import ProjectCard from './ProjectCard';
import { PROJECT_CATEGORIES } from '../constants';
import { softSkills, technicalSkills } from '../data/skills';

const allSkillCategories = [...new Set(technicalSkills.flatMap(s => s.usefulIn))].sort();

const StarRating = ({ level }: { level: number }) => (
    <div className="flex items-center" title={`${level} out of 5`}>
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < level ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.368-2.448a1 1 0 00-1.175 0l-3.368 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.021 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
        ))}
    </div>
);

const SoftSkillCard = ({ skill }: { skill: typeof softSkills[0] }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-4 flex justify-between items-center bg-gray-50 dark:bg-brand-secondary/50 hover:bg-gray-100 dark:hover:bg-brand-secondary transition-colors">
                <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">{skill.name}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.yrsOfExp}</p>
                </div>
                <svg className={`w-6 h-6 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                    <p className="text-gray-600 dark:text-brand-light">{skill.meaning}</p>
                    <div className="flex flex-wrap gap-2">
                        {skill.usefulIn.map(use => (
                           <span key={use} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">{use}</span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

const SkillsSection = () => {
    const [activeTab, setActiveTab] = useState<'technical' | 'soft'>('technical');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    useEffect(() => {
        setSelectedCategories([]);
    }, [activeTab]);

    const handleCategoryToggle = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredTechSkills = useMemo(() => {
        const filtered = selectedCategories.length === 0
            ? technicalSkills
            : technicalSkills.filter(skill =>
                selectedCategories.every(category => skill.usefulIn.includes(category))
              );
        return [...filtered].sort((a, b) => parseInt(b.level) - parseInt(a.level));
    }, [selectedCategories]);
    
    const sortedSoftSkills = useMemo(() => {
        return [...softSkills].sort((a,b) => parseInt(b.level) - parseInt(a.level));
    }, []);

    return (
        <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Skills Matrix</h3>
            <div className="flex justify-center border-b border-gray-200 dark:border-gray-700">
                <button onClick={() => setActiveTab('technical')} className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'technical' ? 'border-b-2 border-brand-accent text-brand-accent' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}>Technical Skills</button>
                <button onClick={() => setActiveTab('soft')} className={`px-6 py-3 font-semibold transition-colors ${activeTab === 'soft' ? 'border-b-2 border-brand-accent text-brand-accent' : 'text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'}`}>Soft Skills</button>
            </div>
            
            {activeTab === 'technical' && (
                 <div>
                    <h4 className="font-semibold text-center text-gray-700 dark:text-brand-light mb-4">Filter by Utility</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                        {allSkillCategories.map(cat => (
                             <button 
                                key={cat}
                                onClick={() => handleCategoryToggle(cat)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-colors duration-200 ${selectedCategories.includes(cat) ? 'bg-brand-accent text-white border-brand-accent' : 'bg-white dark:bg-brand-secondary border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                             >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div>
                {activeTab === 'technical' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTechSkills.map(skill => (
                            <div key={skill.name} className="bg-gray-50 dark:bg-brand-secondary p-4 rounded-lg space-y-3 border border-gray-200 dark:border-transparent">
                                <div className="flex justify-between items-center">
                                    <h5 className="font-bold text-gray-900 dark:text-white">{skill.name}</h5>
                                    <StarRating level={parseInt(skill.level)} />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skill.usefulIn.map(use => (
                                        <span key={use} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">{use}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'soft' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {sortedSoftSkills.map(skill => (
                           <SoftSkillCard key={skill.name} skill={skill} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

interface ProjectsProps {
    projects: Project[];
    onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ projects, onProjectSelect }) => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [isMatrixOpen, setIsMatrixOpen] = useState(false);

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

            <div className="mt-24 max-w-7xl mx-auto">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <button
                        onClick={() => setIsMatrixOpen(!isMatrixOpen)}
                        className="w-full p-6 flex justify-between items-center bg-gray-50 dark:bg-brand-secondary/50 hover:bg-gray-100 dark:hover:bg-brand-secondary transition-colors"
                        aria-expanded={isMatrixOpen}
                        aria-controls="skills-matrix-content"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Explore Detailed Skills Matrix
                        </h3>
                        <svg className={`w-8 h-8 text-gray-500 transform transition-transform duration-300 ${isMatrixOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out grid ${isMatrixOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div id="skills-matrix-content" className="overflow-hidden">
                             <div className="p-6 md:p-8 border-t border-gray-200 dark:border-gray-700">
                                <SkillsSection />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 max-w-5xl mx-auto">
                <img 
                    src="/Fiverr Banner-bp.png" 
                    alt="Sina SB freelance services banner" 
                    className="rounded-lg shadow-xl w-full"
                />
            </div>
        </section>
    );
};

export default Projects;