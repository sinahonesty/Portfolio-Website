import React, { useEffect } from 'react';
import type { Project } from '../types';
import { GithubIcon } from '../constants';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fade-in-up"
            style={{ animationDuration: '0.3s' }}
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-brand-secondary rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors z-10" aria-label="Close project details">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="p-8 md:p-12">
                    <span className="text-sm font-semibold text-brand-accent uppercase">{project.category}</span>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">{project.title}</h2>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.details.techStack.map(tech => (
                            <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-full">{tech}</span>
                        ))}
                    </div>

                    <div className="space-y-8 text-gray-700 dark:text-brand-light">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">The Problem</h3>
                            <p>{project.details.problem}</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">The Solution</h3>
                            <p>{project.details.solution}</p>
                        </div>
                        {project.details.businessImpact && (
                             <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Business Impact & Expansion</h3>
                                <p>{project.details.businessImpact}</p>
                            </div>
                        )}
                    </div>

                    {project.details.codeSnippet && (
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Code Snippet</h3>
                            <div className="bg-gray-100 dark:bg-brand-dark rounded-md overflow-hidden">
                                <pre className="language-javascript p-4 text-sm overflow-x-auto">
                                    <code className={`language-${project.details.codeSnippet.language}`}>
                                        {project.details.codeSnippet.code.trim()}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    )}
                    
                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center gap-4">
                        {project.details.liveUrl && (
                             <a href={project.details.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-accent text-white dark:text-brand-dark font-bold py-2 px-6 rounded-md hover:bg-brand-accent-hover transition-colors duration-300">
                                Live Demo
                             </a>
                        )}
                        {project.details.repoUrl && (
                             <a href={project.details.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-brand-light hover:text-brand-accent dark:hover:text-brand-accent transition-colors duration-300">
                                <GithubIcon/>
                                View Repository
                             </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
