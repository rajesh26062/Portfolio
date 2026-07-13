"use strict";

"use client";

import { Code, CheckSquare, GraduationCap, Briefcase, Rocket, ShieldAlert, Laptop } from "lucide-react";
import { YoutubeIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";

const servicesList = [
  {
    id: "swe",
    title: "Software Engineering",
    description: "Architecting, coding, and maintaining robust web applications. Specialize in TypeScript, React, Next.js, and backend Node.js APIs. I write clean, testable code following clean architecture patterns.",
    icon: <Code className="w-6 h-6 text-indigo-500" />,
    color: "from-indigo-600/10 to-blue-600/10",
    gradientBorder: "group-hover:border-indigo-500/30",
    illustration: (
      <div className="relative w-full h-24 bg-zinc-950/40 rounded-lg overflow-hidden border border-zinc-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent" />
        <div className="w-4/5 flex flex-col space-y-1.5 font-mono text-[9px] text-indigo-400/70 p-2.5">
          <div><span className="text-zinc-600">const</span> renderHeadquarters = () =&gt; &#123;</div>
          <div className="pl-3"><span className="text-zinc-600">return</span> &lt;<span className="text-white">DigitalHQ</span> developer=&#123;rajesh&#125; /&gt;;</div>
          <div>&#125;;</div>
        </div>
      </div>
    )
  },
  {
    id: "sqa",
    title: "Software QA & Testing",
    description: "Designing end-to-end test automation suites, test cases, and quality plans. Experience writing Playwright tests, scripting Postman dynamic checks, verifying SQL DBs, and auditing system robustness.",
    icon: <CheckSquare className="w-6 h-6 text-indigo-500" />,
    color: "from-purple-600/10 to-indigo-600/10",
    gradientBorder: "group-hover:border-purple-500/30",
    illustration: (
      <div className="relative w-full h-24 bg-zinc-950/40 rounded-lg overflow-hidden border border-zinc-900 flex items-center justify-center p-3">
        <div className="w-full flex items-center justify-between border-b border-zinc-900 pb-2 text-[10px] text-zinc-500">
          <span className="font-mono text-zinc-400">testSuite.run()</span>
          <span className="text-emerald-500 font-bold px-1.5 py-0.5 rounded bg-emerald-500/5 border border-emerald-500/20">PASSED</span>
        </div>
        <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[8px] font-mono text-zinc-600">
          <span>Specs: 42</span>
          <span>Assertions: 198</span>
        </div>
      </div>
    )
  },
  {
    id: "content",
    title: "Content Creation",
    description: "Creating educational tutorials, tech roadmaps, and motivational resources. Growing a platform of 50k+ subscribers on YouTube and sharing daily thoughts with professionals on LinkedIn.",
    icon: <YoutubeIcon className="w-6 h-6 text-indigo-500" />,
    color: "from-red-600/10 to-orange-600/10",
    gradientBorder: "group-hover:border-red-500/30",
    illustration: (
      <div className="relative w-full h-24 bg-zinc-950/40 rounded-lg overflow-hidden border border-zinc-900 flex items-center justify-center p-3">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent" />
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center border border-red-500/30">
            <YoutubeIcon className="w-4 h-4 text-red-500" />
          </div>
          <div className="space-y-1">
            <div className="text-[11px] font-bold text-white leading-none">Playwright Testing Guide</div>
            <div className="text-[9px] text-zinc-500 leading-none">52.8K Views • Uploaded 1 week ago</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "teaching",
    title: "Teaching & Courses",
    description: "Publishing course modules covering REST API automation and Playwright testing. Helping traditional QA and manual testers level up their code credentials to unlock career opportunities.",
    icon: <GraduationCap className="w-6 h-6 text-indigo-500" />,
    color: "from-emerald-600/10 to-indigo-600/10",
    gradientBorder: "group-hover:border-emerald-500/30",
    illustration: (
      <div className="relative w-full h-24 bg-zinc-950/40 rounded-lg overflow-hidden border border-zinc-900 flex flex-col justify-between p-3">
        <div className="flex justify-between items-center text-[10px]">
          <span className="text-white font-bold">API Masterclass</span>
          <span className="text-indigo-400 font-mono">Module 3</span>
        </div>
        <div className="w-full bg-zinc-900 rounded-full h-1.5">
          <div className="bg-indigo-500 h-1.5 rounded-full w-[78%]" />
        </div>
        <div className="flex justify-between text-[8px] text-zinc-500">
          <span>78% Completed</span>
          <span>12 lessons remaining</span>
        </div>
      </div>
    )
  },
  {
    id: "freelancing",
    title: "Freelancing & Consulting",
    description: "Auditing product delivery systems, writing bespoke web features, configuring GitHub action testing suites, and building stable test infrastructures for fast-growing startup teams.",
    icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
    color: "from-amber-600/10 to-indigo-600/10",
    gradientBorder: "group-hover:border-amber-500/30",
    illustration: (
      <div className="relative w-full h-24 bg-zinc-950/40 rounded-lg overflow-hidden border border-zinc-900 flex items-center justify-between p-3">
        <div className="space-y-1">
          <div className="text-[10px] text-zinc-500 uppercase font-semibold">Active Retainers</div>
          <div className="text-xs font-bold text-white">4 Contracts</div>
        </div>
        <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 flex items-center justify-center text-[10px] font-bold text-indigo-400">
          98%
        </div>
      </div>
    )
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship & Mentoring",
    description: "Coaching engineers and business minded builders. Helping teams scale QA resources, structuring product life cycles, and mentoring learners to develop an owner mindset.",
    icon: <Rocket className="w-6 h-6 text-indigo-500" />,
    color: "from-blue-600/10 to-purple-600/10",
    gradientBorder: "group-hover:border-blue-500/30",
    illustration: (
      <div className="relative w-full h-24 bg-zinc-950/40 rounded-lg overflow-hidden border border-zinc-900 flex items-center justify-center p-3">
        <div className="grid grid-cols-3 gap-2 w-full text-center">
          <div className="p-1 border border-zinc-900 rounded bg-zinc-900/30">
            <div className="text-[8px] text-zinc-500">Mentees</div>
            <div className="text-[10px] font-bold text-white">150+</div>
          </div>
          <div className="p-1 border border-zinc-900 rounded bg-zinc-900/30">
            <div className="text-[8px] text-zinc-500">Rating</div>
            <div className="text-[10px] font-bold text-white">4.9</div>
          </div>
          <div className="p-1 border border-zinc-900 rounded bg-zinc-900/30">
            <div className="text-[8px] text-zinc-500">Launch</div>
            <div className="text-[10px] font-bold text-white">2026</div>
          </div>
        </div>
      </div>
    )
  }
];

export default function WhatIDo() {
  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">What I Do</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              My Core Capabilities
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl font-light leading-relaxed">
              Every role is integrated. Here is a breakdown of the services I direct, code, and support as a multi-hyphenate tech practitioner.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-xl border border-zinc-900 bg-zinc-900/10 p-6 flex flex-col justify-between space-y-6 hover:bg-zinc-900/30 transition-all duration-300"
              >
                {/* Accent glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none -z-10`} />

                <div className="space-y-4">
                  {/* Card top bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-950 flex items-center justify-center transition-all group-hover:scale-105">
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-600">0{index + 1}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-white tracking-tight leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Illustration Wrapper */}
                <div className="pt-2">
                  {service.illustration}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Work Intake Link */}
          <div className="pt-10 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-bold">Have a project that requires multiple hats?</h4>
              <p className="text-zinc-500 text-sm font-light mt-1">Let's discuss how I can help you secure your APIs, write clean React layers, or consult on test pipelines.</p>
            </div>
            <a 
              href="/contact" 
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-lg shadow-lg shadow-indigo-600/10 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
