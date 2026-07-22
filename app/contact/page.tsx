export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <section className="rounded-4xl border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.06)]">
        <div className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2857ff]">
            Get in touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-950">
            Ready to build your next software product?
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Share your project goals and we’ll connect to discuss how AR
            Productions can help you ship a stronger solution.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6 rounded-4xl bg-[#f8fbff] p-8">
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                hello@arproductions.com
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Phone</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                +1 (555) 123-4567
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Office</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                New York, USA
              </p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#2857ff]"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#2857ff]"
              />
            </div>
            <input
              type="text"
              placeholder="Company name"
              className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#2857ff]"
            />
            <textarea
              placeholder="Tell us about your project"
              rows={5}
              className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-[#2857ff]"
            ></textarea>
            <button
              type="submit"
              className="accent-btn inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-semibold shadow-lg shadow-orange-200/30"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
