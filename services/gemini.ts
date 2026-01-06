
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

export const askPhitopolisAI = async (prompt: string) => {
  if (!API_KEY) return "AI Assistant is currently unavailable (API Key missing).";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: `You are the Phitopolis AI Assistant. Phitopolis is a technology services company focused on R&D, Data Science, and Full-Stack Development.
        Key Details:
        - Founders from Morgan Stanley, JPMorgan, Deutsche Bank.
        - Specializes in FinTech, Quant Engineering, and High-Performance Systems.
        - Core message: "Making tomorrow's technology available today."
        
        Your goal is to help visitors understand how Phitopolis can help their business or career. Be professional, technical, and helpful.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I encountered an error. Please try again later.";
  }
};
