
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
    onSelect: () => void;
    style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, style }) => {
    return (
        <div 
            className="group bg-white dark:bg-brand-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer opacity-0 animate-fade-in-up flex flex-col justify-between border border-gray-200 dark:border-gray-800 h-full p-6"
            onClick={onSelect}
            style={style}
        >
            {/* Top Content: Category, Title, Description */}
            <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-brand-accent bg-brand-accent/10 rounded-full mb-4">
                    {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-brand-light text-sm mb-4">
                    {project.description}
                </p>
            </div>
            
            {/* Bottom Content: Tags */}
            <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700/50">
                    {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
