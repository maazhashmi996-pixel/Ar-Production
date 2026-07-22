"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    imageSrc: "/softwareDevelopment.jpg",
    imageAlt: "Custom Software Development",
    title: "Custom Software Development",
    description:
      "High-quality web and mobile applications with secure, enterprise-grade architecture, scalable backends, and modern interfaces.",
    tags: ["React / Next.js", "TypeScript", "Node.js", "REST & GraphQL"],
  },
  {
    imageSrc: "/uiDesign.jpg",
    imageAlt: "UX/UI & Product Design",
    title: "UX/UI & Product Design",
    description:
      "User-centered design systems, interactive prototypes, branding guidelines, and polished visual experiences built for conversions.",
    tags: ["Figma", "Design Systems", "Wireframing", "Prototyping"],
  },
  {
    imageSrc: "/cloud.jpg",
    imageAlt: "Cloud & System Integration",
    title: "Cloud & System Integration",
    description:
      "Scalable cloud deployments, third-party API integrations, database optimization, and CI/CD automated pipeline configuration.",
    tags: ["AWS", "Vercel", "Docker", "Database Tuning"],
  },
  {
    imageSrc: "/maintaince.jpg",
    imageAlt: "Maintenance & Product Growth",
    title: "Maintenance & Product Growth",
    description:
      "Ongoing post-launch optimization, continuous security patching, performance audits, and iterative feature development.",
    tags: ["24/7 Monitoring", "Analytics", "Feature Sprints", "SEO"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Product Strategy",
    description:
      "We dive deep into your business goals, target audience, and market requirements to map out a clear technical roadmap.",
  },
  {
    number: "02",
    title: "UX/UI Design & Prototyping",
    description:
      "Our designers turn requirements into clickable, high-fidelity prototypes to test user flows before writing a single line of code.",
  },
  {
    number: "03",
    title: "Agile Engineering & Testing",
    description:
      "We build your product in rapid two-week sprints with continuous deployment and automated QA testing for peak stability.",
  },
  {
    number: "04",
    title: "Launch, Handoff & Scaling",
    description:
      "We deploy your solution to secure production environments, provide full team training, and support ongoing feature growth.",
  },
];

const faqs = [
  {
    question: "How long does a typical software project take?",
    answer:
      "Most custom web application projects take between 6 to 12 weeks from discovery to launch, depending on complexity and feature scope.",
  },
  {
    question: "Do you offer ongoing maintenance after project delivery?",
    answer:
      "Yes! We offer dedicated post-launch support retainers covering performance monitoring, security updates, and new feature iterations.",
  },
  {
    question: "Can you work with our existing codebase and team?",
    answer:
      "Absolutely. We frequently augment existing internal dev teams or perform full code reviews and refactoring on existing software systems.",
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

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-24 space-y-28">
      {/* 1. HERO & CORE SERVICES GRID */}
      <section className="space-y-16">
        <motion.div
          className="space-y-5 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            Our Capabilities
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 leading-tight">
            Comprehensive software services built for scale.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            AR Productions partners with ambitious businesses to engineer
            digital products, elevate brand design, and accelerate market
            delivery.
          </p>
        </motion.div>

        {/* Service Cards with Custom Image Container */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-4xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 flex flex-col justify-between"
            >
              <div>
                {/* Image Placeholder Box */}
                <div className="relative h-26 w-26 rounded-2xl flex items-center justify-center p-3 mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-slate-950">
                  {service.title}
                </h2>
                <p className="mt-4 text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>

              {/* Technology Tags */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
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
        </motion.div>
      </section>

      {/* 2. STEP-BY-STEP PROCESS SECTION */}
      <section className="bg-slate-950 rounded-4xl p-8 sm:p-14 text-white overflow-hidden relative">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#2857ff]/20 blur-3xl"></div>
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"></div>

        <motion.div
          className="relative space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Our proven software delivery process.
            </h2>
            <p className="text-slate-400">
              We eliminate technical uncertainty with a transparent, structured
              workflow.
            </p>
          </div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <span className="text-3xl font-black text-[#2857ff]">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-6">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 3. INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto space-y-12">
        <motion.div
          className="text-center space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
            Everything you need to know.
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="rounded-3xl border border-slate-200/80 bg-white overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left font-bold text-slate-950 text-lg hover:text-[#2857ff] transition-colors"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-2xl font-light text-slate-400">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-600 text-sm leading-7 border-t border-slate-100 pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. CALL TO ACTION BANNER (WITH BLACK BUTTON) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="rounded-4xl bg-gradient-to-r from-blue-600 to-indigo-700 p-10 sm:p-16 text-center text-white shadow-xl shadow-blue-500/10 space-y-6"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold">
          Ready to build your next product?
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          Get in touch with our team today to discuss your project scope and
          request a free quote.
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
