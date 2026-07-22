"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "SaaS", "E-Commerce", "Healthcare"];

const projects = [
  {
    title: "SaaS Workflow Platform",
    category: "SaaS",
    description:
      "Automated process orchestration for a fast-scaling software business, reducing manual operations and speeding up task turnaround.",
    imageSrc: "/images/project-1.png",
    imageAlt: "SaaS Workflow Platform Preview",
    stats: { label: "Efficiency Boost", value: "+45%" },
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Direct-to-Consumer App",
    category: "E-Commerce",
    description:
      "Modern commerce experience with frictionless onboarding, hyper-fast page loads, and dynamic cart checkout optimization.",
    imageSrc: "/images/project-2.png",
    imageAlt: "Direct-to-Consumer App Preview",
    stats: { label: "Conversion Increase", value: "+140%" },
    tags: ["React Native", "Shopify API", "Framer Motion"],
  },
  {
    title: "Healthcare Intelligence Dashboard",
    category: "Healthcare",
    description:
      "HIPAA-compliant analytics dashboard providing care teams with real-time patient engagement insights and diagnostic monitoring.",
    imageSrc: "/images/project-3.png",
    imageAlt: "Healthcare Intelligence Dashboard Preview",
    stats: { label: "Daily Active Users", value: "50k+" },
    tags: ["Next.js", "Python", "Tailwind", "AWS"],
  },
  {
    title: "Fintech Mobile Wallet",
    category: "SaaS",
    description:
      "A streamlined payment and digital asset management platform engineered with multi-layer encryption and biometrics.",
    imageSrc: "/images/project-4.png",
    imageAlt: "Fintech Mobile Wallet Preview",
    stats: { label: "Transactions Processed", value: "$2M+" },
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
];

const testimonials = [
  {
    quote:
      "AR Productions turned our complex technical vision into a sleek, high-performing product. The speed of delivery was unbelievable.",
    author: "Sarah Jenkins",
    role: "VP of Product, SaaSify",
  },
  {
    quote:
      "Their design and engineering team felt like a true extension of our own. Our checkout conversion skyrocketed post-launch.",
    author: "David Chen",
    role: "Founder, RetailGo",
  },
];

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="max-w-7xl mx-auto px-6 py-24 space-y-28">
      {/* 1. HERO SECTION */}
      <section className="space-y-8">
        <motion.div
          className="space-y-5 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            Case Studies
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 leading-tight">
            Featured projects that deliver measurable results.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Explore a selection of our recent partnerships where we combined
            strategy, UX design, and scalable engineering to power business
            growth.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 pt-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-slate-950 text-white shadow-lg"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* 2. DYNAMIC PROJECT GRID */}
      <section>
        <motion.div
          layout
          className="grid gap-10 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group rounded-4xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Hover Scale */}
                  <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-slate-100 mb-6">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Stat Badge Over Image */}
                    <div className="absolute top-4 right-4 rounded-2xl bg-white/90 backdrop-blur-md px-4 py-2 border border-slate-200/50 shadow-sm">
                      <p className="text-xs text-slate-500 font-medium">
                        {project.stats.label}
                      </p>
                      <p className="text-base font-bold text-[#2857ff]">
                        {project.stats.value}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2857ff]">
                    {project.category}
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-slate-600 leading-7 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 group-hover:bg-blue-50 group-hover:text-[#2857ff] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 3. IMPACT NUMBERS BANNER */}
      <section className="bg-slate-950 rounded-4xl p-8 sm:p-14 text-white relative overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#2857ff]/20 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <motion.div
          className="relative space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
              By The Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Engineering impact across industries.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 pt-4 border-t border-slate-800">
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-[#2857ff]">
                99.9%
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Uptime maintained across deployed production systems.
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-[#2857ff]">
                10+
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Digital products successfully launched globally.
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-extrabold text-[#2857ff]">
                $10M+
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Client revenue driven through platforms we engineered.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. CLIENT TESTIMONIALS SECTION */}
      <section className="space-y-12 max-w-5xl mx-auto">
        <motion.div
          className="text-center space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
            What our partners say.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="rounded-4xl border border-slate-200/80 bg-white p-8 shadow-sm flex flex-col justify-between"
            >
              <p className="text-slate-600 leading-8 italic">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="font-bold text-slate-950">{t.author}</p>
                <p className="text-xs text-slate-500 font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. CALL TO ACTION BANNER (WITH BLACK BUTTON) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="rounded-4xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 sm:p-16 text-center text-white shadow-xl shadow-blue-500/10 space-y-6"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold">
          Have a project in mind?
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          Let’s discuss how we can bring your next digital product to life with
          speed and precision.
        </p>
        <div>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-bold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-slate-900 border border-slate-800"
          >
            Start a Project
          </a>
        </div>
      </motion.section>
    </main>
  );
}
