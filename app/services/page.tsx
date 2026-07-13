"use strict";

"use client";

import React from "react";
import { Shield, Code, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData, ServiceItem } from "@/data/portfolioData";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield": return <Shield className="w-6 h-6 text-indigo-400" />;
      case "Code": return <Code className="w-6 h-6 text-indigo-400" />;
      default: return <GraduationCap className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Services</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Work With Me
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl font-light leading-relaxed">
              I partner with businesses and individuals. Whether you want to optimize your release cycles, build custom frontend interfaces, or accelerate your tech career, I have dedicated packages available.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {portfolioData.services.map((service: ServiceItem, idx: number) => (
              <div 
                key={service.id}
                className={`relative rounded-xl border p-6 sm:p-8 flex flex-col justify-between h-full space-y-8 bg-zinc-900/10 ${
                  idx === 0 
                    ? "border-indigo-500/40 bg-indigo-500/[0.02]" 
                    : "border-zinc-900"
                }`}
              >
                {/* Popular Badge */}
                {idx === 0 && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-indigo-500/15 border border-indigo-500/35 text-[9px] font-bold text-indigo-400 uppercase tracking-wider">
                    Recommended
                  </span>
                )}

                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight">{service.title}</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">{service.description}</p>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t border-zinc-900/60">
                    <span className="block text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Investment</span>
                    <span className="text-lg sm:text-xl font-extrabold text-white font-mono">{service.pricing}</span>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-2.5 text-xs font-light text-zinc-400">
                    {service.features.map((feat, featIdx) => (
                      <li key={featIdx} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="/contact"
                  className={`w-full py-2.5 rounded-lg font-semibold text-xs text-center transition-all flex items-center justify-center ${
                    idx === 0
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/10"
                      : "bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  {service.cta}
                  <ArrowRight className="w-3 h-3 ml-1.5" />
                </a>
              </div>
            ))}
          </div>

          {/* Alternate Inquiries */}
          <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500">
            <p>Looking for custom training bootcamps or content sponsor opportunities?</p>
            <a href="mailto:choudharyrajesh@outlook.com" className="font-bold text-white hover:text-indigo-400 underline transition-colors">
              Submit custom inquiry via email
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
