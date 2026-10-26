'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X, Maximize2, ShieldCheck, Calendar, Filter } from 'lucide-react';
import { galleryData, GalleryItem } from '@/lib/portfolio-data';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Classroom' | 'Campus' | 'Teamwork' | 'Artefacts'>('All');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Classroom', 'Campus', 'Teamwork', 'Artefacts'] as const;

  const filteredItems = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="border-b border-[#E4E0D6] pb-8 space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4969E8] uppercase tracking-wider">
          <Camera className="w-4 h-4" />
          <span>Experiential Visuals · Page 7</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A46] tracking-tight">
          Classroom &amp; Campus Gallery
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Documentary record of classroom speaking exercises, case study presentations, campus life,
          and teamwork sessions throughout Semester 1 MBA.
        </p>
      </div>

      {/* Privacy & Copyright Protocol Banner */}
      <div className="bg-white border border-[#E4E0D6] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-2xs">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="text-slate-700">
            Ethics &amp; Privacy: All photographs respect classmate privacy and institutional media guidelines.
          </span>
        </div>
        <span className="font-semibold text-slate-600">
          Curated Archive
        </span>
      </div>

      {/* Category Filter Controls */}
      <div className="flex items-center gap-1.5 p-1 bg-[#F1EFEA] border border-[#E4E0D6] rounded-lg max-w-fit overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
              selectedCategory === cat
                ? 'bg-white text-[#172A46] font-semibold shadow-xs'
                : 'text-slate-600 hover:text-[#172A46]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white border border-[#E4E0D6] rounded-xl overflow-hidden shadow-xs hover:border-[#4969E8]/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div
                className="relative aspect-4/3 bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-2 bg-white/90 text-[#172A46] rounded-full shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#172A46]/90 backdrop-blur-xs text-white text-[10px] font-medium rounded">
                  {item.category}
                </div>
              </div>

              {/* Caption & Context */}
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>{item.context}</span>
                  <span>{item.date}</span>
                </div>
                <h3 className="text-base font-bold text-[#172A46] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                type="button"
                onClick={() => setActiveModalItem(item)}
                className="text-xs font-semibold text-[#4969E8] hover:underline inline-flex items-center gap-1"
              >
                <span>Enlarge Photo</span>
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Enlargement Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-black">
              <Image
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
                aria-label="Close Enlarged View"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-[#4969E8]">{activeModalItem.category}</span>
                <span>·</span>
                <span>{activeModalItem.context}</span>
                <span>·</span>
                <span>{activeModalItem.date}</span>
              </div>
              <h3 className="text-lg font-bold text-[#172A46]">
                {activeModalItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeModalItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
