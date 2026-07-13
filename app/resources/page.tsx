"use strict";

"use client";

import React, { useState } from "react";
import { Download, FileText, Filter, Search } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData, ResourceItem } from "@/data/portfolioData";

export default function Resources() {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  const categories = ["All", "Template", "Checklist", "Cheat Sheet", "PDF"];

  const filteredResources = portfolioData.resources.filter((item: ResourceItem) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Vault</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Free Guides & Resources
            </h2>
            <p className="text-zinc-500 text-sm max-w-lg font-light leading-relaxed">
              Curated QA templates, bug checklists, Postman collection scripts, and resume layouts to help you standardize your engineering quality.
            </p>
          </div>

          {/* Search and Filters Bar */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between pt-4 border-b border-zinc-900 pb-6">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 order-2 sm:order-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1 text-[11px] font-semibold rounded-md border transition-all ${
                    filter === cat
                      ? "bg-white text-zinc-950 border-white"
                      : "text-zinc-400 border-zinc-900 bg-zinc-950/40 hover:text-white hover:border-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative order-1 sm:order-2 max-w-xs w-full">
              <span className="absolute inset-y-0 left-3 flex items-center text-zinc-500">
                <Search className="w-3.5 h-3.5" />
              </span>
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-900 rounded-lg py-1.5 pl-9 pr-4 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
              />
            </div>
          </div>

          {/* Resource Cards List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((res: ResourceItem, idx: number) => (
                <motion.div
                  key={res.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group p-5 rounded-xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/20 transition-all flex items-start justify-between gap-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[9px] font-semibold text-zinc-500 font-mono">
                        {res.category}
                      </span>
                      <span className="text-[10px] text-zinc-600 font-mono">{res.fileSize}</span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-tight">{res.title}</h3>
                      <p className="text-zinc-500 text-[11px] sm:text-xs font-light leading-relaxed">{res.description}</p>
                    </div>
                  </div>

                  <a
                    href={res.downloadUrl}
                    className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800 transition-all flex-shrink-0"
                    aria-label={`Download ${res.title}`}
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </motion.div>
              ))
            ) : (
              <div className="sm:col-span-2 text-center py-12 text-zinc-500 text-xs font-light">
                No resources found matching the criteria.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
