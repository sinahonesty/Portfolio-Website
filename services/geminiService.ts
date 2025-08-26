
import { GoogleGenAI, Chat } from "@google/genai";
import type { Message } from '../types';
import { softSkills, technicalSkills } from '../data/skills';
import { projects } from '../data/projects';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

let chat: Chat | null = null;

const formatContextForPrompt = (): string => {
    const techSkillsString = technicalSkills.map(s => `- ${s.name} (Level: ${s.level}/5, Used for: ${s.usefulIn.join(', ')})`).join('\n');
    const softSkillsString = softSkills.map(s => `- ${s.name} (Experience: ${s.yrsOfExp}, Meaning: ${s.meaning})`).join('\n');
    const projectsString = projects.map(p => 
        `  - Title: ${p.title}\n    Category: ${p.category}\n    Description: ${p.description}\n    Technologies: ${p.tags.join(', ')}`
    ).join('\n\n');

    return `
---
CONTEXT: SINA'S PORTFOLIO DATA
Sina's core philosophy is 'Automate the routine, elevate the human.' 
You must use the following structured data to answer questions about his skills, projects, and experience.

## PROJECTS
${projectsString}

## TECHNICAL SKILLS
${techSkillsString}

## SOFT SKILLS
${softSkillsString}
---
`;
};


const initializeChat = () => {
    if (!chat) {
        const fullContext = formatContextForPrompt();
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are an expert AI assistant representing Sina, a skilled professional in automation, analytics, and design. 
                Your purpose is to answer questions about Sina's skills, projects, and philosophy based on his portfolio.
                Use the detailed context provided below to answer questions with specifics.
                Be professional, concise, and helpful. 
                Politely decline to answer questions that are off-topic or unrelated to Sina's professional profile.
                ${fullContext}
                `,
            },
        });
    }
    return chat;
};

export const chatWithAssistant = async (userMessage: string): Promise<string> => {
    try {
        const chatInstance = initializeChat();
        const response = await chatInstance.sendMessage({ message: userMessage });
        return response.text;
    } catch (error) {
        console.error("Error communicating with Gemini API:", error);
        return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
    }
};
