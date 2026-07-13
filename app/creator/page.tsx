"use strict";

"use client";

import React from "react";
import { Play, Users, Eye, Video, Handshake, ArrowUpRight } from "lucide-react";
import { YoutubeIcon, LinkedinIcon, InstagramIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function CreatorShowcase() {
  const { stats, channels, milestones, videos } = portfolioData.contentCreator;

  const getChannelIcon = (name: string) => {
    switch (name) {
      case "YouTube": return <YoutubeIcon className="w-5 h-5 text-red-500" />;
      case "LinkedIn": return <LinkedinIcon className="w-5 h-5 text-blue-500" />;
      case "Instagram": return <InstagramIcon className="w-5 h-5 text-pink-500" />;
      default: return <Video className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-red-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xs font-semibold text-red-500 uppercase tracking-widest">Content Creator</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Sharing the Engineering Journey
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl font-light leading-relaxed">
              I script, direct, and publish tutorials explaining complex web testing and software architecture topics, helping thousands of engineers upskill.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-4">
            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/10 space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-500">
                <Users className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{stats.subscribers}</div>
              <div className="text-zinc-500 text-[10px] uppercase font-semibold">Community Size</div>
            </div>
            
            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/10 space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-500">
                <Eye className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{stats.impressions}</div>
              <div className="text-zinc-500 text-[10px] uppercase font-semibold">Total Impressions</div>
            </div>

            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/10 space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-500">
                <Video className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{stats.videosCount}</div>
              <div className="text-zinc-500 text-[10px] uppercase font-semibold">Videos Published</div>
            </div>

            <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/10 space-y-2 text-center">
              <div className="w-8 h-8 rounded-full bg-zinc-900 mx-auto flex items-center justify-center text-zinc-500">
                <Handshake className="w-4 h-4" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{stats.collaborations}</div>
              <div className="text-zinc-500 text-[10px] uppercase font-semibold">Brand Partnerships</div>
            </div>
          </div>

          {/* Social Channels Grid */}
          <div className="space-y-6">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Active Platforms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {channels.map((chan, idx) => (
                <div key={idx} className="glass-card p-6 rounded-xl flex flex-col justify-between h-full space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-zinc-950 flex items-center justify-center border border-zinc-800">
                        {getChannelIcon(chan.name)}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">{chan.followers}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight">{chan.name} ({chan.handle})</h4>
                    <p className="text-zinc-500 text-xs font-light leading-relaxed">{chan.desc}</p>
                  </div>

                  <a
                    href={chan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Visit Channel
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Video Embed Layouts */}
          <div className="space-y-6 pt-8 border-t border-zinc-900">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Featured Tutorials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((vid) => (
                <div key={vid.id} className="space-y-3">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-950 border border-zinc-900">
                    {/* Embedded Youtube Iframe with placeholder URL */}
                    <iframe
                      src={vid.url}
                      title={vid.title}
                      className="w-full h-full border-none"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="flex items-center justify-between text-xs px-1">
                    <h4 className="font-bold text-white leading-tight line-clamp-1">{vid.title}</h4>
                    <span className="text-zinc-500 text-[10px] font-mono flex-shrink-0 ml-4">{vid.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Journey Milestones */}
          <div className="space-y-6 pt-8 border-t border-zinc-900">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Creation Milestones</h3>
            <div className="relative border-l border-zinc-800 ml-3 pl-6 py-2 space-y-8">
              {milestones.map((mile, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-red-500/20 border-2 border-red-500" />
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-red-400 font-mono">{mile.year}</span>
                      <h4 className="text-sm font-bold text-white">{mile.title}</h4>
                    </div>
                    <p className="text-zinc-500 text-xs font-light max-w-lg leading-relaxed">{mile.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
