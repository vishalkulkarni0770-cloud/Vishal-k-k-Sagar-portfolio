'use client';

import React, { useState } from 'react';
import { Check, Sparkles, AlertCircle, RefreshCw, ArrowRight, BookOpen } from 'lucide-react';

interface Scorecard {
  clear: number;
  concise: number;
  concrete: number;
  correct: number;
  coherent: number;
  complete: number;
  courteous: number;
}

const sampleDrafts = [
  {
    title: 'Unrefined Team Update',
    text: 'Hey everyone, just wanted to touch base regarding the presentation thing we have going on for our group project. We really need to get our act together because the professor said it is due soon and I don’t think our slides are good enough. Please send your parts ASAP so we don’t get a bad grade.',
  },
  {
    title: 'Audience-Centred Executive Memo',
    text: 'Good morning Team Theta, to ensure we submit our SB5111 case analysis ahead of Monday’s 5:00 PM deadline, let us align on the core deliverables. Please review the updated slide deck on our shared drive and input your respective financial data points by 2:00 PM today. Thank you for your continued dedication to this milestone.',
  },
];

export function SevenCsTool() {
  const [inputText, setInputText] = useState(sampleDrafts[0].text);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    scores: Scorecard;
    strengths: string[];
    recommendations: string[];
    summary: string;
    executiveRewrite?: string;
  } | null>(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);

    try {
      const res = await fetch('/api/analyze-7cs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await res.json();
      setAnalysisResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="bg-white border border-[#E4E0D6] rounded-xl overflow-hidden shadow-sm">
      <div className="p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E4E0D6]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Interactive Coursework Diagnostic Tool</span>
            </div>
            <h3 className="text-xl font-bold text-[#172A46] mt-1">
              The 7 Cs Executive Communication Auditor
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Evaluate any corporate email, meeting memo, or pitch against the 7 Cs of Business Communication.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">Try sample:</span>
            {sampleDrafts.map((sample, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setInputText(sample.text);
                  setAnalysisResult(null);
                }}
                className="text-xs px-2.5 py-1 bg-[#F1EFEA] hover:bg-[#E4E0D6] text-[#172A46] font-medium rounded transition-colors"
              >
                {sample.title}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="draftText" className="block text-xs font-semibold text-[#172A46] uppercase tracking-wider mb-1.5">
              Communication Draft (Email, Memo, or Pitch)
            </label>
            <textarea
              id="draftText"
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full p-3.5 text-sm bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg text-[#172A46] focus:bg-white focus:border-[#4969E8] focus:ring-1 focus:ring-[#4969E8] outline-none transition-all leading-relaxed"
              placeholder="Paste or write your business communication text here..."
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Word count: {inputText.trim().split(/\s+/).filter(Boolean).length} words
            </span>

            <button
              type="button"
              onClick={handleAnalyze}
              disabled={isAnalyzing || !inputText.trim()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4969E8] hover:bg-[#3753cf] text-white text-xs font-semibold rounded-md shadow-sm transition-all disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Auditing 7 Cs...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Run 7 Cs Audit</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Analysis Results View */}
        {analysisResult && (
          <div className="mt-8 pt-6 border-t border-[#E4E0D6] space-y-6">
            <div>
              <h4 className="text-sm font-bold text-[#172A46] uppercase tracking-wider">
                Audit Summary &amp; Scores
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                {analysisResult.summary}
              </p>
            </div>

            {/* 7 Cs Score Bars */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {[
                { label: 'Clear', score: analysisResult.scores?.clear || 80, desc: 'Free of ambiguity' },
                { label: 'Concise', score: analysisResult.scores?.concise || 75, desc: 'No filler words' },
                { label: 'Concrete', score: analysisResult.scores?.concrete || 70, desc: 'Specific data' },
                { label: 'Correct', score: analysisResult.scores?.correct || 90, desc: 'Accurate syntax' },
                { label: 'Coherent', score: analysisResult.scores?.coherent || 85, desc: 'Logical flow' },
                { label: 'Complete', score: analysisResult.scores?.complete || 80, desc: 'All info present' },
                { label: 'Courteous', score: analysisResult.scores?.courteous || 85, desc: 'Empathetic tone' },
              ].map((c) => (
                <div key={c.label} className="p-3 bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg text-center">
                  <span className="block text-[11px] font-semibold text-slate-500 uppercase">
                    {c.label}
                  </span>
                  <span className={`text-xl font-bold mt-0.5 block ${c.score >= 80 ? 'text-[#172A46]' : 'text-amber-600'}`}>
                    {c.score}%
                  </span>
                  <div className="w-full bg-[#E4E0D6] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        c.score >= 80 ? 'bg-[#4969E8]' : 'bg-amber-500'
                      }`}
                      style={{ width: `${c.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths & Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50/50 border border-emerald-200 rounded-lg">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-2">
                  Observed Strengths
                </span>
                <ul className="space-y-1.5 text-xs text-emerald-800">
                  {analysisResult.strengths?.map((s, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-lg">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block mb-2">
                  Executive Recommendations
                </span>
                <ul className="space-y-1.5 text-xs text-amber-800">
                  {analysisResult.recommendations?.map((r, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Executive Rewrite */}
            {analysisResult.executiveRewrite && (
              <div className="p-4 bg-[#172A46] text-white rounded-lg">
                <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider block mb-1">
                  Executive 7-Cs Rewrite
                </span>
                <p className="text-sm font-medium leading-relaxed italic text-slate-100">
                  &ldquo;{analysisResult.executiveRewrite}&rdquo;
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
