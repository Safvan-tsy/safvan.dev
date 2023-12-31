import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Capriola } from "next/font/google";

const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.safvan.live"),
  title: "Safvan | Software Developer",
  description:
    "Experienced in node.js backend development (Express.js, Nest.js, MongoDB, PostgreSQL) and frontend development (React, Next.js, HTML, CSS, JS, SASS) with a strong focus on delivering high-quality solutions.",
  openGraph: {
    title: "Safvan | Software Developer",
    description:
      "Experienced in node.js backend development (Express.js, Nest.js, MongoDB, PostgreSQL) and frontend development (React, Next.js, HTML, CSS, JS, SASS) with a strong focus on delivering high-quality solutions.",
    url: "https://www.safvan.live",
    siteName: "Safvan's portfolio",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${capriola.variable} `}
    >
      <body>
        <NavBar />
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
