
import React from 'react';
import type { Project } from '../types';
import ProjectIcon from './ProjectIcon';

interface ProjectCardProps {
    project: Project;
    onSelect: () => void;
    style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, style }) => {
    return (
        <div 
            className="group bg-brand-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer opacity-0 animate-fade-in-up flex flex-col"
            onClick={onSelect}
            style={style}
        >
            <div className="h-56 bg-brand-dark flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-800">
                <ProjectIcon category={project.category} className="h-20 w-20 text-gray-600 group-hover:text-brand-accent transition-colors duration-300" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs font-semibold text-brand-accent uppercase">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2 truncate">{project.title}</h3>
                <p className="text-brand-light text-sm flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;