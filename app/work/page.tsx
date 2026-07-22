const projects = [
  {
    title: "SaaS Workflow Platform",
    description:
      "Automated process orchestration for a fast-scaling software business.",
  },
  {
    title: "Direct-to-Consumer App",
    description:
      "Modern commerce experience with frictionless onboarding and checkout.",
  },
  {
    title: "Healthcare Intelligence Dashboard",
    description:
      "Secure analytics and patient engagement tools for care teams.",
  },
];

export default function WorkPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 space-y-16">
      <section className="space-y-5">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
          Case studies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-950">
          Featured projects that showcase our work.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          A selection of initiatives where we delivered design, development, and
          business value for clients across sectors.
        </p>
      </section>

      <section className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card rounded-4xl p-8 card-fade"
          >
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
              Project
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">
              {project.title}
            </h2>
            <p className="mt-4 text-slate-600 leading-7">
              {project.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
