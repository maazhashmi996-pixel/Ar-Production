"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const headingText =
    "We Build Modern Software Experiences for Ambitious Businesses.";
  const words = headingText.split(" ");

  // Container variants to control stagger timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="hero-bg py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="space-y-6 animate-fade-in">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            IT Services
          </span>

          {/* Staggered Animated Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-950 flex flex-wrap gap-x-[0.25em] gap-y-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            AR Productions delivers polished design, reliable development, and
            product strategy for fast-growing companies. We help teams launch
            apps, platforms, and brands that customers love.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="accent-btn inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg shadow-orange-200/40 transition duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="secondary-btn inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-slate-700 transition duration-300 hover:bg-slate-50"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 inline-flex flex-wrap items-center gap-4 rounded-full border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
            <div className="rounded-full bg-[#2857ff] px-3 py-1 text-sm font-semibold text-white">
              17K+
            </div>
            <p className="text-sm text-slate-600">
              Trusted partner for digital transformation and enterprise
              projects.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 top-10 h-48 w-48 rounded-full bg-[#2857ff]/10 blur-3xl"></div>
          <div className="absolute -left-6 bottom-8 h-36 w-36 rounded-full bg-[#ff7a18]/10 blur-3xl"></div>
          <div className="relative glass-card overflow-hidden rounded-4xl animate-float-up">
            <div className="relative h-130 w-full">
              <Image
                src="/heroSection.jpg"
                alt="AR Productions hero image"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
