'use client';

import React from 'react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif', backgroundColor: '#F8F7F3', color: '#172A46' }}>
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
          <h2>An unexpected error occurred</h2>
          <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Please try refreshing the page.</p>
          <button
            onClick={() => reset()}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#172A46', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
