"use strict";

"use client";

import React from "react";
import { Briefcase, Award, BookOpen, Compass, Zap, GraduationCap } from "lucide-react";
import { YoutubeIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";
import { portfolioData, TimelineItem } from "@/data/portfolioData";

export default function Journey() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award": return <Award className="w-4 h-4 text-indigo-400" />;
      case "Briefcase": return <Briefcase className="w-4 h-4 text-indigo-400" />;
      case "Youtube": return <YoutubeIcon className="w-4 h-4 text-indigo-400" />;
      case "Zap": return <Zap className="w-4 h-4 text-indigo-400" />;
      case "BookOpen": return <BookOpen className="w-4 h-4 text-indigo-400" />;
      case "Compass": return <Compass className="w-4 h-4 text-indigo-400" />;
      default: return <GraduationCap className="w-4 h-4 text-indigo-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education": return "border-blue-500/30 text-blue-400 bg-blue-500/5";
      case "experience": return "border-indigo-500/30 text-indigo-400 bg-indigo-500/5";
      case "creativity": return "border-red-500/30 text-red-400 bg-red-500/5";
      default: return "border-purple-500/30 text-purple-400 bg-purple-500/5";
    }
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Journey</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              My Personal Timeline
            </h2>
            <p className="text-zinc-500 text-sm max-w-lg font-light leading-relaxed">
              From coding algorithms in engineering school to ensuring system resilience at Adobe, building a creator channel, and founding educational programs.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l border-zinc-800 ml-4 md:ml-6 pl-6 sm:pl-8 py-4 space-y-10">
            {portfolioData.journeyTimeline.map((item: TimelineItem, index: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative"
              >
                {/* Timeline dot with icon */}
                <div className="absolute -left-[45px] md:-left-[53px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 shadow-md">
                  {getIcon(item.icon)}
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Year badge */}
                    <span className="text-xs font-semibold font-mono text-zinc-500">{item.year}</span>
                    
                    {/* Category tag */}
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-zinc-400">
                    {item.company}
                  </h4>
                  
                  <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer of timeline */}
          <div className="pt-10 border-t border-zinc-900 text-center">
            <p className="text-zinc-500 text-xs font-light">
              "The journey of a lifelong learner is never finished. The next chapter is always under construction."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
