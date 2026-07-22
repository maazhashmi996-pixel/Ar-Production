"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-20 w-34 rounded-2xl overflow-hidden ">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative inline-flex items-center gap-1"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-[#ff7a18] to-[#ff9a4d] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white accent-btn shadow-lg shadow-orange-200/50"
          >
            Get Quote
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-slate-950 rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-slate-950 rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-slate-950 rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/70"
          >
            <nav className="flex flex-col gap-3 px-6 py-4 text-slate-700 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-blue-50 hover:text-[#2857ff] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold text-center shadow-lg shadow-orange-200/50 hover:shadow-orange-300/60 transition-all"
              >
                Get Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
