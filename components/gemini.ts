import { GoogleGenAI } from '@google/genai';

let geminiAI: GoogleGenAI | null = null;

try {
  const apiKey = process.env.API_KEY;
  if (apiKey) {
    geminiAI = new GoogleGenAI({ apiKey });
  } else {
    console.warn("Gemini API key not found. AI features will be disabled.");
  }
} catch (error) {
  console.error("Error initializing Gemini AI Client:", error);
}

export { geminiAI };