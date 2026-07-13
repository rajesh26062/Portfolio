"use strict";

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code, CheckSquare, GraduationCap, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const { name, titles, tagline, bioIntro, philosophies } = portfolioData.personalInfo;

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  } as const;

  const getIcon = (id: string) => {
    switch (id) {
      case "Code": return <Code className="w-5 h-5 text-indigo-500" />;
      case "CheckSquare": return <CheckSquare className="w-5 h-5 text-indigo-500" />;
      case "GraduationCap": return <GraduationCap className="w-5 h-5 text-indigo-500" />;
      case "Briefcase": return <Briefcase className="w-5 h-5 text-indigo-500" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden py-10 sm:py-16">
      {/* Background Decorative Glow (Stripe/Linear style) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <motion.section 
          className="py-12 md:py-20 flex flex-col items-start justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Headquarters</span>
          </motion.div>

          {/* Majestic Typography Introduction */}
          <motion.div variants={itemVariants} className="space-y-2 mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl">
              {titles.slice(0, 4).map((title, idx) => (
                <span key={title} className="block">
                  {title}
                  {idx < 3 && <span className="text-zinc-700">.</span>}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Subtitle / Statement */}
          <motion.p 
            variants={itemVariants} 
            className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed mb-10"
          >
            I am <span className="text-white font-medium">{name}</span>. I build robust technology, orchestrate automated QA testing, create high-impact content, and help developers scale their careers.
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/projects"
              className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/20 transition-all duration-200 group"
            >
              Explore My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all duration-200"
            >
              Let's Collaborate
            </Link>
          </motion.div>
        </motion.section>

        {/* IDENTITY STATEMENT & PHILOSOPHIES */}
        <section className="py-16 md:py-24 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Core Beliefs</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                The Philosophy Driving Every Line of Code
              </h3>
              <p className="text-zinc-500 text-sm mt-4 font-light leading-relaxed">
                Technology is a craft. I approach development and quality assurance with a belief that simplicity, rigorous verification, and knowledge transfer yield the highest leverage.
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-6">
              {philosophies.map((phil, idx) => (
                <div key={idx} className="gradient-border-wrapper">
                  <div className="gradient-border-content p-6 sm:p-8 space-y-3">
                    <span className="text-xs font-bold text-indigo-500 font-mono">0{idx + 1}</span>
                    <h4 className="text-lg font-bold text-white tracking-tight">{phil.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">{phil.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPETENCY TEASER */}
        <section className="py-16 md:py-24 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Competencies</h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Areas of Focus</h3>
            </div>
            <Link
              href="/what-i-do"
              className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center mt-3 md:mt-0 transition-colors"
            >
              Learn more about what I do
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.competencies.map((comp) => (
              <div key={comp.id} className="glass-card p-6 rounded-xl flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
                    {getIcon(comp.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">{comp.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">{comp.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {comp.skills.slice(0, 4).map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-500 text-[11px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
