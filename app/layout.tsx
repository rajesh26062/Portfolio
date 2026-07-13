"use strict";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rajesh Choudhary | Software Engineer & Quality Specialist | Digital HQ",
  description: "Digital headquarters of Rajesh Choudhary. Software Engineer, QA Architect, Teacher, Content Creator, and Entrepreneur. Bridging design, code, and quality.",
  keywords: ["Rajesh Choudhary", "Software Engineer", "QA Engineer", "Software Testing", "Playwright", "Postman", "Content Creator", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 flex flex-col min-h-screen antialiased selection:bg-indigo-500/20 selection:text-white">
        <Navbar />
        {/* Main wrapper with top padding to account for fixed navbar */}
        <main className="flex-grow pt-24 sm:pt-28 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
