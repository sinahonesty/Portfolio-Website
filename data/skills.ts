
import type { SoftSkill, TechnicalSkill } from '../types';

export const softSkills: SoftSkill[] = [
    { name: 'Impact', yrsOfExp: '4-7 (Mid+)', meaning: 'The work I do has a direct, positive impact on our customers (internal or external).', level: '4', usefulIn: ['Forecasting', 'Planning'] },
    { name: 'Emotional Intelligence', yrsOfExp: '4-7 (Mid+)', meaning: "I have an accurate self-assessment, and understand my strengths and weaknesses. I'm self reflective and learn from my mistakes and experience, and I'm open to new perspectives and self-development.", level: '4', usefulIn: ['Simulation', 'Teamwork', 'UI Design'] },
    { name: 'Curosity', yrsOfExp: '4-7 (Mid+)', meaning: "I explore new topics by recommendation, and occasionally on my own when something interests me. I'll make changes to the way I work based on what I have learned.", level: '4', usefulIn: ['Optimization', 'Presentation', 'Programming'] },
    { name: 'Communication', yrsOfExp: '3-6 (Mid)', meaning: 'I effectively distill and convey complex ideas and thoughts to other members of my team. I seek a mutual understanding when communicating with others.', level: '3', usefulIn: ['Data Analysis', 'Teamwork', 'Visualization'] },
    { name: 'Ownership', yrsOfExp: '3-6 (Mid)', meaning: "I take responsibility for small projects from start to finish, and members on my team can rely on me for help with additional projects when necessary. I organize and prioritize my daily work.", level: '3', usefulIn: ['Optimization', 'Planning', 'Teamwork'] },
    { name: 'Precision', yrsOfExp: '6+ (Manager)', meaning: 'I understand the big picture and how my projects fit into it, and I successfully think through all the details to make the big picture a reality.', level: '5', usefulIn: ['Teamwork', 'UI Design', 'Visualization'] },
    { name: 'Expertise', yrsOfExp: '3-6 (Mid)', meaning: "Typically, I have 3-6 years experience. I grasp intermediate-level concepts in my field and am a reliable resource for others when they have questions in those areas.", level: '3', usefulIn: ['Presentation', 'Teamwork', 'Visualization'] },
    { name: 'Mentorship', yrsOfExp: '3-6 (Mid)', meaning: 'I actively contribute to my team, and my peers look to me if they have questions about projects relating to my typical work.', level: '3', usefulIn: ['Planning', 'Teamwork'] }
];

export const technicalSkills: TechnicalSkill[] = [
    { name: 'Word', level: '5', usefulIn: ['Documentation', 'Project Mng'] },
    { name: 'Notion', level: '5', usefulIn: ['Documentation', 'Planning', 'Project Mng'] },
    { name: 'Google Workplace Suite', level: '5', usefulIn: ['Documentation', 'Planning', 'Project Mng', 'Visualization'] },
    { name: 'PowerPoint', level: '5', usefulIn: ['Presentation', 'Visualization'] },
    { name: 'Excel', level: '5', usefulIn: ['Data Analysis', 'Forecasting', 'Planning', 'Statistics'] },
    { name: 'R', level: '5', usefulIn: ['Data Analysis', 'Programming'] },
    { name: 'Microsoft Office Suite', level: '5', usefulIn: ['Documentation', 'Planning', 'Project Mng', 'Visualization'] },
    { name: 'Visio', level: '4', usefulIn: ['Project Mng', 'Visualization'] },
    { name: 'Slack', level: '4', usefulIn: ['Planning', 'Project Mng'] },
    { name: 'SAS JMP', level: '4', usefulIn: ['Data Analysis', 'Forecasting', 'Statistics', 'Visualization'] },
    { name: 'Excel Solver', level: '4', usefulIn: ['Optimization', 'Planning'] },
    { name: 'Tableau', level: '4', usefulIn: ['Data Analysis', 'Presentation', 'Visualization'] },
    { name: 'Canva', level: '4', usefulIn: ['Graphic Design', 'Visualization'] },
    { name: 'Vensim', level: '4', usefulIn: ['Forecasting', 'Planning', 'Simulation'] },
    { name: 'SQL', level: '4', usefulIn: ['Data Analysis', 'Programming'] },
    { name: 'Inkscape', level: '3', usefulIn: ['3D Modeling', 'Graphic Design', 'Visualization'] },
    { name: 'Git', level: '3', usefulIn: ['Programming', 'Project Mng'] },
    { name: 'Mattermost', level: '3', usefulIn: ['Planning', 'Project Mng'] },
    { name: 'BigQuery', level: '3', usefulIn: ['Data Analysis', 'Programming'] },
    { name: 'MS Project', level: '3', usefulIn: ['Planning', 'Project Mng'] },
    { name: 'Trello', level: '3', usefulIn: ['Planning', 'Project Mng'] },
    { name: 'Power BI', level: '3', usefulIn: ['Data Analysis', 'Visualization'] },
    { name: 'PenPot', level: '3', usefulIn: ['Graphic Design', 'Project Mng'] },
    { name: 'SolidWorks', level: '3', usefulIn: ['3D Modeling', 'Simulation'] },
    { name: 'Figma', level: '3', usefulIn: ['Graphic Design', 'Project Mng'] },
    { name: 'Python', level: '3', usefulIn: ['Data Analysis', 'Optimization', 'Programming'] },
    { name: 'Bootstrap', level: '3', usefulIn: ['Graphic Design', 'Programming'] },
    { name: 'Obsidian', level: '2', usefulIn: ['Documentation', 'Planning', 'Visualization'] },
    { name: 'Minitab', level: '2', usefulIn: ['Programming', 'Statistics'] },
    { name: 'MATLAB', level: '2', usefulIn: ['Optimization', 'Programming', 'Statistics'] },
    { name: 'HTML, CSS', level: '2', usefulIn: ['Graphic Design', 'Programming'] },
    { name: 'JavaScript', level: '1', usefulIn: ['Programming'] }
];
