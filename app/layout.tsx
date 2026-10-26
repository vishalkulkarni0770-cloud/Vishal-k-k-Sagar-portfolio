import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExecutiveChatbot } from '@/components/ExecutiveChatbot';

export const metadata: Metadata = {
  title: 'VISHAL K K SAGAR - MBA Portfolio & Communication Journey',
  description:
    'Official MBA Portfolio & Business Communication (SB5111) showcase for VISHAL K K SAGAR, Semester 1 MBA. Featuring executive presence, assignments, leadership learnings, and curated talks.',
  openGraph: {
    title: 'VISHAL K K SAGAR - MBA Portfolio & Communication Journey',
    description:
      'Official MBA Portfolio & Business Communication (SB5111) showcase for VISHAL K K SAGAR, Semester 1 MBA. Featuring executive presence, assignments, leadership learnings, and curated talks.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VISHAL K K SAGAR - MBA Portfolio & Communication Journey',
    description:
      'Official MBA Portfolio & Business Communication (SB5111) showcase for VISHAL K K SAGAR, Semester 1 MBA.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-[#F8F7F3]">
      <body
        suppressHydrationWarning
        className="flex min-h-screen flex-col bg-[#F8F7F3] text-[#172A46] selection:bg-[#4969E8] selection:text-white"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ExecutiveChatbot />
      </body>
    </html>
  );
}
