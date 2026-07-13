"use strict";

"use client";

import { Download, Mail, Phone, MapPin, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Resume() {
  const { name, titles } = portfolioData.personalInfo;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-20 print:py-0 print:bg-white print:text-black">
      {/* Background Decorative Blur - Hidden during print */}
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none print:hidden" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header Action Bar - Hidden during print */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-900 pb-6 print:hidden">
            <div>
              <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Resume</h1>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">Curriculum Vitae</h2>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/10 transition-all"
            >
              <Download className="w-3.5 h-3.5 mr-2" />
              Download / Print PDF
            </button>
          </div>

          {/* Resume Sheet Document Wrapper */}
          <div className="p-8 sm:p-12 rounded-xl border border-zinc-900 bg-zinc-900/10 shadow-xl space-y-8 font-sans print:border-none print:bg-transparent print:shadow-none print:p-0 print:text-black">
            
            {/* Document Header */}
            <div className="flex flex-col md:flex-row justify-between items-start border-b border-zinc-800/80 pb-6 gap-6 print:border-zinc-300">
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-white tracking-tight print:text-black">{name}</h3>
                <p className="text-sm font-semibold text-indigo-400 uppercase tracking-wider print:text-indigo-600">
                  {titles.slice(0, 3).join(" • ")}
                </p>
              </div>

              {/* Contact grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-zinc-400 print:text-zinc-700">
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-500 print:text-zinc-400" />
                  <a href="mailto:choudharyrajesh@outlook.com" className="hover:text-white transition-colors">choudharyrajesh@outlook.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500 print:text-zinc-400" />
                  <span>Rajasthan, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-zinc-500 print:text-zinc-400" />
                  <a href="https://linkedin.com" className="hover:text-white transition-colors">linkedin.com/in/rajesh</a>
                </div>
                <div className="flex items-center space-x-2">
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-500 print:text-zinc-400" />
                  <a href="https://github.com" className="hover:text-white transition-colors">github.com/rajesh</a>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-800 pb-1.5 print:text-black print:border-zinc-300">
                Professional Profile
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed print:text-zinc-800">
                Senior QA Analyst and Software Developer with over 4 years of experience delivering robust automation frameworks, stabilizing product releases, and coding modular Next.js frontends. Expert at orchestrating dynamic testing lifecycles (manual, API integration, smoke, regression) and deploying containers within CI/CD pipelines. Prominent creator and mentor teaching automation concepts to over 10,000 students globally.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-6">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-800 pb-1.5 print:text-black print:border-zinc-300">
                Work Experience
              </h4>

              <div className="space-y-6">
                {/* Adobe */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                    <h5 className="font-extrabold text-white text-sm print:text-black">Quality Assurance Engineer</h5>
                    <span className="font-mono text-zinc-500 font-medium">2022 - 2024</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-indigo-400 print:text-indigo-600 font-medium">
                    <span>Adobe Systems</span>
                    <span className="text-zinc-500 print:text-zinc-400 font-light font-sans">Full Time</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-zinc-400 space-y-1.5 font-light print:text-zinc-800">
                    <li>Led automation scaling across cloud-based design tooling dashboards, writing Playwright integration tests and increasing reliability.</li>
                    <li>Developed automated API checking suits using Postman, scripting environment chaining structures which reduced checkout pipeline defect escapes by 35%.</li>
                    <li>Designed test cases, defect maps, and regression suites in Jira, collaborating directly with product squads on sprint planning.</li>
                  </ul>
                </div>

                {/* Freelancer */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                    <h5 className="font-extrabold text-white text-sm print:text-black">Full-Stack Developer & QA Consultant</h5>
                    <span className="font-mono text-zinc-500 font-medium">2024 - Present</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-indigo-400 print:text-indigo-600 font-medium">
                    <span>Freelance Contracts</span>
                    <span className="text-zinc-500 print:text-zinc-400 font-light font-sans">Contract</span>
                  </div>
                  <ul className="list-disc pl-4 text-xs text-zinc-400 space-y-1.5 font-light print:text-zinc-800">
                    <li>Designed and shipped bespoke web applications using React, Next.js, TypeScript, and Tailwind CSS for startup clients.</li>
                    <li>Implemented customized continuous integration test frameworks inside GitHub Actions pipelines, decreasing runtime overhead by 40%.</li>
                    <li>Orchestrated full security audits of REST APIs and verified DB constraints via raw SQL script verification checks.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills Grid */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-800 pb-1.5 print:text-black print:border-zinc-300">
                Skills & Competencies
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light">
                <div className="space-y-1.5">
                  <span className="block font-semibold text-zinc-200 print:text-black">Automation & Testing</span>
                  <p className="text-zinc-400 print:text-zinc-700">Playwright, Selenium, Postman, API Schema Checks, Smoke/Sanity, Regression testing, Jira, Bug reports</p>
                </div>
                <div className="space-y-1.5">
                  <span className="block font-semibold text-zinc-200 print:text-black">Languages & Frameworks</span>
                  <p className="text-zinc-400 print:text-zinc-700">React, Next.js (App Router), TypeScript, JavaScript, Node.js, Express, SQL, Tailwind CSS, HTML/CSS</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-zinc-800 pb-1.5 print:text-black print:border-zinc-300">
                Education
              </h4>
              <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                <div>
                  <h5 className="font-extrabold text-white text-sm print:text-black">Bachelor of Technology (B.Tech) in Computer Science</h5>
                  <span className="text-zinc-400 print:text-zinc-700 block mt-0.5">Engineering University</span>
                </div>
                <span className="font-mono text-zinc-500 font-medium">2018 - 2022</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
