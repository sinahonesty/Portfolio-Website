
import { GoogleGenAI, Chat } from "@google/genai";
import type { Message } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

let chat: Chat | null = null;

const initializeChat = () => {
    if (!chat) {
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are an expert AI assistant representing Sina, a skilled professional in automation, analytics, and design. 
                Your purpose is to answer questions about Sina's skills, projects, and philosophy based on his portfolio. 
                His core philosophy is 'Automate the routine, elevate the human.' 
                Be professional, concise, and helpful. 
                Politely decline to answer questions that are off-topic.`,
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
