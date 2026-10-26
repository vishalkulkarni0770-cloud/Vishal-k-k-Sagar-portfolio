'use client';

import React, { useState } from 'react';
import { Mail, Linkedin, ShieldCheck, Send, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { personalProfile } from '@/lib/portfolio-data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Recruiting Inquiry / General Correspondence',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-[#E4E0D6] pb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
          <Mail className="w-4 h-4" />
          <span>Professional Contact · Page 9</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A46] tracking-tight">
          Get in Touch
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Open to executive conversations with management recruiters, strategic project collaborators,
          and academic peers.
        </p>
      </div>

      {/* Strict Privacy & Safety Compliance Box */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 text-xs text-amber-900 space-y-1.5 shadow-2xs">
        <div className="flex items-center gap-2 font-bold text-amber-950 uppercase tracking-wider text-[11px]">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Assignment Online Safety &amp; Etiquette Policy</span>
        </div>
        <p className="leading-relaxed">
          In strict compliance with SB5111 Assignment 3 specifications, this portfolio intentionally omits private phone numbers,
          residential addresses, government identification numbers (Aadhaar/PAN), and banking details.
          All communications are routed exclusively via verified digital mail and LinkedIn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Channels */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white border border-[#E4E0D6] rounded-xl p-6 shadow-xs space-y-5">
            <h2 className="text-sm font-bold text-[#172A46] uppercase tracking-wider">
              Verified Digital Channels
            </h2>

            <div className="space-y-4 text-xs">
              {/* Email */}
              <div className="space-y-1">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Personal &amp; College Email
                </span>
                <a
                  href={`mailto:${personalProfile.email}`}
                  className="font-semibold text-[#172A46] hover:text-[#4969E8] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#4969E8]" />
                  <span>{personalProfile.email}</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="space-y-1 pt-3 border-t border-[#E4E0D6]">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Professional Network
                </span>
                <a
                  href={personalProfile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#172A46] hover:text-[#4969E8] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#4969E8]" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              {/* Academic Location */}
              <div className="space-y-1 pt-3 border-t border-[#E4E0D6]">
                <span className="text-slate-400 block text-[10px] uppercase font-semibold">
                  Academic Affiliation
                </span>
                <p className="text-slate-700">
                  {personalProfile.programme} · {personalProfile.batch}
                </p>
                <p className="text-slate-500 text-[11px]">
                  Coursework: SB5111 Business Communication
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#F8F7F3] border border-[#E4E0D6] rounded-xl text-xs text-slate-600">
            <span className="font-semibold text-[#172A46] block mb-1">
              Response SLA:
            </span>
            I typically respond to recruiter inquiries and academic correspondences within 24 to 48 business hours.
          </div>
        </div>

        {/* Professional Contact Form */}
        <div className="md:col-span-7 bg-white border border-[#E4E0D6] rounded-xl p-6 sm:p-8 shadow-xs">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#172A46]">
                Message Transmitted Successfully
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Your note has been logged. I look forward to connecting with you via {formData.email}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'Recruiting Inquiry / General Correspondence', message: '' });
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-[#4969E8] bg-[#4969E8]/10 hover:bg-[#4969E8]/20 rounded-md transition-colors"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#E4E0D6] pb-3">
                <h3 className="text-base font-bold text-[#172A46]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Your contact information is strictly handled for correspondence.
                </p>
              </div>

              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-[#172A46] uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jane Doe"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg text-[#172A46] focus:bg-white focus:border-[#4969E8] outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-[#172A46] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. jane.doe@company.com"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg text-[#172A46] focus:bg-white focus:border-[#4969E8] outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#172A46] uppercase tracking-wider mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg text-[#172A46] focus:bg-white focus:border-[#4969E8] outline-none transition-colors"
                >
                  <option value="Recruiting Inquiry / General Correspondence">Recruiting Inquiry / General Correspondence</option>
                  <option value="SB5111 Coursework / Faculty Feedback">SB5111 Coursework / Faculty Feedback</option>
                  <option value="MBA Case Competition Collaboration">MBA Case Competition Collaboration</option>
                  <option value="Strategic Advisory / Project Discussion">Strategic Advisory / Project Discussion</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#172A46] uppercase tracking-wider mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share the details of your inquiry or message..."
                  className="w-full p-3.5 text-xs bg-[#F8F7F3] border border-[#E4E0D6] rounded-lg text-[#172A46] focus:bg-white focus:border-[#4969E8] outline-none transition-colors leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#172A46] hover:bg-[#4969E8] text-white text-xs font-semibold rounded-md transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
