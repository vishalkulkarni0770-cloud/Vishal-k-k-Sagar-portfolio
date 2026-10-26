import React from 'react';
import Link from 'next/link';
import { FileText, Calendar, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { blogPostsData } from '@/lib/portfolio-data';

export const metadata = {
  title: 'Blog & Reflective Write-Ups · VISHAL K K SAGAR MBA Portfolio',
  description: 'Reflective business communication essays and classroom write-ups by VISHAL K K SAGAR, Semester 1 MBA candidate.',
};

export default function BlogLandingPage() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-[#E4E0D6] pb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>Reflective Essays · Page 6</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A46] tracking-tight">
          My Blog &amp; Write-Ups
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Reflective perspectives on speech anxiety, rhetorical framing, interpersonal conflict, and the decision
          to pursue an MBA. Structured according to the 7 Cs of clear communication.
        </p>
      </div>

      {/* Articles Feed */}
      <div className="space-y-8">
        {blogPostsData.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-[#E4E0D6] rounded-xl p-6 sm:p-8 shadow-xs hover:border-[#4969E8]/40 hover:shadow-md transition-all space-y-4"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="font-semibold text-[#4969E8]">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>{post.date}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#172A46] leading-snug">
              <Link href={`/blog/${post.slug}`} className="hover:text-[#4969E8] transition-colors">
                {post.title}
              </Link>
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Key takeaways pills */}
            <div className="p-3.5 bg-[#F8F7F3] rounded-lg border border-[#E4E0D6] space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#172A46] block">
                Executive Takeaway Preview:
              </span>
              <p className="text-xs text-slate-600 italic">
                &ldquo;{post.keyTakeaways[0]}&rdquo;
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4969E8] hover:underline"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-xs text-slate-400 font-medium">Authentic Reflection</span>
            </div>
          </article>
        ))}
      </div>

      {/* Extensible Future Writing Note */}
      <div className="p-6 bg-[#F1EFEA] border border-[#E4E0D6] rounded-xl text-xs text-slate-600 flex items-start gap-3">
        <Sparkles className="w-4 h-4 text-[#4969E8] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#172A46] block mb-0.5">
            Semester-by-Semester Growth Platform
          </span>
          Additional reflective essays examining Semester 2 corporate strategy simulations, summer consulting
          case competitions, and international business observations will be documented here.
        </div>
      </div>
    </div>
  );
}
