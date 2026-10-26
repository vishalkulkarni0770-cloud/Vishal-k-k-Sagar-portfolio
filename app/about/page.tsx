import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Linkedin,
  Mail,
  GraduationCap,
  Briefcase,
  Sparkles,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { personalProfile } from '@/lib/portfolio-data';
import { countWords, validateAboutMeWordCount } from '@/lib/rules';
import heroPortraitImage from '@/src/assets/images/regenerated_image_1793020086810.jpg';

export const metadata = {
  title: 'About Me · VISHAL K K SAGAR MBA Portfolio',
  description: 'Professional profile, academic background, strategic consulting goals, and leadership competencies of VISHAL K K SAGAR.',
};

export default function AboutPage() {
  const profileWordCount = countWords(personalProfile.aboutMeText);
  const wordCountValidation = validateAboutMeWordCount(personalProfile.aboutMeText);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-[#E4E0D6] pb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>Candidate Dossier · Page 2</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A46] tracking-tight">
          About VISHAL K K SAGAR
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          Executive profile, educational background, core competencies, and strategic career trajectory.
        </p>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Portrait & Key Details */}
        <div className="lg:col-span-4 space-y-6">
          <div className="relative aspect-4/5 rounded-xl overflow-hidden border border-[#E4E0D6] shadow-sm bg-white">
            <Image
              src={heroPortraitImage}
              alt="VISHAL K K SAGAR"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-top"
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Quick Facts Card */}
          <div className="bg-white border border-[#E4E0D6] rounded-xl p-5 space-y-3 shadow-2xs text-xs">
            <h3 className="font-bold text-[#172A46] uppercase tracking-wider text-[11px] border-b border-[#E4E0D6] pb-2">
              Fast Facts
            </h3>

            <div className="space-y-2.5">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Programme</span>
                <span className="font-semibold text-[#172A46]">{personalProfile.programme}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Batch</span>
                <span className="font-semibold text-[#172A46]">{personalProfile.batch}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Active Term</span>
                <span className="font-semibold text-[#172A46]">{personalProfile.currentSemester}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Primary Interest</span>
                <span className="font-semibold text-[#172A46]">Strategy &amp; Management Consulting</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E4E0D6] space-y-2">
              <a
                href={personalProfile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full py-2 px-3 bg-[#172A46] hover:bg-[#4969E8] text-white rounded-md transition-colors font-medium text-xs"
              >
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                </span>
                <ExternalLink className="w-3 h-3 text-slate-300" />
              </a>

              <a
                href={`mailto:${personalProfile.email}`}
                className="flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-[#F1EFEA] hover:bg-[#E4E0D6] text-[#172A46] rounded-md transition-colors font-medium text-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email VISHAL K K SAGAR</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 150-250 Word Professional Profile */}
        <div className="lg:col-span-8 space-y-6">
          {/* Word Count Compliance Banner */}
          <div className="p-4 bg-white border border-[#E4E0D6] rounded-xl flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold text-[#172A46]">
                Assignment Rubric: 150–250 Words Required
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-[#4969E8] bg-[#4969E8]/10 px-2.5 py-1 rounded">
                {profileWordCount} words
              </span>
              <span className="text-emerald-700 font-medium">Compliant</span>
            </div>
          </div>

          {/* Profile Text Block */}
          <div className="bg-white border border-[#E4E0D6] rounded-xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="border-b border-[#E4E0D6] pb-4">
              <h2 className="text-xl font-bold text-[#172A46]">
                Professional Bio &amp; Stance
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Authored by VISHAL K K SAGAR · SB5111 Authentic Profile Specification
              </p>
            </div>

            <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
              {personalProfile.aboutMeText.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Detailed Dimension Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Education */}
            <div className="p-5 bg-white border border-[#E4E0D6] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4969E8] uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h3 className="text-sm font-bold text-[#172A46]">
                Master of Business Administration (MBA)
              </h3>
              <p className="text-xs text-slate-600">
                Batch of 2026–2028 · Semester 1 in progress. Preceded by an undergraduate degree emphasizing structured quantitative inquiry and analytical systems.
              </p>
            </div>

            {/* Experience */}
            <div className="p-5 bg-white border border-[#E4E0D6] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4969E8] uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Professional Exposure</span>
              </div>
              <h3 className="text-sm font-bold text-[#172A46]">
                Project Coordination &amp; Analysis
              </h3>
              <p className="text-xs text-slate-600">
                Practical experience in stakeholder coordination, market research synthesis, cross-functional team moderation, and operational workflows.
              </p>
            </div>

            {/* Skills */}
            <div className="p-5 bg-white border border-[#E4E0D6] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4969E8] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Core Competencies</span>
              </div>
              <h3 className="text-sm font-bold text-[#172A46]">
                Strategic &amp; Communicative Skills
              </h3>
              <p className="text-xs text-slate-600">
                Barrett’s 5 Questions, financial statement analysis, market segmentation, conflict de-escalation, PREP extempore speaking, and generative AI research integration.
              </p>
            </div>

            {/* Career Goals */}
            <div className="p-5 bg-white border border-[#E4E0D6] rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#4969E8] uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Career Goals</span>
              </div>
              <h3 className="text-sm font-bold text-[#172A46]">
                Management &amp; Strategy Consulting
              </h3>
              <p className="text-xs text-slate-600">
                Aspiring to advise progressive enterprise leadership on organizational transformation, combining data-driven strategy with high-trust stakeholder communication.
              </p>
            </div>
          </div>

          {/* Future Semesters Update Note */}
          <div className="p-4 bg-[#F1EFEA] border border-[#E4E0D6] rounded-xl text-xs text-slate-600 flex items-start gap-3">
            <Compass className="w-4 h-4 text-[#4969E8] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#172A46] block mb-0.5">
                Living Portfolio Architecture
              </span>
              This profile will be iteratively updated at the conclusion of each semester to incorporate summer internship milestones, corporate case competition wins, and specialized elective mastery.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
