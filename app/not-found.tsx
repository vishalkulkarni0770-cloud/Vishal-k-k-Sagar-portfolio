import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-4">
      <span className="text-xs font-mono font-bold text-[#4969E8] bg-[#4969E8]/10 px-3 py-1 rounded-full uppercase tracking-wider">
        404 · Page Not Found
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172A46]">
        Requested Page Not Found
      </h1>
      <p className="text-sm text-slate-600 max-w-md">
        The portfolio page or resource you are looking for has been moved or does not exist.
      </p>
      <div className="pt-4 flex items-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#172A46] hover:bg-[#4969E8] text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
