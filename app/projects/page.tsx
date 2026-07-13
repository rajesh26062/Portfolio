"use strict";

"use client";

import React, { useState } from "react";
import { X, ExternalLink, Shield, Code, PlayCircle, Cpu, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Projects</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Selected Creations
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl font-light leading-relaxed">
              A curated selection of core systems, developer utilities, and testing infrastructures I have designed and engineered. Click any card to read the full case study.
            </p>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project: Project, index: number) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-xl border border-zinc-900 bg-zinc-900/10 overflow-hidden hover:bg-zinc-900/30 transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image Panel */}
                <div className="relative h-48 bg-zinc-950/60 overflow-hidden flex items-center justify-center border-b border-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10 opacity-60" />
                  
                  {/* Local project illustrations/images served from /assets/ */}
                  <img 
                    src={`/assets/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-45 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500"
                  />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-[10px] text-indigo-400 font-mono">
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Project Card Info */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-zinc-500 text-[10px] uppercase tracking-wider font-semibold">
                      <span>{project.role.split(" & ")[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:translate-x-1 group-hover:text-indigo-400 transition-all" />
                    </div>
                    
                    <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[9px] text-zinc-600 font-mono">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800/90 rounded-2xl shadow-2xl overflow-hidden text-zinc-300 text-sm max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="sticky top-0 bg-zinc-900/95 backdrop-blur border-b border-zinc-800 p-4 sm:p-6 flex items-center justify-between z-20">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400">{selectedProject.subtitle}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg border border-transparent hover:border-zinc-700 transition-all"
                  aria-label="Close case study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
                {/* Meta details grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-950/40 border border-zinc-950">
                  <div>
                    <span className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Role</span>
                    <span className="text-xs text-white font-medium">{selectedProject.role}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Duration</span>
                    <span className="text-xs text-white font-medium">{selectedProject.duration}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Focus Tech</span>
                    <span className="text-xs text-white font-medium">{selectedProject.tags.slice(0, 2).join(", ")}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Client / Context</span>
                    <span className="text-xs text-white font-medium">Enterprise QA</span>
                  </div>
                </div>

                {/* Problem & Solution block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">The Problem</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">The Solution</h4>
                    <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Technical challenges */}
                <div className="space-y-3 pt-4 border-t border-zinc-800/50">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Challenges & Solutions</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.challenges}</p>
                </div>

                {/* Implementation process */}
                <div className="space-y-4 pt-4 border-t border-zinc-800/50">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Execution Process</h4>
                  <ol className="space-y-2.5">
                    {selectedProject.process.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-5 h-5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-zinc-300 font-light">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Key results */}
                <div className="space-y-4 pt-4 border-t border-zinc-800/50">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Impact & Results</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-zinc-950/60 border border-zinc-950 text-center">
                        <p className="text-xs text-zinc-300 font-light leading-relaxed">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lessons Learned */}
                <div className="space-y-3 pt-4 border-t border-zinc-800/50">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Lessons Learned</h4>
                  <p className="text-zinc-400 font-light leading-relaxed">{selectedProject.lessons}</p>
                </div>

                {/* Technology list */}
                <div className="space-y-3 pt-4 border-t border-zinc-800/50">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-900 text-xs text-zinc-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
