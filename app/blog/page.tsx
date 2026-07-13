"use strict";

"use client";

import React, { useState } from "react";
import { ArrowLeft, Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, BlogPost } from "@/data/portfolioData";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Blog</h1>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Writings & Case Studies
                </h2>
                <p className="text-zinc-500 text-sm max-w-lg font-light leading-relaxed">
                  Reflections on software development, test automation standards, freelancing businesses, and personal growth.
                </p>
              </div>

              {/* Blog Post List */}
              <div className="space-y-6 pt-4">
                {portfolioData.blogs.map((post: BlogPost, index: number) => (
                  <div
                    key={post.slug}
                    onClick={() => setSelectedPost(post)}
                    className="group cursor-pointer p-6 rounded-xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/25 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                    <div className="space-y-3 max-w-xl">
                      <div className="flex items-center space-x-3 text-xs text-zinc-500">
                        <span className="font-semibold text-indigo-400 font-mono">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-indigo-400 transition-colors tracking-tight leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex-shrink-0 self-start md:self-center">
                      <div className="w-9 h-9 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-zinc-700 transition-all">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.article
              key="detail-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              {/* Back Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center text-xs font-bold text-zinc-500 hover:text-white transition-colors group mb-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform" />
                Back to Articles
              </button>

              {/* Title & Metadata */}
              <div className="space-y-4">
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/30 text-[10px] text-indigo-400 font-mono font-semibold uppercase tracking-wider">
                  {selectedPost.category}
                </span>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
                  {selectedPost.title}
                </h1>

                <div className="flex items-center space-x-4 text-xs text-zinc-500 font-light border-b border-zinc-900 pb-6">
                  <div className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl space-y-6 pt-2 whitespace-pre-line">
                {selectedPost.content}
              </div>

              {/* Author Footer */}
              <div className="pt-12 border-t border-zinc-900 flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 overflow-hidden">
                  <img src="/assets/avatar.jpg" alt="Rajesh Choudhary" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Written by Rajesh Choudhary</h4>
                  <p className="text-[10px] text-zinc-500 font-light">QA Architect, Developer, & Content Creator</p>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
