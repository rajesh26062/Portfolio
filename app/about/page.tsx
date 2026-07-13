"use strict";

"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { philosophyTitle, philosophyBody, impactMetric, impactText } = portfolioData.aboutStory;

  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">About Me</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl">
              Storytelling, Philosophy, & The Code Behind It.
            </h2>
          </div>

          {/* Profile & Narrative Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-4">
            <div className="md:col-span-4 space-y-6">
              {/* Image Frame */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                {/* Fallback to local avatar.jpg from public assets */}
                <img 
                  src="/assets/avatar.jpg" 
                  alt="Rajesh Choudhary" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Stat Metric */}
              <div className="glass-card p-6 rounded-xl border border-zinc-900 text-center space-y-2">
                <div className="text-4xl font-extrabold text-indigo-500 font-mono tracking-tight">{impactMetric}</div>
                <div className="text-zinc-400 text-xs font-light leading-relaxed">{impactText}</div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6 text-zinc-300 text-[15px] font-light leading-relaxed">
              <h3 className="text-xl font-bold text-white tracking-tight">{philosophyTitle}</h3>
              
              {philosophyBody.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="pt-4 border-t border-zinc-900 space-y-4 text-sm">
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider">How I approach collaboration:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Code with Test Context:</strong> Writing development code with clear hooks and architecture for automated checking.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Data-Driven QA:</strong> Creating mock servers and sandbox environments to isolate bug surface areas.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Direct Mentorship:</strong> Hosting interactive sessions to accelerate engineers from zero to test-automation experts.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Proof CTA */}
          <div className="pt-10 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Want to follow my daily builds?</h3>
              <p className="text-zinc-500 text-sm font-light mt-1">I publish roadmaps, bug-hunting guides, and design thoughts on LinkedIn.</p>
            </div>
            <a 
              href="https://linkedin.com/in/rajesh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-all"
            >
              Follow on LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-zinc-400" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
