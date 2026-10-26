import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  Award,
  Video,
  FileText,
  Compass,
  CheckCircle2,
  ExternalLink,
  Target,
  Sparkles,
  Download,
} from 'lucide-react';
import {
  personalProfile,
  assignmentsSB5111,
  courseOverviewSB5111,
  recommendedVideosData,
  blogPostsData,
} from '@/lib/portfolio-data';
import { PrepVideoModal } from '@/components/PrepVideoModal';
import heroPortraitImage from '@/src/assets/images/regenerated_image_1793020086810.jpg';

export default function HomePage() {
  const { umbrellaMessage, pillars } = personalProfile;

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* Hero Section */}
      <section className="pt-8 md:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Executive Identity & Umbrella Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4969E8] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#4969E8]" />
              <span>{personalProfile.programme} · {personalProfile.batch}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172A46] tracking-tight leading-tight">
                {personalProfile.fullName}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-slate-600">
                Semester 1 MBA Portfolio · Course: {personalProfile.courseCode} {personalProfile.courseName}
              </p>
            </div>

            {/* The Umbrella Message (Message House - exactly 13 words; <= 15 words) */}
            <div className="p-6 bg-white border border-[#E4E0D6] rounded-xl shadow-xs relative">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                <span>The Message House · Umbrella Message</span>
                <span className="text-[#4969E8] font-mono">13 / 15 words</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-semibold text-[#172A46] leading-snug">
                &ldquo;{umbrellaMessage}&rdquo;
              </blockquote>
              <p className="text-xs text-slate-500 mt-2">
                An executive stance uniting quantitative managerial analysis with empathetic, high-trust stakeholder communication.
              </p>
            </div>

            {/* Concise Introduction */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
              Welcome to my official MBA portfolio and digital communication journey. Built for
              recruiters evaluating my professional profile, faculty assessing Assignment 3 in
              SB5111, and peers collaborating on strategic coursework. This platform documents my
              academic growth, leadership case studies, and classroom experiential learnings
              across all four semesters.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/business-communication"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#172A46] hover:bg-[#4969E8] rounded-md transition-colors shadow-sm"
              >
                <span>Explore SB5111 Coursework</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#172A46] bg-white border border-[#E4E0D6] hover:bg-[#F1EFEA] rounded-md transition-colors"
              >
                <span>About Me (Profile)</span>
              </Link>
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-600 hover:text-[#172A46] transition-colors"
              >
                <span>4-Semester Curriculum</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Professional Portrait & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-lg border border-[#E4E0D6] bg-white">
                <Image
                  src={heroPortraitImage}
                  alt="VISHAL K K SAGAR - MBA Candidate"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172A46]/85 via-transparent to-transparent" />
                
                {/* Overlay Caption */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                  <div className="text-lg font-bold">{personalProfile.fullName}</div>
                  <p className="text-xs text-slate-200">
                    Candidate for Master of Business Administration
                  </p>
                  <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-300">
                    <span>Batch 2026–2028</span>
                    <span aria-hidden="true">·</span>
                    <span>Executive Presence &amp; Strategy</span>
                  </div>
                </div>
              </div>

              {/* Verified Rubric Tag */}
              <div className="mt-4 p-4 bg-white border border-[#E4E0D6] rounded-xl shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#172A46] block">
                      Assignment 3 Compliant
                    </span>
                    <span className="text-[11px] text-slate-500">
                      GCR Public Link Verified · 7 Cs Standard
                    </span>
                  </div>
                </div>
                <Link
                  href="/assets/aistudio/Assignment3_Build_Your_Own_Website.docx_2897e707.pdf"
                  target="_blank"
                  className="text-xs font-semibold text-[#4969E8] hover:underline flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Brief</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Supporting Pillars (Message House Architecture) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-t border-[#E4E0D6] pt-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
              The Message House · Foundational Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
              Three Pillars of Professional Ethos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every message in this portfolio is substantiated by three complementary pillars of
              competency, linking classroom theory directly to managerial capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E4E0D6] rounded-xl p-6 shadow-xs hover:border-[#4969E8]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>PILLAR 0{idx + 1}</span>
                    <Target className="w-4 h-4 text-[#4969E8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#172A46] leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#4969E8]">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4E0D6]/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Reinforces Umbrella Thesis</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 60-Second Video Introduction (PREP Format) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <PrepVideoModal />
      </section>

      {/* Coursework & Assignment Highlights (SB5111 Focus) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#172A46] text-white rounded-2xl p-8 sm:p-10 md:p-12 shadow-md">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Core Evaluation Pillar · 30% Weight</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Business Communication (SB5111) Portfolio
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                A rigorous exploration of executive presence, rhetorical persuasion, and audience-centred
                strategy. Featuring all three submitted assignments, experiential activities, and authentic learnings.
              </p>
            </div>

            <Link
              href="/business-communication"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4969E8] hover:bg-[#3753cf] text-white text-xs font-semibold rounded-md transition-colors shrink-0 shadow-sm"
            >
              <span>View Comprehensive Course Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Assignments Preview Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {assignmentsSB5111.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-blue-300">
                    <span className="font-semibold">{item.number}</span>
                    <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 text-xs">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                    Key Reflection Note:
                  </span>
                  <p className="text-xs text-slate-200 italic line-clamp-2">
                    &ldquo;{item.learningNote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Talks & Reflections Preview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
              Curated Leadership Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
              Recommended Talks &amp; Personal Takeaways
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Five foundational speeches on trust, vocal presence, statistical storytelling, and authentic purpose, verified against original public sources.
            </p>
          </div>

          <Link
            href="/videos"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4969E8] hover:text-[#3753cf] hover:underline"
          >
            <span>View All 5 Talks &amp; Notes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedVideosData.slice(0, 3).map((video) => (
            <div
              key={video.id}
              className="bg-white border border-[#E4E0D6] rounded-xl overflow-hidden shadow-xs hover:border-[#4969E8]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video bg-slate-100">
                  <Image
                    src={video.imageUrl}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/75 text-white text-[10px] font-mono rounded">
                    {video.duration}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-xs text-slate-500 font-medium">
                    {video.speaker} · {video.event}
                  </div>
                  <h3 className="text-base font-bold text-[#172A46] leading-snug">
                    {video.title}
                  </h3>
                  <div className="pt-2 text-xs text-slate-700 italic border-t border-[#E4E0D6]/60">
                    <span className="font-semibold text-[#172A46] not-italic block mb-0.5">
                      My Takeaway:
                    </span>
                    &ldquo;{video.oneLineTakeaway}&rdquo;
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4969E8] hover:underline"
                >
                  <span>Watch on Official Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reflective Write-Ups Preview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-t border-[#E4E0D6] pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
                Reflective Thinking
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172A46] mt-1 tracking-tight">
                My Blog &amp; Classroom Write-Ups
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Candid essays analyzing extempore anxiety during JAM, the anatomy of conflict apologies, and lessons from Steve Jobs.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4969E8] hover:text-[#3753cf] hover:underline"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPostsData.slice(0, 2).map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#E4E0D6] rounded-xl p-6 shadow-xs hover:border-[#4969E8]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-[#4969E8]">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#172A46] leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#4969E8] transition-colors">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4E0D6]/60 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4969E8] hover:underline"
                  >
                    <span>Read Full Reflection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter / Faculty Navigation Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#F1EFEA] border border-[#E4E0D6] rounded-2xl p-8 sm:p-10">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold text-[#4969E8] tracking-wider uppercase">
              Audience-Centred Navigation
            </span>
            <h2 className="text-2xl font-extrabold text-[#172A46]">
              Explore by Stakeholder Purpose
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Applying Barrett’s first question: &ldquo;Who are they and what do they need?&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/about"
              className="bg-white p-5 rounded-xl border border-[#E4E0D6] hover:border-[#4969E8] transition-all shadow-xs group"
            >
              <span className="text-xs font-bold text-[#4969E8] uppercase tracking-wide block mb-1">
                For Recruiters
              </span>
              <h3 className="text-base font-bold text-[#172A46] group-hover:text-[#4969E8] transition-colors">
                Candidate Profile
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                150–250 word profile, competencies, and strategic consulting goals.
              </p>
            </Link>

            <Link
              href="/business-communication"
              className="bg-white p-5 rounded-xl border border-[#E4E0D6] hover:border-[#4969E8] transition-all shadow-xs group"
            >
              <span className="text-xs font-bold text-[#4969E8] uppercase tracking-wide block mb-1">
                For Faculty
              </span>
              <h3 className="text-base font-bold text-[#172A46] group-hover:text-[#4969E8] transition-colors">
                SB5111 Coursework
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                All 5 modules, submitted assignments, power words, and activity logs.
              </p>
            </Link>

            <Link
              href="/journey"
              className="bg-white p-5 rounded-xl border border-[#E4E0D6] hover:border-[#4969E8] transition-all shadow-xs group"
            >
              <span className="text-xs font-bold text-[#4969E8] uppercase tracking-wide block mb-1">
                For Classmates
              </span>
              <h3 className="text-base font-bold text-[#172A46] group-hover:text-[#4969E8] transition-colors">
                MBA Curriculum
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                4-semester roadmap with active Semester 1 and future electives.
              </p>
            </Link>

            <Link
              href="/gallery"
              className="bg-white p-5 rounded-xl border border-[#E4E0D6] hover:border-[#4969E8] transition-all shadow-xs group"
            >
              <span className="text-xs font-bold text-[#4969E8] uppercase tracking-wide block mb-1">
                For Family &amp; Peers
              </span>
              <h3 className="text-base font-bold text-[#172A46] group-hover:text-[#4969E8] transition-colors">
                Campus Gallery
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Visual timeline of classroom debates, campus life, and peer collaborations.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
