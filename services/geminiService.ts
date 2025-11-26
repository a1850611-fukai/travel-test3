import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Note: In a real production app, ensure api key is safe.
// For this demo, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCulturalTip = async (location: string, activityTitle: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Travel Tip: Always carry small change for street food and tuk-tuks! (AI Key missing)";
  }

  try {
    const prompt = `Give me a very short, fascinating cultural fun fact or a practical travel tip specifically for a tourist visiting "${location}" doing "${activityTitle}" in Thailand. Keep it under 30 words. Tone: Helpful and warm.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text?.trim() || "Enjoy the smiles of Thailand!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Remember to stay hydrated and wear sunscreen!";
  }
};