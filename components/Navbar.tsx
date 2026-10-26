'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';
import { personalProfile } from '@/lib/portfolio-data';

interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Me', href: '/about' },
  { label: 'MBA Journey', href: '/journey' },
  { label: 'Business Comm (SB5111)', href: '/business-communication', badge: '30%' },
  { label: 'Talks & Lectures', href: '/videos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Acknowledgements', href: '/acknowledgements' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#E4E0D6] transition-all">
      {/* Top Academic & Assignment Banner */}
      <div className="bg-[#172A46] text-[#F8F7F3] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold tracking-wide">SB5111 Business Communication</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span className="text-slate-200">Assignment 3 Digital Portfolio</span>
            <span aria-hidden="true" className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline text-slate-300">Submission: VishalKKSagar_Assignment3</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-slate-300">
            <span>Deadline: Mon, 26 Oct 2026</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-300 font-medium">Public Submission Verified</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex flex-col focus:outline-none"
          aria-label="VISHAL K K SAGAR - MBA Portfolio Home"
        >
          <span className="text-xl font-bold tracking-tight text-[#172A46] group-hover:text-[#4969E8] transition-colors">
            {personalProfile.fullName}
          </span>
          <span className="text-xs text-[#172A46]/70 font-medium tracking-normal">
            MBA · Batch of 2026–2028 · Semester 1
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive
                    ? 'text-[#4969E8] font-semibold bg-[#4969E8]/8'
                    : 'text-[#172A46]/85 hover:text-[#172A46] hover:bg-[#E4E0D6]/40'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1 text-[10px] font-semibold text-[#4969E8] uppercase tracking-wider">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#4969E8] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Quick Assignment CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/business-communication#assignments"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#172A46] hover:bg-[#4969E8] rounded-md transition-colors shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Assignments</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-[#172A46] hover:text-[#4969E8] rounded-md hover:bg-[#E4E0D6]/50 focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#E4E0D6] bg-[#F8F7F3] px-4 pt-3 pb-6 shadow-lg">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium ${
                    isActive
                      ? 'bg-[#4969E8]/10 text-[#4969E8] font-semibold'
                      : 'text-[#172A46] hover:bg-[#E4E0D6]/40'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[11px] font-semibold text-[#4969E8]">
                      {item.badge} Weight
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 pt-3 border-t border-[#E4E0D6] flex flex-col gap-2">
            <Link
              href="/business-communication"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#172A46] text-white text-xs font-semibold rounded-md"
            >
              <span>Explore SB5111 Coursework</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
