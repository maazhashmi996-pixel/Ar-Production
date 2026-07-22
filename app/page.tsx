"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";

const serviceItems = [
  {
    title: "Digital Product Strategy",
    description:
      "Product roadmaps, UX research, and launch planning for ambitious software teams.",
  },
  {
    title: "Custom Web & Mobile Apps",
    description:
      "Robust applications built with modern React, Next.js, and mobile-friendly experiences.",
  },
  {
    title: "Branding & Visual Design",
    description:
      "Professional brand systems, motion, and interface design that elevate your market presence.",
  },
];

const workHighlights = [
  {
    title: "Enterprise Platform",
    subtitle: "Workflow automation for a fast-growing SaaS provider.",
  },
  {
    title: "E-Commerce Growth",
    subtitle: "Conversion-driven storefront delivered in under 10 weeks.",
  },
  {
    title: "Modern Healthcare App",
    subtitle: "Secure patient portal and analytics dashboard.",
  },
];

const whyChooseUsFeatures = [
  {
    title: "Fast Delivery & Agile Sprints",
    description:
      "Structured planning and sprint-ready execution keep your project moving rapidly without compromising code quality.",
  },
  {
    title: "Trusted Engineering Expertise",
    description:
      "Our senior team supports every phase—from modern architecture setup to final cloud deployment.",
  },
  {
    title: "Design-Driven Products",
    description:
      "We build pixel-perfect user interfaces engineered to convert visitors into loyal customers.",
  },
  {
    title: "Transparent Communication",
    description:
      "Direct communication loops with dedicated developers and weekly progress updates.",
  },
];

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />

      {/* 1. SERVICES SECTION */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
              Our services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              End-to-end software services for modern teams.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              From product strategy to launch, AR Productions partners with
              companies to build digital products that feel premium, perform
              reliably, and drive growth.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {serviceItems.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card rounded-4xl p-7 card-fade transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer border border-slate-200/60 bg-white/80 backdrop-blur-md"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Service
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED WORK SECTION */}
      <section className="bg-[#f8fbff] py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div
            className="space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
              Featured work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
              Recent projects with measurable impact.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              We combine visual clarity, scalable engineering, and strong
              project leadership to deliver products that perform for customers
              and stakeholders.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {workHighlights.map((work) => (
              <motion.div
                key={work.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="glass-card rounded-4xl p-7 card-fade transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer border border-slate-200/60 bg-white/80 backdrop-blur-md"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {work.title}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">
                  {work.subtitle}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  A polished solution designed to improve user adoption and
                  business outcomes.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US SECTION (EXPANDED TO FILL FULL PAGE) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
              Why choose us
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-950">
              A dependable partner for design-driven software delivery.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              We help teams turn ambitious ideas into elegant digital products
              with strong user experiences, reliable engineering, and fast
              feedback loops.
            </p>
          </div>

          {/* 4-Card Grid covering full width */}
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            {whyChooseUsFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-4xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#2857ff] flex items-center justify-center font-bold text-xl mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
