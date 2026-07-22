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

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />

      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="space-y-4">
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
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {serviceItems.map((service) => (
              <div
                key={service.title}
                className="glass-card rounded-4xl p-7 card-fade"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-5">
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
          </div>

          <div className="grid gap-6">
            {workHighlights.map((work) => (
              <div
                key={work.title}
                className="glass-card rounded-4xl p-7 card-fade"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.06)]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
                Why choose us
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950">
                A dependable partner for design-driven software delivery.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                We help teams turn ambitious ideas into elegant digital products
                with strong user experiences, reliable engineering, and fast
                feedback loops.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5">
                <p className="text-lg font-semibold text-slate-950">
                  Fast delivery
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Structured planning and sprint-ready execution keep your
                  project on track.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5">
                <p className="text-lg font-semibold text-slate-950">
                  Trusted expertise
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Our experienced team supports every step, from discovery to
                  launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
