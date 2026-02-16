"use client"; // Required for useState and onClick events

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = "mobile-navigation";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* --- Logo --- */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-slate-900"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
            NexaFlow
          </span>
        </Link>

                {/* --- Desktop Navigation (Hidden on Mobile) --- */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/features" className="hover:text-blue-600">Features</Link>
          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

                {/* --- Desktop CTA Buttons (Hidden on Mobile) --- */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Get Started
          </Link>
        </div>

                {/* --- Mobile Menu Toggle Button --- */}
        <button
          type="button"
          className="p-2 text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

            {/* --- Mobile Menu Dropdown --- */}
      {isMobileMenuOpen && (
        <div
          id={mobileMenuId}
          className="absolute left-0 top-16 flex w-full flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 shadow-xl md:hidden"
        >

                    {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-4 text-base font-medium text-slate-600">
            <Link href="/features" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </Link>
            <Link href="/pricing" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="/about" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          <hr className="border-slate-100" />

                    {/* Mobile CTA Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              href="/login"
              className="py-2 text-center font-medium text-slate-600 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-blue-600 py-3 text-center font-medium text-white shadow-sm hover:bg-blue-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
