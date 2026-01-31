
import { GoogleGenAI } from "@google/genai";
import { SKILLS, PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the personal AI Assistant for Tinotenda V Tarirai (TAR). 
Your job is to answer questions about Tinotenda's portfolio, skills, and projects in a professional, witty, and helpful manner.

Context:
- Name: Tinotenda V Tarirai (TAR)
- Status: Software Engineering student at MSU (Midlands State University).
- Top Skill: Graphic Design (97%)
- Other Skills: Book Writing (87%), HTML/CSS (70%), JS (67%), Python (50%), Animation (33%).
- Major Projects: 
    1. Lee Fashions (Tailor platform at leefashions.netlify.app)
    2. Zimedurank (Zim school rankings)
    3. Uni Assister (University application helper)
    4. SyndiSpace (Social community discovery app - "Find your people")
    5. Books: "Potato Salad" and "St Pinewood St."

Tone: Modern, sleek, professional yet approachable.
If asked about contact details, say they can use the form on the website or email tinvictar@gmail.com.
Keep responses concise.
`;

export async function askAIAssistant(prompt: string, history: { role: 'user' | 'assistant', content: string }[]) {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const response = await chat.sendMessage({ message: prompt });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a bit of trouble thinking right now. Please try again in a moment!";
  }
}
