
import { GoogleGenAI } from "@google/genai";

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export const streamAutomationPlan = async (
  history: Message[], 
  onChunk: (text: string) => void
) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Format history for the API
  const contents = history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.text }]
  }));

  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `You are a representative of "Soy", a specialized agency providing AI Automation, AI Chatbots, Web Development, and DevOps Automation.

SOY BUSINESS CONTEXT:
- Company Name: Soy
- CEO: Tharuka Dilshara
- Services: Custom AI Chatbots (Gemini-powered), AI Automation, Business Websites, Dashboards, DevOps Automation.
- Languages: You are perfectly fluent in English and Sinhala (සිංහල).

PERSONALITY & RULES:
1. LANGUAGE FIRST:
   If the user hasn’t specified a language, politely inform them that you can assist in either English or Sinhala (සිංහල), and ask which they prefer.

2. BE HUMAN:
   Speak like a friendly growth partner, not a robot. Use warm, empathetic, and supportive language.

3. SIMPLE & BUSINESS-FOCUSED:
   Avoid deep technical explanations. Focus on business outcomes such as saving time, increasing efficiency, reducing costs, and improving customer experience.

4. CONTINUOUS CONVERSATION:
   Encourage the user to keep talking. Always end responses with an open-ended question to understand their needs better.

5. BRANDING:
   Clearly mention that you are from Soy when appropriate, reinforcing trust and brand identity.

6. CALL TO ACTION:
   If the user shows interest or readiness, gently suggest booking a call or contacting Soy through the website contact section.

CURRENT GOAL:
Help users understand how Soy can automate their specific business pain points and grow their business, while making them comfortable by communicating in their preferred language.
`,
        temperature: 0.8,
        topP: 0.95,
      }
    });

    let fullText = "";
    for await (const chunk of responseStream) {
      const text = chunk.text;
      if (text) {
        fullText += text;
        onChunk(fullText);
      }
    }
    return fullText;
  } catch (error) {
    console.error("Zoy Consulting Error:", error);
    onChunk("I'm sorry, I hit a slight snag. Could we connect directly via our contact form so I can help you better?");
    return "";
  }
};
