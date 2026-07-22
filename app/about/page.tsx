"use client";

import { motion } from "framer-motion";

const values = [
  {
    imageSrc: "/images/value-design.png",
    imageAlt: "Design Excellence",
    title: "Design Excellence",
    text: "We believe user experience is king. We build beautiful visual systems, micro-animations, and polished interfaces that delight users.",
  },
  {
    imageSrc: "/images/value-[#2857ff].png",
    imageAlt: "Reliable Engineering",
    title: "Reliable Engineering",
    text: "Maintainable codebases, modern scalable stacks, and automated workflows ensure your platform performs seamlessly under heavy load.",
  },
  {
    imageSrc: "/images/value-partnership.png",
    imageAlt: "Growth Partnership",
    title: "Growth Partnership",
    text: "We do not just write code; we partner with your business leadership to advise on technical strategy, iteration, and scaling.",
  },
];

const milestones = [
  {
    year: "2021",
    title: "Agency Founded",
    description:
      "Started with a mission to bridge design and engineering for ambitious software startups.",
  },
  {
    year: "2022",
    title: "Expanded Core Team",
    description:
      "Grew into a full-service agency with dedicated UX researchers and cloud engineers.",
  },
  {
    year: "2024",
    title: "50+ Products Shipped",
    description:
      "Crossed over 50 global software deployments across SaaS, E-Commerce, and Healthcare.",
  },
  {
    year: "Present",
    title: "Next-Gen AI & Web Apps",
    description:
      "Integrating modern AI tools and high-performance frameworks into enterprise web solutions.",
  },
];

const teamMembers = [
  {
    imageSrc: "/images/team-1.png",
    imageAlt: "Lead Software Architect",
    name: "Alex Rivera",
    role: "Founder & Tech Lead",
    bio: "Passionate about React ecosystems, clean architecture, and product scalability.",
  },
  {
    imageSrc: "/images/team-2.png",
    imageAlt: "Head of Product Design",
    name: "Elena Rostova",
    role: "Head of UX/UI Design",
    bio: "Crafting intuitive user interfaces and cohesive design systems for over 8 years.",
  },
  {
    imageSrc: "/images/team-3.png",
    imageAlt: "Senior Full Stack Developer",
    name: "Marcus Vance",
    role: "Senior Full Stack Engineer",
    bio: "Specialist in Next.js, GraphQL, cloud infrastructure, and backend integrations.",
  },
];

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 space-y-28">
      {/* 1. HERO & MISSION SECTION */}
      <section className="grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            About AR Productions
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 leading-tight">
            We create digital products customers trust.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            AR Productions is a software studio dedicated to building
            high-impact digital experiences. We combine design intuition,
            scalable engineering, and commercial strategy to help companies
            innovate faster.
          </p>
        </motion.div>

        {/* Floating Mission Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="rounded-4xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xl shadow-slate-900/5 relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-500/5 blur-2xl"></div>

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2857ff]">
            Our Mission
          </p>
          <p className="mt-4 text-2xl font-bold text-slate-950 leading-snug">
            Deliver polished, modern software solutions that make engineering
            teams faster and customers happier.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-100 space-y-3 text-slate-600 font-medium">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2857ff]"></span>
              <p>Strategic product planning & user-led design</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2857ff]"></span>
              <p>High-performance web and mobile app development</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#2857ff]"></span>
              <p>Design systems and intuitive interface architecture</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. CORE VALUES GRID WITH IMAGE PLACEHOLDERS */}
      <section className="space-y-12">
        <motion.div
          className="text-center space-y-3 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
            Guided by principles of quality & innovation.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group rounded-4xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 flex flex-col justify-between"
            >
              <div>
                {/* Image Placeholder Box */}
                <div className="h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center p-3 mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-600 leading-7 text-sm">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. OUR JOURNEY / TIMELINE SECTION */}
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
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Building momentum year after year.
            </h2>
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            {milestones.map((m) => (
              <motion.div
                key={m.year}
                variants={fadeInUp}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#2857ff]">
                    {m.year}
                  </span>
                  <h4 className="mt-4 text-lg font-bold text-white">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-400 leading-6">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 4. TEAM / LEADERSHIP SECTION */}
      <section className="space-y-12">
        <motion.div
          className="text-center space-y-3 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            The Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-950">
            Meet the minds behind AR Productions.
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-4xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200"
            >
              <div className="h-64 w-full overflow-hidden rounded-3xl bg-slate-100 mb-6">
                <img
                  src={member.imageSrc}
                  alt={member.imageAlt}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-950">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-[#2857ff] mt-1">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-6">
                {member.bio}
              </p>
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
          Want to work with us?
        </h2>
        <p className="max-w-2xl mx-auto text-blue-100 text-lg">
          Whether you have a full product specification or just an idea, we are
          ready to build with you.
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
