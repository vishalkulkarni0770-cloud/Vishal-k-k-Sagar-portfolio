import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Video,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Clock,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { recommendedVideosData } from '@/lib/portfolio-data';

export const metadata = {
  title: 'Recommended Talks & Lectures · VISHAL K K SAGAR MBA Portfolio',
  description: 'Five verified executive talks on leadership communication, trust, vocal mechanics, and statistical storytelling with personal reflections.',
};

export default function RecommendedVideosPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-[#E4E0D6] pb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
          <Video className="w-4 h-4" />
          <span>Curated Executive Talks · Page 5</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A46] tracking-tight">
          Recommended Talks &amp; Lectures
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Five seminal addresses recommended in the SB5111 syllabus. Each link has been verified against
          its official public source, accompanied by a personalized one-line takeaway and strategic reflection.
        </p>
      </div>

      {/* Compliance Indicator */}
      <div className="bg-white border border-[#E4E0D6] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="text-slate-700">
            Source Integrity: Direct links to official TED and Stanford University archives. No copyrighted re-uploads.
          </span>
        </div>
        <span className="font-semibold text-emerald-700">
          5 of 5 Verified
        </span>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendedVideosData.map((talk, idx) => (
          <div
            key={talk.id}
            className="bg-white border border-[#E4E0D6] rounded-xl overflow-hidden shadow-xs hover:border-[#4969E8]/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Media Preview Frame */}
              <div className="relative aspect-video bg-slate-100 overflow-hidden group">
                <Image
                  src={talk.imageUrl}
                  alt={talk.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#172A46]/90 backdrop-blur-xs text-white text-[10px] font-mono rounded">
                  TALK 0{idx + 1}
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/75 text-white text-[10px] font-mono rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{talk.duration}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs text-slate-500 font-medium">
                    {talk.speaker} · {talk.event}
                  </div>
                  <h2 className="text-lg font-bold text-[#172A46] mt-0.5 leading-snug">
                    {talk.title}
                  </h2>
                </div>

                {/* One-Line Takeaway in Own Words */}
                <div className="p-3.5 bg-[#F8F7F3] rounded-lg border border-[#E4E0D6] text-xs">
                  <span className="font-bold text-[#172A46] block text-[10px] uppercase mb-1">
                    My One-Line Takeaway:
                  </span>
                  <p className="text-slate-800 italic leading-relaxed">
                    &ldquo;{talk.oneLineTakeaway}&rdquo;
                  </p>
                </div>

                {/* Extended Reflection */}
                <div className="text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-slate-700 block text-[10px] uppercase">
                    Strategic Context:
                  </span>
                  <p className="leading-relaxed">
                    {talk.extendedReflection}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-6 pt-0">
              <a
                href={talk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#172A46] hover:bg-[#4969E8] text-white text-xs font-semibold rounded-md transition-colors shadow-2xs"
              >
                <span>Watch on Official Source</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Suggested Watcher Corner Note */}
      <div className="p-6 bg-[#F1EFEA] border border-[#E4E0D6] rounded-xl text-xs text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="font-bold text-[#172A46] block text-sm">
            Continuous Media Exploration
          </span>
          <p className="max-w-2xl">
            These five foundational talks serve as the bedrock of my leadership and rhetoric understanding.
            Future guest lectures and corporate leadership addresses will be incorporated into this repository throughout Semesters 2–4.
          </p>
        </div>
        <Link
          href="/business-communication"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4969E8] hover:underline shrink-0"
        >
          <span>Back to Coursework</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
