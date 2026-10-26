'use client';

import React from 'react';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
      <h2 className="text-xl font-bold text-[#172A46]">Something went wrong</h2>
      <p className="text-xs text-slate-500">A client-side error occurred while rendering this page.</p>
      <button
        type="button"
        onClick={() => reset()}
        className="px-4 py-2 bg-[#172A46] hover:bg-[#4969E8] text-white text-xs font-semibold rounded-md transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
