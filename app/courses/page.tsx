"use strict";

"use client";

import React, { useState } from "react";
import { Star, Clock, BookOpen, User, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData, Course } from "@/data/portfolioData";

export default function Courses() {
  const [coursesList, setCoursesList] = useState<Course[]>(portfolioData.courses);

  return (
    <div className="relative min-h-screen py-12 sm:py-20">
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Academy</h1>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Premium Educational Courses
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl font-light leading-relaxed">
              Step-by-step masterclasses designed to level up your programming, manual testing, and automated quality engineering skills. Learn production-grade systems from an industry practitioner.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesList.map((course: Course) => (
              <div 
                key={course.id}
                className="group relative rounded-xl border border-zinc-900 bg-zinc-900/10 overflow-hidden hover:bg-zinc-900/20 transition-all flex flex-col h-full"
              >
                {/* Image Placeholder with category tag */}
                <div className="relative h-44 bg-zinc-950 flex items-center justify-center border-b border-zinc-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10 opacity-70" />
                  
                  {/* Reuse local project images for courses */}
                  <img 
                    src={`/assets/${course.image}`}
                    alt={course.title}
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-102 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-300"
                  />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono">
                      {course.category}
                    </span>
                  </div>

                  {course.status === "coming-soon" && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/35 text-[9px] font-bold text-amber-500 uppercase tracking-wider font-mono">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Course Details */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Stars and rating */}
                    {course.status === "published" && (
                      <div className="flex items-center space-x-1.5 text-xs text-zinc-500">
                        <div className="flex items-center text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="ml-1 text-white font-bold font-mono">{course.rating}</span>
                        </div>
                        <span>({course.studentsCount} students)</span>
                      </div>
                    )}

                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-xs font-light leading-relaxed line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  {/* Pricing and specifications */}
                  <div className="space-y-4 pt-2">
                    {course.status === "published" && (
                      <div className="flex items-center justify-between text-xs text-zinc-500 border-t border-zinc-900/60 pt-3">
                        <div className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          <span className="font-mono">{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-3.5 h-3.5 mr-1" />
                          <span className="font-mono">{course.lessonsCount} lessons</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1">
                      {course.status === "published" ? (
                        <div className="flex items-baseline space-x-2">
                          <span className="text-base sm:text-lg font-bold text-white font-mono">{course.price}</span>
                          {course.originalPrice && (
                            <span className="text-xs text-zinc-500 line-through font-mono">{course.originalPrice}</span>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-zinc-500 italic">Release planning in progress</span>
                      )}

                      {course.status === "published" ? (
                        <a 
                          href="/contact"
                          className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded font-semibold text-xs transition-all flex items-center"
                        >
                          Enroll
                          <ArrowUpRight className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        <a 
                          href="/contact"
                          className="px-3 py-1.5 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded font-semibold text-xs transition-all"
                        >
                          Notify Me
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Student Testimonials */}
          <div className="space-y-6 pt-10 border-t border-zinc-900">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Student Reviews</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/80 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center font-bold text-indigo-400 text-xs">
                    MK
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-none">Manoj Kumar</h4>
                    <span className="text-[10px] text-zinc-500 leading-none mt-1 block">SDET at SaaS Corp</span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs font-light leading-relaxed italic">
                  "The Playwright Masterclass is outstanding. Rajesh explains complicated scenarios like multi-auth cookie sharing and grid parallel runs in a very clean way. Helped me transition from manual tester to SDET."
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-900 bg-zinc-950/80 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center font-bold text-indigo-400 text-xs">
                    AR
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-none">Anjali Rao</h4>
                    <span className="text-[10px] text-zinc-500 leading-none mt-1 block">QA Consultant</span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs font-light leading-relaxed italic">
                  "Before taking the API automation guide, I struggled with scripting inside Postman collections. Rajesh's lessons on environment setup and dynamic assertion validation saved me weeks of manual testing efforts."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
