"use strict";

"use client";

import React, { useState } from "react";
import { CheckSquare, Play, Terminal, FileText, Bug, Database, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function TestingQA() {
  const { intro, categories, sampleArtifacts } = portfolioData.testingSection;
  const [activeTab, setActiveTab] = useState<number>(0);

  // Mock defect ticket to showcase "Bug reporting capability"
  const mockBugReport = {
    id: "BUG-2491",
    title: "Checkout Flow: Race condition on multi-click of 'Pay Now' creates duplicate Stripe orders",
    severity: "High / Critical",
    status: "Open (Assigned)",
    environment: "Staging (v2.4.1)",
    description: "When a user double-clicks the purchase confirmation submit button rapidly, two webhook signals are dispatched to Stripe, creating duplicate transaction records and charge notifications.",
    steps: [
      "Navigate to courses catalog and select 'Enterprise Playwright Mastery'.",
      "Click checkout, fill credit details, and reach the final payment dialog.",
      "Click 'Pay Now' button twice rapidly within 200ms.",
      "Observe console log network tab and Stripe payment dashboard."
    ],
    expected: "Button should transition to disabled/loading state after the first click. Only one transaction should be initiated.",
    actual: "Both clicks generate concurrent HTTP requests. Two parallel orders are recorded for a single session.",
    workaround: "Implement front-end click throttling and backend idempotent transactional keys (e.g. idempotency header)."
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
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Quality Assurance</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Software Testing & Reliability
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl font-light leading-relaxed">
              {intro}
            </p>
          </div>

          {/* QA Competency Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/10 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
                    {idx === 0 ? <Layers className="w-4 h-4 text-indigo-400" /> : <Terminal className="w-4 h-4 text-indigo-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{cat.title}</h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1 pl-2 border-l border-zinc-800">
                      <h4 className="text-sm font-bold text-zinc-200">{item.name}</h4>
                      <p className="text-zinc-500 text-xs font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive QA Defect Report Showcase */}
          <div className="space-y-4 pt-8 border-t border-zinc-900">
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Defect Documenting Sample</h3>
              <h4 className="text-xl font-bold text-white tracking-tight">Structured Bug Report Showcase</h4>
              <p className="text-zinc-500 text-xs max-w-lg font-light leading-relaxed">
                A live demonstration of how I write bug reports to reduce communication overhead and clarify context for development squads.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-6 font-sans">
              {/* Defect header info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
                <div className="flex items-center space-x-3">
                  <span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/30 text-xs font-mono font-bold text-red-500">
                    {mockBugReport.id}
                  </span>
                  <h5 className="text-sm font-bold text-white">{mockBugReport.title}</h5>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="text-zinc-500">Severity:</span>
                  <span className="text-red-400 font-bold">{mockBugReport.severity}</span>
                </div>
              </div>

              {/* Bug Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed font-light">
                <div className="md:col-span-2 space-y-4">
                  <div className="space-y-1.5">
                    <span className="block font-semibold text-zinc-400">Description</span>
                    <p className="text-zinc-500">{mockBugReport.description}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="block font-semibold text-zinc-400">Reproduction Steps</span>
                    <ol className="space-y-1.5 list-decimal pl-4 text-zinc-500">
                      {mockBugReport.steps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="space-y-4 border-t md:border-t-0 md:border-l border-zinc-800/80 pt-4 md:pt-0 md:pl-6">
                  <div className="space-y-1">
                    <span className="block font-semibold text-zinc-400">Environment</span>
                    <span className="font-mono text-zinc-500">{mockBugReport.environment}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <span className="block font-semibold text-zinc-400">Expected Behavior</span>
                    <p className="text-zinc-500">{mockBugReport.expected}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="block font-semibold text-zinc-400">Actual Result</span>
                    <p className="text-red-400/90">{mockBugReport.actual}</p>
                  </div>

                  <div className="space-y-1">
                    <span className="block font-semibold text-zinc-400">Suggested Resolution</span>
                    <p className="text-zinc-500">{mockBugReport.workaround}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Testing Artifacts downloads */}
          <div className="pt-8 border-t border-zinc-900 space-y-4">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Verification Templates & Checklists</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sampleArtifacts.map((art, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl border border-zinc-900 bg-zinc-950/80 hover:border-zinc-800 transition-all group">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-500">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">{art.name}</h4>
                      <p className="text-[10px] text-zinc-500 font-light mt-0.5">{art.desc} ({art.size})</p>
                    </div>
                  </div>
                  <a 
                    href="/resources" 
                    className="p-1.5 text-zinc-500 hover:text-white rounded transition-all"
                    aria-label="View template"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
