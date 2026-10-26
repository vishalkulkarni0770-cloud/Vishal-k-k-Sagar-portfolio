import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';
import { personalProfile, courseOverviewSB5111, assignmentsSB5111, keyLearningsData, powerWordsData } from '@/lib/portfolio-data';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback response if GEMINI_API_KEY is not configured
    if (!apiKey) {
      const lower = message.toLowerCase();
      let fallbackAnswer = `Thank you for your interest in VISHAL K K SAGAR's MBA portfolio! `;

      if (lower.includes('umbrella') || lower.includes('message house')) {
        fallbackAnswer += `VISHAL K K SAGAR's umbrella message is: "${personalProfile.umbrellaMessage}" supported by three pillars: Strategic Analytical Rigor, Audience-Centred Communication, and Ethical Leadership.`;
      } else if (lower.includes('steve jobs') || lower.includes('assignment 2')) {
        fallbackAnswer += `In Assignment 2, VISHAL K K SAGAR analysed Steve Jobs' 2005 Stanford Commencement Address and 2007 iPhone launch, demonstrating how Jobs balanced Ethos, Pathos, and Logos through vulnerable storytelling rather than technical jargon.`;
      } else if (lower.includes('assignment 3') || lower.includes('website')) {
        fallbackAnswer += `Assignment 3 is this digital MBA portfolio website for SB5111 Business Communication, applying Barrett's five audience questions and the 7 Cs across all four MBA semesters.`;
      } else if (lower.includes('barrett') || lower.includes('audience')) {
        fallbackAnswer += `Barrett's five audience questions are: (1) Who are they? (2) What do they already know? (3) What do they need? (4) How will they react? (5) What should they do next?`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) {
        fallbackAnswer += `You can reach VISHAL K K SAGAR at ${personalProfile.email} or connect via LinkedIn. Note that per assignment privacy guidelines, phone numbers and personal addresses are deliberately excluded.`;
      } else {
        fallbackAnswer += `VISHAL K K SAGAR is a Semester 1 MBA student focusing on strategic consulting and executive communications. Feel free to explore the Business Communication (SB5111) page for assignments, artefacts, and learning reflections!`;
      }

      return NextResponse.json({ reply: fallbackAnswer });
    }

    const ai = new GoogleGenAI({ apiKey });

    const systemInstruction = `You are the executive portfolio AI assistant for VISHAL K K SAGAR, a Semester 1 MBA candidate submitting Assignment 3 for SB5111 Business Communication.
You assist recruiters, faculty members, classmates, and visitors in understanding VISHAL K K SAGAR's academic background, executive presence, communication frameworks, and MBA journey.

Here are the verified details about VISHAL K K SAGAR:
- Full Name: VISHAL K K SAGAR
- Programme: Master of Business Administration (MBA), Batch of 2026–2028, Semester 1
- Course: SB5111 Business Communication (evaluation weight: 30%)
- Umbrella Message (Message House, max 15 words): "${personalProfile.umbrellaMessage}" (13 words)
- Three Supporting Pillars:
  1. Strategic Analytical Rigor
  2. Audience-Centred Leadership Communication (Barrett's 5 questions)
  3. Ethical & Adaptive Leadership
- Profile Summary: Focused on corporate strategy, management consulting, and executive communication.
- Course Modules: (1) Communication as a Leadership Competency, (2) Audience-Centred Communication and Stakeholder Mapping, (3) Persuasion and Influence, (4) Difficult Conversations and Conflict Communication, (5) Communication in the AI Era.
- Key Assignments:
  * Assignment 1: Executive Baseline & 60-Second PREP Video Introduction
  * Assignment 2: Leadership Communication Analysis — The Steve Jobs Case Study (Stanford 2005 speech & iPhone launch)
  * Assignment 3: Build Your Own Website (this digital portfolio)
- Power Words: "Let us align on the core objective before delving into the operational details", "Synthesise", "Audience-Centric Framing", "Constructive Dissent", "Executive Gravitas".
- Privacy Policy: Never disclose phone numbers, home addresses, or government identification numbers. Direct inquiries to ${personalProfile.email} or LinkedIn.

Respond with executive poise, warmth, conciseness, and professional courtesy (following the 7 Cs: Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous). Keep responses under 150 words unless specifically asked for a detailed breakdown.`;

    const chatHistory = Array.isArray(history)
      ? history.slice(-6).map((item: { role: string; content: string }) => ({
          role: item.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: item.content }],
        }))
      : [];

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        ...chatHistory,
        {
          role: 'user',
          parts: [{ text: message }],
        },
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return NextResponse.json({ reply: response.text });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to process message' },
      { status: 500 }
    );
  }
}
