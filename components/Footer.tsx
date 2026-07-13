"use strict";

"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-auto border-t border-zinc-900 bg-zinc-950 py-12 md:py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and Quote */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-lg font-bold text-white tracking-tight"
            >
              <span className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center text-xs font-black">
                RC
              </span>
              <span>
                rajesh<span className="text-indigo-500">.dev</span>
              </span>
            </Link>
            
            <p className="text-[13px] leading-relaxed text-zinc-500 max-w-sm font-light italic">
              "The technology we build is our craft. The quality we guarantee is our standard. The knowledge we share is our legacy."
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/rajesh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg border border-transparent hover:border-zinc-800 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/rajesh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg border border-transparent hover:border-zinc-800 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/rajesh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg border border-transparent hover:border-zinc-800 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:choudharyrajesh@outlook.com"
                className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-lg border border-transparent hover:border-zinc-800 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Map */}
          <div className="grid grid-cols-2 gap-8 md:col-span-5 text-[13px]">
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-xs uppercase tracking-wider">Identity</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Story</Link></li>
                <li><Link href="/journey" className="hover:text-white transition-colors">Timeline Journey</Link></li>
                <li><Link href="/what-i-do" className="hover:text-white transition-colors">Competencies</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-xs uppercase tracking-wider">Professional</h3>
              <ul className="space-y-2">
                <li><Link href="/testing" className="hover:text-white transition-colors">Software QA Testing</Link></li>
                <li><Link href="/projects" className="hover:text-white transition-colors">Projects & Cases</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/resume" className="hover:text-white transition-colors">Resume & PDF</Link></li>
              </ul>
            </div>
          </div>

          {/* Scroll to Top */}
          <div className="md:col-span-1 flex md:justify-end items-start">
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Rajesh Choudhary. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-light">
            Designed & Engineered with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
