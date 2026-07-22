export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 space-y-16">
      <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            About AR Productions
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-950">
            We create digital products customers trust.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            AR Productions is a software company focused on meaningful product
            experiences. We combine design, engineering, and strategy to help
            businesses build technology that scales.
          </p>
        </div>
        <div className="rounded-4xl border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.06)]">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Our mission
          </p>
          <p className="mt-4 text-xl font-semibold text-slate-950">
            Deliver polished, modern software solutions that make teams faster
            and customers happier.
          </p>
          <ul className="mt-8 space-y-4 text-slate-600">
            <li>• Strategic product planning and user-led design.</li>
            <li>• Responsive web and mobile development.</li>
            <li>• Clean branding and intuitive digital experiences.</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Design Excellence",
            text: "Beautiful visual systems, motion, and polished interfaces.",
          },
          {
            title: "Reliable Engineering",
            text: "Maintainable code, scalable stacks, and robust deployment workflows.",
          },
          {
            title: "Growth Partnership",
            text: "Expert support from discovery through launch and iteration.",
          },
        ].map((item) => (
          <div key={item.title} className="glass-card rounded-4xl p-8">
            <h2 className="text-xl font-semibold text-slate-950">
              {item.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-7">{item.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
