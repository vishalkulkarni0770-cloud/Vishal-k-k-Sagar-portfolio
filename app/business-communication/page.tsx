import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Award,
  CheckCircle2,
  FileText,
  Download,
  ExternalLink,
  Users,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Shield,
  Layers,
  HelpCircle,
} from 'lucide-react';
import {
  courseOverviewSB5111,
  assignmentsSB5111,
  artefactsData,
  classroomActivitiesData,
  keyLearningsData,
  powerWordsData,
} from '@/lib/portfolio-data';
import { SevenCsTool } from '@/components/SevenCsTool';

export const metadata = {
  title: 'Business Communication (SB5111) · VISHAL K K SAGAR MBA Portfolio',
  description: 'Comprehensive SB5111 coursework portfolio: 5 core modules, all 3 submitted assignments, classroom activities, key learnings, and power words.',
};

export default function BusinessCommunicationPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header Banner */}
      <div className="bg-[#172A46] text-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-md">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider">
              <span className="font-mono bg-white/10 px-2.5 py-0.5 rounded text-white">
                {courseOverviewSB5111.courseCode}
              </span>
              <span>·</span>
              <span>{courseOverviewSB5111.term}</span>
              <span>·</span>
              <span className="text-amber-300 font-semibold">{courseOverviewSB5111.evaluationWeight}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {courseOverviewSB5111.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              The flagship communications portfolio for Semester 1 MBA. Documenting executive presence,
              stakeholder empathy, Aristotle&rsquo;s rhetorical triangle, constructive conflict de-escalation, and
              responsible AI integration.
            </p>
          </div>

          <div className="shrink-0 flex flex-col gap-2">
            <Link
              href="#assignments"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#4969E8] hover:bg-[#3753cf] text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
            >
              <span>Jump to Assignments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/assets/aistudio/Assignment3_Build_Your_Own_Website.docx_2897e707.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-md transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Assignment 3 Brief (PDF)</span>
            </Link>
          </div>
        </div>

        {/* Barrett's 5 Questions Quick Diagnostic */}
        <div className="mt-6 pt-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 block mb-2">
            Barrett’s 5 Foundational Audience Questions:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs text-slate-200">
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-blue-300 font-mono block text-[10px]">Q1</span>
              <span className="font-semibold text-white">Who are they?</span>
              <p className="text-[11px] text-slate-300 mt-0.5">Recruiters, faculty, peers</p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-blue-300 font-mono block text-[10px]">Q2</span>
              <span className="font-semibold text-white">What do they know?</span>
              <p className="text-[11px] text-slate-300 mt-0.5">Evaluate baseline knowledge</p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-blue-300 font-mono block text-[10px]">Q3</span>
              <span className="font-semibold text-white">What do they need?</span>
              <p className="text-[11px] text-slate-300 mt-0.5">Concrete decision inputs</p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-blue-300 font-mono block text-[10px]">Q4</span>
              <span className="font-semibold text-white">How will they react?</span>
              <p className="text-[11px] text-slate-300 mt-0.5">Anticipate resistance &amp; bias</p>
            </div>
            <div className="p-3 bg-white/5 border border-white/10 rounded-lg">
              <span className="text-blue-300 font-mono block text-[10px]">Q5</span>
              <span className="font-semibold text-white">What should they do?</span>
              <p className="text-[11px] text-slate-300 mt-0.5">Decisive next-step action</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION A: Course Overview & Five Modules */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
            Section 4A · Structure
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
            Official Course Objectives &amp; Five Modules
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            As outlined in the course syllabus, SB5111 bridges classical rhetorical strategy with
            modern corporate demands across five progressive learning modules.
          </p>
        </div>

        {/* Objectives Box */}
        <div className="bg-white border border-[#E4E0D6] rounded-xl p-6 sm:p-8 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-[#172A46] uppercase tracking-wider text-xs">
            Official Course Learning Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {courseOverviewSB5111.officialObjectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#4969E8] shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </div>

        {/* The Five Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {courseOverviewSB5111.modules.map((mod) => (
            <div
              key={mod.number}
              className="bg-white border border-[#E4E0D6] rounded-xl p-5 shadow-xs hover:border-[#4969E8]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-[#4969E8]">
                  MODULE 0{mod.number}
                </span>
                <h4 className="text-sm font-bold text-[#172A46] leading-snug">
                  {mod.name}
                </h4>
                <p className="text-xs text-slate-600 pt-1">
                  {mod.focus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E4E0D6] text-[11px] text-slate-500">
                <span className="font-semibold text-[#172A46] block mb-0.5">Deliverable:</span>
                <span>{mod.deliverables}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION B: Assignments Library */}
      <section id="assignments" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-[#E4E0D6] pt-12">
          <div>
            <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
              Section 4B · Assessment Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
              My Submitted Assignments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              All three term submissions with documented learning notes, verifiable deliverables, and assignment briefs.
            </p>
          </div>

          <div className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md font-medium">
            All 3 Assignments Submitted
          </div>
        </div>

        <div className="space-y-6">
          {assignmentsSB5111.map((asgn) => {
            const isAssgn3 = asgn.number === 'Assignment 3';

            return (
              <div
                key={asgn.number}
                className="bg-white border border-[#E4E0D6] rounded-xl p-6 sm:p-8 shadow-xs hover:border-[#4969E8]/40 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold text-[#4969E8] font-mono">{asgn.number}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{asgn.courseCode}</span>
                      <span className="text-slate-400">·</span>
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        {asgn.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#172A46]">
                      {asgn.title}
                    </h3>
                  </div>

                  <div className="shrink-0">
                    {asgn.documentUrl && asgn.documentUrl !== '#' ? (
                      <a
                        href={asgn.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#172A46] hover:bg-[#4969E8] text-white text-xs font-semibold rounded-md transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>View Document ({asgn.documentName})</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F1EFEA] text-[#172A46] text-xs font-medium rounded-md border border-[#E4E0D6]">
                        <FileText className="w-3.5 h-3.5 text-slate-500" />
                        <span>Document Archived on GCR</span>
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {asgn.description}
                </p>

                {/* Learning Note */}
                <div className="bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg p-4 text-xs text-slate-800">
                  <span className="font-bold text-[#172A46] block uppercase tracking-wider text-[10px] mb-1">
                    What I Learned from this Assignment:
                  </span>
                  <p className="italic leading-relaxed text-slate-800">
                    &ldquo;{asgn.learningNote}&rdquo;
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION C: Artefacts & Communication Models */}
      <section className="space-y-8">
        <div className="border-t border-[#E4E0D6] pt-12">
          <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
            Section 4C · Coursework Artefacts
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
            Artefacts, Models &amp; Frameworks
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Strategic deliverables constructed during SB5111, from executive message houses to audience diagnostic grids.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {artefactsData.map((art) => (
            <div
              key={art.id}
              className="bg-white border border-[#E4E0D6] rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-[#4969E8]/40 transition-all"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#4969E8] uppercase tracking-wider">
                  {art.category}
                </span>
                <h3 className="text-base font-bold text-[#172A46] leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {art.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E4E0D6] flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{art.format}</span>
                <span className="text-slate-400 font-mono text-[11px]">Archived</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION D: Classroom Activities & Experiential Learning */}
      <section className="space-y-8">
        <div className="border-t border-[#E4E0D6] pt-12">
          <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
            Section 4D · Experiential Learning
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
            Classroom Activities &amp; Simulations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Hands-on communicative drills in the amphitheatre: JAM, Group Discussion, Debate,
            Press Conference, 60-Second Pitch, Table Topics, and Power Word Relay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classroomActivitiesData.map((act) => (
            <div
              key={act.id}
              className="bg-white border border-[#E4E0D6] rounded-xl overflow-hidden shadow-xs hover:border-[#4969E8]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 bg-slate-100">
                  <Image
                    src={act.imageUrl}
                    alt={act.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#172A46]/90 backdrop-blur-xs text-white text-[10px] font-semibold rounded">
                    {act.dateTag}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-[#172A46]">
                    {act.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {act.description}
                  </p>

                  <div className="p-3 bg-[#F8F7F3] rounded-lg border border-[#E4E0D6] text-xs space-y-1.5">
                    <div>
                      <span className="font-bold text-[#172A46] block text-[10px] uppercase">
                        My Role / Contribution:
                      </span>
                      <p className="text-slate-700">{act.role}</p>
                    </div>

                    <div>
                      <span className="font-bold text-[#172A46] block text-[10px] uppercase">
                        What I Learned:
                      </span>
                      <p className="text-slate-700 italic">&ldquo;{act.learning}&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 text-[11px] text-slate-500 flex items-center justify-between border-t border-[#E4E0D6]/60 mt-2">
                <span>Experiential Log Verified</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive 7 Cs Tool */}
      <section className="space-y-4">
        <SevenCsTool />
      </section>

      {/* SECTION E: Key Learnings by Module */}
      <section className="space-y-8">
        <div className="border-t border-[#E4E0D6] pt-12">
          <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
            Section 4E · Deep Reflections
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
            Key Learnings Across All Five Modules
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Authentic, detailed reflections linking lecture concepts directly to classroom simulations,
            personal growth, and executive leadership practice.
          </p>
        </div>

        <div className="space-y-8">
          {keyLearningsData.map((mod) => (
            <div
              key={mod.moduleNumber}
              className="bg-white border border-[#E4E0D6] rounded-xl p-6 sm:p-8 shadow-xs space-y-6"
            >
              <div className="border-b border-[#E4E0D6] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono font-bold text-[#4969E8]">
                    MODULE 0{mod.moduleNumber} REFLECTION
                  </span>
                  <h3 className="text-xl font-bold text-[#172A46] mt-0.5">
                    {mod.moduleName}
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {mod.points.length} Core Takeaways
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mod.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F8F7F3] border border-[#E4E0D6] rounded-xl space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-[#4969E8] font-mono">
                        LESSON {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-[#172A46] leading-snug">
                        {pt.concept}
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {pt.explanation}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#E4E0D6]">
                      <div className="text-[11px] text-slate-600">
                        <span className="font-bold text-[#172A46] block text-[10px] uppercase">
                          Class / Life Example:
                        </span>
                        <p className="italic">&ldquo;{pt.example}&rdquo;</p>
                      </div>

                      <div className="text-[11px] text-blue-900 bg-blue-50/70 p-2 rounded border border-blue-200/60">
                        <span className="font-bold block text-[10px] uppercase text-[#4969E8]">
                          Leadership Anchor:
                        </span>
                        <p>{pt.leadershipConnection}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION F: Power Words & Sentences */}
      <section className="space-y-8">
        <div className="border-t border-[#E4E0D6] pt-12">
          <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
            Section 4F · Linguistic Precision
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
            My Five Power Words &amp; Sentences
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Selected vocabulary and phrases adopted from class, demonstrated in personal sentences with strategic rationale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {powerWordsData.map((pw, i) => (
            <div
              key={pw.id}
              className="bg-white border border-[#E4E0D6] rounded-xl p-6 shadow-xs flex flex-col justify-between hover:border-[#4969E8]/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>POWER WORD 0{i + 1}</span>
                  <Sparkles className="w-4 h-4 text-[#4969E8]" />
                </div>

                <div className="p-3 bg-[#172A46] text-white rounded-lg">
                  <span className="text-[10px] text-blue-300 block uppercase font-mono mb-1">
                    {pw.context}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {pw.wordOrSentence}
                  </h3>
                </div>

                <div className="space-y-2 pt-2 text-xs">
                  <div>
                    <span className="font-bold text-[#172A46] block text-[10px] uppercase mb-0.5">
                      How I Use It:
                    </span>
                    <p className="text-slate-700 italic bg-[#F8F7F3] p-3 rounded border border-[#E4E0D6] leading-relaxed">
                      &ldquo;{pw.personalSentence}&rdquo;
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-[#172A46] block text-[10px] uppercase mb-0.5">
                      Strategic Executive Value:
                    </span>
                    <p className="text-slate-600 leading-relaxed">
                      {pw.strategicValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
