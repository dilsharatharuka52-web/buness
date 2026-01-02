
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAutomationAdvice = async (userTask: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are an expert Automation Consultant specializing in n8n, Zapier, and custom Webhook integrations. 
      A potential client wants to automate the following manual task: "${userTask}".
      
      Provide a brief, professional, and exciting response that includes:
      1. A high-level overview of an n8n workflow to solve this.
      2. Key tools/APIs that would be integrated.
      3. The primary benefit (e.g., hours saved, data accuracy).
      4. A concluding encouragement to book a call.
      
      Keep the response concise and formatted with markdown. Use bullet points for the workflow steps.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my automation database. Please reach out via the contact form and I'll personally review your request!";
  }
};
