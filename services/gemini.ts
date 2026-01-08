
// Use the official @google/genai library
import { GoogleGenAI } from "@google/genai";

// Guideline: Obtain the API key exclusively from process.env.API_KEY and initialize inside the function
export const askPhitopolisAI = async (prompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
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
    // Guideline: .text is a property, not a method.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I encountered an error. Please try again later.";
  }
};
