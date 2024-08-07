import { Analytics } from '@vercel/analytics/react';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import { Capriola } from 'next/font/google';
import { Inter } from 'next/font/google';

const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const capriola = Capriola({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-capriola',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.safvan.live'),
  title: 'Safvan | Software Developer',
  description:
    'Experienced in node.js backend development (Express.js, Nest.js, MongoDB, PostgreSQL) and frontend development (React, Next.js, HTML, CSS, JS, SASS) with a strong focus on delivering high-quality solutions.',
  openGraph: {
    title: 'Safvan | Software Developer',
    description:
      'Experienced in node.js backend development (Express.js, Nest.js, MongoDB, PostgreSQL) and frontend development (React, Next.js, HTML, CSS, JS, SASS) with a strong focus on delivering high-quality solutions.',
    url: 'https://www.safvan.live',
    siteName: "Safvan's portfolio",
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${capriola.variable} ${interFont.variable}  `}>
      <body className="bg-[--background-black] bg-dot-white/[0.2]">
        <NavBar />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
