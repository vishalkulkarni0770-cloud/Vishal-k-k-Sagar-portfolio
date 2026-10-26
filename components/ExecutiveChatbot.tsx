'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Minimize2, ExternalLink } from 'lucide-react';
import { personalProfile } from '@/lib/portfolio-data';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestedQueries = [
  'What is VISHAL K K SAGAR’s umbrella message?',
  'What did VISHAL K K SAGAR learn from Steve Jobs’ speech?',
  'Explain Barrett’s five audience questions',
  'What are VISHAL K K SAGAR’s MBA career goals?',
  'How was Assignment 3 designed?',
];

export function ExecutiveChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I am VISHAL K K SAGAR's MBA Portfolio Assistant. Whether you are a recruiter exploring his leadership profile, a faculty member evaluating Assignment 3 (SB5111), or a classmate, I can answer questions about his coursework, Message House, and experiential learnings. How can I assist you today?`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (queryToSend?: string) => {
    const text = queryToSend || input;
    if (!text.trim() || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: newMessages,
        }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content:
              'Thank you for your question. You can explore the Business Communication page for comprehensive details regarding VISHAL K K SAGAR’s assignments, artefacts, and reflections.',
          },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content:
            'I encountered a brief connection error, but VISHAL K K SAGAR’s full portfolio is accessible across the navigation links above!',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#172A46] hover:bg-[#4969E8] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4969E8] focus:ring-offset-2"
          aria-label="Open Portfolio AI Assistant"
        >
          <Sparkles className="w-4 h-4 text-blue-300" />
          <span className="text-xs font-semibold tracking-wide">Ask Portfolio AI</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] max-h-[600px] h-[550px] bg-white border border-[#E4E0D6] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#172A46] text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#4969E8] flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  Executive Portfolio Assistant
                </h4>
                <p className="text-[11px] text-slate-300">
                  SB5111 Course &amp; Candidate Guide
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-300 hover:text-white rounded-md transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Query Pills */}
          <div className="p-2.5 bg-[#F8F7F3] border-b border-[#E4E0D6] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {suggestedQueries.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(q)}
                disabled={loading}
                className="whitespace-nowrap px-2.5 py-1 text-[11px] font-medium bg-white text-[#172A46] border border-[#E4E0D6] hover:border-[#4969E8] hover:text-[#4969E8] rounded-full transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F8F7F3]/40">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#172A46] text-white flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3.5 text-xs leading-relaxed rounded-xl ${
                    m.role === 'user'
                      ? 'bg-[#4969E8] text-white rounded-br-xs'
                      : 'bg-white text-[#172A46] border border-[#E4E0D6] shadow-2xs rounded-bl-xs'
                  }`}
                >
                  {m.content}
                </div>
                {m.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex gap-2.5 items-center text-xs text-slate-500 italic p-2">
                <Bot className="w-4 h-4 animate-bounce text-[#4969E8]" />
                <span>Formulating response with executive clarity...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#E4E0D6] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about VISHAL K K SAGAR’s MBA journey or SB5111..."
              className="flex-1 px-3.5 py-2 text-xs bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg text-[#172A46] focus:outline-none focus:border-[#4969E8] focus:bg-white"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2 bg-[#172A46] hover:bg-[#4969E8] text-white rounded-lg transition-colors disabled:opacity-40"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
