"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ArticleTabs } from "./ArticleTabs";
import { mockArticles } from "@/lib/data/articles-data";
import Link from "next/link";

export function ArticlesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
          
          {/* Animated background glow */}
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative p-8 md:p-12">
            {/* Header Section */}
            <div className="grid lg:grid-cols-12 gap-8 mb-8">
              {/* Left: Title & Description */}
              <div className="lg:col-span-5 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 dark:border-primary/30"
                >
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">AI-Curated Insights</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Top Articles on{" "}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Home Buying
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                >
                  Read from Beginner checklists to Pro Tips
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-6 pt-4"
                >
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">50+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expert Articles</p>
                  </div>
                  <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">95%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">AI Accuracy</p>
                  </div>
                  <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">Daily</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Updates</p>
                  </div>
                </motion.div>
              </div>

              {/* Right: Articles Grid */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ArticleTabs articles={mockArticles} />
                </motion.div>
              </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <Link
                href="/news"
                className="group inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-300"
              >
                <span className="relative">
                  Read realty news, guides & articles
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>

              {/* Circular Arrow Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 dark:border-primary/30 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5 text-primary" />
              </motion.button>
            </motion.div>
          </div>

          {/* Hover glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary-rgb), 0.1), transparent 50%)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
