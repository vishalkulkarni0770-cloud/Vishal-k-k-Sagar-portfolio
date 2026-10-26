'use client';

import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, Video, FileText, CheckCircle2 } from 'lucide-react';
import { personalProfile } from '@/lib/portfolio-data';

export function PrepVideoModal() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeStep, setActiveStep] = useState<'all' | 'P1' | 'R' | 'E' | 'P2'>('all');
  const [showTranscript, setShowTranscript] = useState(true);

  const { prepVideoIntro } = personalProfile;

  return (
    <div className="bg-white border border-[#E4E0D6] rounded-xl overflow-hidden shadow-sm">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E4E0D6]">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
              <Video className="w-4 h-4" />
              <span>Personal Touch · Coursework Deliverable</span>
            </div>
            <h3 className="text-xl font-bold text-[#172A46] mt-1">
              60-Second Personal Introduction (PREP Format)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Structured extempore framework: Point · Reason · Example · Point (Module 1 Baseline)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#172A46] bg-[#F1EFEA] hover:bg-[#E4E0D6] rounded-md transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{showTranscript ? 'Hide Structure' : 'Show Structure'}</span>
            </button>
          </div>
        </div>

        {/* Video / Visual Simulation Canvas */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Visual Presentation Frame */}
          <div className="lg:col-span-7 bg-[#172A46] rounded-lg overflow-hidden relative aspect-video flex flex-col justify-between p-6 text-white shadow-inner">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                {isPlaying ? 'Delivering 60s Pitch' : 'PREP Executive Introduction'}
              </span>
              <span className="text-[11px] font-mono">00:45 / 01:00</span>
            </div>

            {/* Middle Prompt Display */}
            <div className="my-auto py-4 text-center">
              <div className="inline-block px-2.5 py-1 bg-white/10 rounded text-[11px] font-medium tracking-wide text-blue-200 mb-2">
                {activeStep === 'all' && 'Full PREP Walkthrough'}
                {activeStep === 'P1' && 'Point 1: Core Stance'}
                {activeStep === 'R' && 'Reason: The Justification'}
                {activeStep === 'E' && 'Example: Real Evidence'}
                {activeStep === 'P2' && 'Point 2: Forward Commitment'}
              </div>
              <p className="text-base sm:text-lg font-medium leading-relaxed max-w-lg mx-auto text-slate-100 italic">
                {activeStep === 'all' && `“${prepVideoIntro.point1}”`}
                {activeStep === 'P1' && `“${prepVideoIntro.point1}”`}
                {activeStep === 'R' && `“${prepVideoIntro.reason}”`}
                {activeStep === 'E' && `“${prepVideoIntro.example}”`}
                {activeStep === 'P2' && `“${prepVideoIntro.point2}”`}
              </p>
              <p className="text-xs text-slate-400 mt-2">
                VISHAL K K SAGAR · Semester 1 MBA Candidate
              </p>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#4969E8] hover:bg-[#3753cf] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'Pause' : 'Play Simulation'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveStep('all');
                  }}
                  className="p-1.5 text-slate-300 hover:text-white transition-colors"
                  title="Reset"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Volume2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Executive Pacing (135 wpm)</span>
              </div>
            </div>
          </div>

          {/* Interactive PREP Step Breakdown */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              PREP Rhetorical Architecture
            </div>

            <button
              type="button"
              onClick={() => setActiveStep('P1')}
              className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                activeStep === 'P1'
                  ? 'border-[#4969E8] bg-[#4969E8]/5 shadow-sm'
                  : 'border-[#E4E0D6] bg-white hover:bg-[#F8F7F3]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#172A46]">1. Point (Opening Thesis)</span>
                <span className="text-[10px] text-slate-400 font-mono">10 sec</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                {prepVideoIntro.point1}
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveStep('R')}
              className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                activeStep === 'R'
                  ? 'border-[#4969E8] bg-[#4969E8]/5 shadow-sm'
                  : 'border-[#E4E0D6] bg-white hover:bg-[#F8F7F3]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#172A46]">2. Reason (Why It Matters)</span>
                <span className="text-[10px] text-slate-400 font-mono">15 sec</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                {prepVideoIntro.reason}
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveStep('E')}
              className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                activeStep === 'E'
                  ? 'border-[#4969E8] bg-[#4969E8]/5 shadow-sm'
                  : 'border-[#E4E0D6] bg-white hover:bg-[#F8F7F3]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#172A46]">3. Example (Concrete Proof)</span>
                <span className="text-[10px] text-slate-400 font-mono">25 sec</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                {prepVideoIntro.example}
              </p>
            </button>

            <button
              type="button"
              onClick={() => setActiveStep('P2')}
              className={`w-full text-left p-3.5 rounded-lg border transition-all ${
                activeStep === 'P2'
                  ? 'border-[#4969E8] bg-[#4969E8]/5 shadow-sm'
                  : 'border-[#E4E0D6] bg-white hover:bg-[#F8F7F3]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#172A46]">4. Point (Call to Action)</span>
                <span className="text-[10px] text-slate-400 font-mono">10 sec</span>
              </div>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                {prepVideoIntro.point2}
              </p>
            </button>
          </div>
        </div>

        {/* Pedagogical Note */}
        <div className="mt-6 pt-4 border-t border-[#E4E0D6] flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Strictly adheres to SB5111 Module 1 speaking guidelines: no fillers, intentional cadence, concrete examples.</span>
          </div>
          <span className="font-medium text-[#172A46]">Total: 60 Seconds</span>
        </div>
      </div>
    </div>
  );
}
