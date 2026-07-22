import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-20 w-32 rounded-2xl overflow-hidden ">
            <Image
              src="/logo.png"
              alt="AR Productions Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] ">
              AR Productions
            </p>
            <p className="text-xs text-slate-500">
              Software & Digital Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-700 font-medium">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-1"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#ff7a18] to-[#ff9a4d] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-1"
          >
            Services
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#ff7a18] to-[#ff9a4d] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/work"
            className="group relative inline-flex items-center gap-1"
          >
            Work
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#ff7a18] to-[#ff9a4d] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-1"
          >
            About
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#ff7a18] to-[#ff9a4d] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-1"
          >
            Contact
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#ff7a18] to-[#ff9a4d] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white accent-btn shadow-lg shadow-orange-200/50"
        >
          Get Quote
        </Link>
      </div>
    </header>
  );
}
