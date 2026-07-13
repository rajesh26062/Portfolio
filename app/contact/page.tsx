"use strict";

"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/BrandIcons";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Contact() {
  const { email, github, linkedin, instagram, whatsapp, calendar } = portfolioData.personalInfo.contactLinks;
  const [formData, setFormData] = useState({ name: "", email: "", message: "", subject: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API request
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "", subject: "" });
    }, 1500);
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "github": return <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />;
      case "linkedin": return <LinkedinIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />;
      case "instagram": return <InstagramIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />;
      default: return <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />;
    }
  };

  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Contact</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Connect
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl font-light leading-relaxed">
              Have a contract proposal, mentoring request, or course feedback? Fill out the form, drop an email, or schedule a calendar session directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            {/* Form Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl border border-zinc-900 bg-zinc-900/10 space-y-6">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-indigo-400" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-lg py-2 px-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-900 rounded-lg py-2 px-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-900 rounded-lg py-2 px-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-900 rounded-lg py-2 px-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-700 transition-colors resize-none"
                    placeholder="Brief description of your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full py-2.5 rounded-lg font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-500 transition-all flex items-center justify-center cursor-pointer"
                >
                  {status === "sending" ? (
                    <span>Sending Message...</span>
                  ) : status === "success" ? (
                    <span>Message Sent Successfully!</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Links & Booking Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Calendly Booking Card */}
              <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-900/10 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">Direct Meeting</h3>
                </div>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">
                  Book a direct 15-minute video call session on my calendar to align on project requirements, code advice, or speaking topics.
                </p>
                <a
                  href={calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all"
                >
                  Schedule in Calendar
                </a>
              </div>

              {/* Direct Info */}
              <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/60 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Details</h4>
                <div className="space-y-3.5 text-xs font-light text-zinc-400">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-zinc-500 mr-2.5" />
                    <a href="mailto:choudharyrajesh@outlook.com" className="hover:text-white transition-colors">choudharyrajesh@outlook.com</a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-zinc-500 mr-2.5" />
                    <span>Rajasthan, India</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2 border-t border-zinc-900">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-zinc-900 border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-zinc-900 border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-zinc-900 border border-zinc-900 hover:border-zinc-800 text-zinc-400 hover:text-white transition-colors" aria-label="Instagram">
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
