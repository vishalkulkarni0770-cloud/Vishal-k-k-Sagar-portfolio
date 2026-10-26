'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { semestersData } from '@/lib/portfolio-data';

export default function MBAJourneyPage() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const activeSemester = semestersData.find((s) => s.semesterNumber === activeTab) || semestersData[0];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-[#E4E0D6] pb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
          <Layers className="w-4 h-4" />
          <span>Curriculum Roadmap · Page 3</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A46] tracking-tight">
          My MBA Journey: Semesters 1–4
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Comprehensive four-semester academic syllabus. Semester 1 courses are fully detailed with
          deliverables and reflections, while Semesters 2–4 are structured as an extensible roadmap displaying
          &ldquo;Coming soon&rdquo; as required by the assignment brief.
        </p>
      </div>

      {/* Semester Tab Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-[#F1EFEA] border border-[#E4E0D6] rounded-xl overflow-x-auto no-scrollbar">
        {semestersData.map((sem) => {
          const isActive = activeTab === sem.semesterNumber;
          return (
            <button
              key={sem.semesterNumber}
              type="button"
              onClick={() => setActiveTab(sem.semesterNumber)}
              className={`flex-1 min-w-[160px] py-3 px-4 rounded-lg text-xs font-bold transition-all text-center flex flex-col items-center justify-center gap-0.5 ${
                isActive
                  ? 'bg-white text-[#172A46] shadow-sm border border-[#E4E0D6]'
                  : 'text-slate-600 hover:text-[#172A46] hover:bg-white/50'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span>Semester {sem.semesterNumber}</span>
                {sem.isCurrent && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                )}
              </span>
              <span className="text-[10px] font-normal text-slate-500">
                {sem.isCurrent ? 'Active Now' : 'Coming Soon'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Semester Overview Banner */}
      <div className="bg-white border border-[#E4E0D6] rounded-xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-[#4969E8]" />
            <span>{activeSemester.period}</span>
            <span aria-hidden="true">·</span>
            <span>{activeSemester.courses.length} Prescribed Courses</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#172A46] mt-1">
            {activeSemester.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {activeSemester.isCurrent ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold rounded-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Current In-Progress Term</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold rounded-md">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>Upcoming Semester · Coming Soon</span>
            </span>
          )}
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-6">
        {activeSemester.courses.map((course) => {
          const isBC = course.code === 'SB5111';

          return (
            <div
              key={course.code}
              className={`bg-white border rounded-xl p-6 sm:p-7 shadow-xs transition-all ${
                isBC
                  ? 'border-[#4969E8] ring-1 ring-[#4969E8]/20 hover:shadow-md'
                  : 'border-[#E4E0D6] hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono font-bold text-[#4969E8] bg-[#4969E8]/10 px-2.5 py-0.5 rounded">
                      {course.code}
                    </span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-500 font-medium">{course.credits} Credits</span>
                    {isBC && (
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                        Assignment 3 Focal Course (30%)
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#172A46]">
                    {course.title}
                  </h3>

                  {course.description && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {course.description}
                    </p>
                  )}
                </div>

                <div className="shrink-0">
                  {course.status === 'Coming Soon' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F1EFEA] text-slate-600 border border-[#E4E0D6] text-xs font-medium rounded-md">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Coming soon</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[#4969E8] border border-blue-200 text-xs font-semibold rounded-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4969E8]" />
                      <span>{course.status}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Semester 1 Rich Content (Skills, Artefacts & Reflections) */}
              {activeSemester.isCurrent && (
                <div className="mt-6 pt-5 border-t border-[#E4E0D6] space-y-4">
                  {/* Skills Learned */}
                  {course.skillsLearned && course.skillsLearned.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Skills &amp; Frameworks Mastered:
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700">
                        {course.skillsLearned.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-[#F8F7F3] border border-[#E4E0D6] px-2.5 py-1 rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Course Reflection */}
                  {course.reflection && (
                    <div className="bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg p-4 text-xs text-slate-700 space-y-1">
                      <span className="font-bold text-[#172A46] block uppercase tracking-wider text-[10px]">
                        Personal Learning Reflection:
                      </span>
                      <p className="italic leading-relaxed">
                        &ldquo;{course.reflection}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Link for Business Communication */}
                  {isBC && (
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-slate-500">
                        Comprehensive coursework page with 5 modules, assignments, and activities:
                      </span>
                      <Link
                        href="/business-communication"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4969E8] hover:underline"
                      >
                        <span>Open SB5111 Course Portfolio</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Future Semesters Placeholder State */}
              {!activeSemester.isCurrent && (
                <div className="mt-4 pt-3 border-t border-[#E4E0D6]/60 text-xs text-slate-500 flex items-center justify-between">
                  <span>
                    Curriculum outline verified. Course descriptions, assignments, artefacts, and reflection notes will be uploaded in {activeSemester.period}.
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">Pending Term</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
