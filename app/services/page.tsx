const services = [
  {
    title: "Custom Software Development",
    description:
      "High-quality applications with secure architecture and modern interfaces.",
  },
  {
    title: "UX/UI & Product Design",
    description:
      "User-centered design, branding, and polished product experiences.",
  },
  {
    title: "Cloud & Integration",
    description:
      "Scalable deployments, API integrations, and performance tuning.",
  },
  {
    title: "Support & Growth",
    description: "Ongoing optimization, analytics, and feature delivery.",
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 space-y-14">
      <section className="space-y-5">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
          Our services
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-950">
          A full-service software studio for digital product teams.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          AR Productions helps companies build better products with a complete
          service offering across design, engineering, and business strategy.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="glass-card rounded-4xl p-8 card-fade"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Service
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">
              {service.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center rounded-4xl border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.05)]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            Project approach
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">
            From discovery to delivery, every step is tailored to your goals.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We work closely with stakeholders to define requirements, validate
            ideas, and deliver software that meets business outcomes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Discovery & research",
            "Design and prototyping",
            "Agile development",
            "Launch and support",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5"
            >
              <p className="text-sm text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
