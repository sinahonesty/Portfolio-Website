
export enum ProjectCategory {
    Automation = "Automation",
    Analytics = "Analytics",
    Design = "Design",
    Fun = "Fun"
}

export interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    description: string;
    tags: string[];
    details: {
        problem: string;
        solution: string;
        techStack: string[];
        businessImpact?: string;
        codeSnippet?: {
            language: string;
            code: string;
        };
        liveUrl?: string;
        repoUrl?: string;
    };
}

export interface Message {
    sender: 'user' | 'ai';
    text: string;
}

export interface SoftSkill {
  name: string;
  yrsOfExp: string;
  meaning: string;
  level: string;
  usefulIn: string[];
}

export interface TechnicalSkill {
  name: string;
  level: string;
  usefulIn: string[];
}
