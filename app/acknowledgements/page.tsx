import React from 'react';
import Link from 'next/link';
import { Heart, BookOpen, ArrowRight, Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { acknowledgementData, personalProfile } from '@/lib/portfolio-data';

export const metadata = {
  title: 'Acknowledgements · VISHAL K K SAGAR MBA Portfolio',
  description: 'Sincere note of gratitude to the Professor of Business Communication for guiding the creation of this MBA portfolio.',
};

export default function AcknowledgementsPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-[#E4E0D6] pb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
          <Heart className="w-4 h-4 text-[#4969E8]" />
          <span>Professional Courtesy · Page 8</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A46] tracking-tight">
          Acknowledgements
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          A sincere expression of appreciation to the faculty whose mentorship initiated this digital journey.
        </p>
      </div>

      {/* Main Acknowledgement Card */}
      <div className="bg-white border border-[#E4E0D6] rounded-2xl p-8 sm:p-12 shadow-sm space-y-8 relative overflow-hidden">
        {/* Subtle decorative background water-mark */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#4969E8]/5 pointer-events-none" />

        <div className="flex items-center gap-3 text-xs font-semibold text-[#4969E8]">
          <GraduationCap className="w-5 h-5 text-[#4969E8]" />
          <span className="uppercase tracking-wider">
            To the {acknowledgementData.professorTitle} · Course: {acknowledgementData.courseCode}
          </span>
        </div>

        {/* Sincere 2-3 sentence note */}
        <blockquote className="text-lg sm:text-xl md:text-2xl font-serif text-[#172A46] leading-relaxed italic border-l-2 border-[#4969E8] pl-6 py-2">
          &ldquo;{acknowledgementData.note}&rdquo;
        </blockquote>

        <div className="border-t border-[#E4E0D6] pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div>
            <span className="font-bold text-[#172A46] block text-sm">
              {personalProfile.fullName}
            </span>
            <span className="text-slate-500">
              {personalProfile.programme} · {personalProfile.batch} · Semester 1
            </span>
          </div>

          <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-md border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="font-medium">Assignment 3 Compliant</span>
          </div>
        </div>
      </div>

      {/* Coursework Impact Context */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 bg-white border border-[#E4E0D6] rounded-xl space-y-2">
          <span className="text-xs font-bold text-[#4969E8] uppercase tracking-wider block">
            Pedagogical Intent
          </span>
          <h3 className="text-base font-bold text-[#172A46]">
            Online Ethos &amp; Executive Gravitas
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            As taught in Module 1, a leader’s online presence is their first introduction to recruiters and the public.
            Building this website instilled the discipline of thinking like an editor of one’s own credentials.
          </p>
        </div>

        <div className="p-6 bg-white border border-[#E4E0D6] rounded-xl space-y-2">
          <span className="text-xs font-bold text-[#4969E8] uppercase tracking-wider block">
            Four-Year Continuity
          </span>
          <h3 className="text-base font-bold text-[#172A46]">
            A Website That Grows Across MBA Semesters
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            This repository is deliberately designed to evolve: future internship deliverables, capstone research,
            and leadership milestones will be integrated into this foundation throughout 2026–2028.
          </p>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="pt-4 flex items-center justify-between border-t border-[#E4E0D6]">
        <Link
          href="/business-communication"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4969E8] hover:underline"
        >
          <span>Explore Business Communication Coursework</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#172A46]"
        >
          <span>Contact Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
