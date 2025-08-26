
import { GoogleGenAI, Chat } from "@google/genai";
import type { Message } from '../types';
import { softSkills, technicalSkills } from '../data/skills';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

let chat: Chat | null = null;

const formatSkillsForPrompt = (): string => {
    const techSkillsString = technicalSkills.map(s => `- ${s.name} (Level: ${s.level}/5, Used for: ${s.usefulIn.join(', ')})`).join('\n');
    const softSkillsString = softSkills.map(s => `- ${s.name} (Experience: ${s.yrsOfExp}, Meaning: ${s.meaning})`).join('\n');

    return `
---
CONTEXT: SINA'S SKILLS AND PORTFOLIO
Sina's core philosophy is 'Automate the routine, elevate the human.' 

Here is a summary of his skills:

## TECHNICAL SKILLS:
${techSkillsString}

## SOFT SKILLS:
${softSkillsString}
---
`;
};


const initializeChat = () => {
    if (!chat) {
        const skillsContext = formatSkillsForPrompt();
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are an expert AI assistant representing Sina, a skilled professional in automation, analytics, and design. 
                Your purpose is to answer questions about Sina's skills, projects, and philosophy based on his portfolio.
                Use the detailed context provided below to answer questions with specifics.
                Be professional, concise, and helpful. 
                Politely decline to answer questions that are off-topic or unrelated to Sina's professional profile.
                ${skillsContext}
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
