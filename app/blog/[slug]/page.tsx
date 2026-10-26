import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, BookOpen, CheckCircle2, Share2, Linkedin } from 'lucide-react';
import { blogPostsData, personalProfile } from '@/lib/portfolio-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Back Link */}
      <div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4969E8] hover:text-[#3753cf] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Write-Ups</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="border-b border-[#E4E0D6] pb-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-semibold text-[#4969E8] uppercase tracking-wider">
            {post.category}
          </span>
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

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#172A46] tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed italic">
          {post.excerpt}
        </p>

        <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-[#E4E0D6]/60">
          <span>By {personalProfile.fullName} · Semester 1 MBA</span>
          <span>Course: SB5111 Business Communication</span>
        </div>
      </header>

      {/* Key Takeaways Callout */}
      <div className="p-6 bg-[#F8F7F3] border border-[#E4E0D6] rounded-xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#172A46] uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-[#4969E8]" />
          <span>Core Takeaways for Future Leaders</span>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
          {post.keyTakeaways.map((t, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="font-mono font-bold text-[#4969E8] text-xs mt-0.5">0{i + 1}.</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Article Body */}
      <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
        {post.body.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Author Footer Card */}
      <div className="border-t border-[#E4E0D6] pt-8 mt-12 bg-white p-6 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-sm font-bold text-[#172A46] block">
            {personalProfile.fullName}
          </span>
          <p className="text-xs text-slate-500">
            {personalProfile.programme} · {personalProfile.batch} · SB5111
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#172A46] hover:bg-[#4969E8] text-white text-xs font-semibold rounded-md transition-colors"
          >
            <span>Contact Author</span>
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F1EFEA] hover:bg-[#E4E0D6] text-[#172A46] text-xs font-semibold rounded-md transition-colors"
          >
            <span>All Articles</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
