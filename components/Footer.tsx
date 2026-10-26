import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, ShieldCheck, BookOpen, ExternalLink, ArrowUpRight } from 'lucide-react';
import { personalProfile } from '@/lib/portfolio-data';

export function Footer() {
  return (
    <footer className="bg-[#172A46] text-[#F8F7F3] pt-14 pb-10 border-t border-[#172A46]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Identity & Ethos */}
          <div className="md:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="text-xl font-bold tracking-tight text-white">
                {personalProfile.fullName}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {personalProfile.programme} · {personalProfile.batch}
              </p>
            </div>
            
            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              &ldquo;{personalProfile.umbrellaMessage}&rdquo;
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 pt-2">
              <span className="font-semibold text-white">Message House:</span>
              <span>1 Umbrella Message</span>
              <span aria-hidden="true">·</span>
              <span>3 Supporting Pillars</span>
              <span aria-hidden="true">·</span>
              <span>The 7 Cs Discipline</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${personalProfile.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalProfile.email}</span>
              </a>
              <a
                href={personalProfile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Column 2: Academic Portfolio Pages */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Portfolio Navigation
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home & Message House
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Me (150–250 Words)
                </Link>
              </li>
              <li>
                <Link href="/journey" className="hover:text-white transition-colors">
                  MBA Journey (Semesters 1–4)
                </Link>
              </li>
              <li>
                <Link href="/business-communication" className="text-blue-300 font-semibold hover:text-white transition-colors flex items-center gap-1">
                  <span>Business Communication (SB5111)</span>
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:text-white transition-colors">
                  Recommended Talks & Lectures
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Reflective Blog & Write-ups
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication Principles & Privacy Notice */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Course Compliance & Privacy
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Experiential Learning Gallery
                </Link>
              </li>
              <li>
                <Link href="/acknowledgements" className="hover:text-white transition-colors">
                  Faculty Acknowledgements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Information
                </Link>
              </li>
              <li>
                <Link href="/assets/aistudio/Assignment3_Build_Your_Own_Website.docx_2897e707.pdf" target="_blank" className="hover:text-white transition-colors flex items-center gap-1 text-slate-300">
                  <BookOpen className="w-3 h-3" />
                  <span>Assignment 3 Brief (PDF)</span>
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-start gap-2 text-[11px] text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Safety Protected: In strict accordance with course guidelines, no phone numbers, home addresses, or government identification details are published on this domain.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
          <p>
            © {new Date().getFullYear()} VISHAL K K SAGAR · SB5111 Business Communication · Semester 1 MBA.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Audience-Centred Design</span>
            <span aria-hidden="true">·</span>
            <span>Aristotle &amp; Barrett Frameworks</span>
            <span aria-hidden="true">·</span>
            <span>GCR Submission Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
