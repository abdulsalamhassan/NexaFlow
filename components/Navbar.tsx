"use client"; // Required for useState and onClick events

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* --- Logo --- */}
                <Link
                    href="/"
                    className="text-2xl font-bold text-blue-600 flex items-center gap-2 bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 "
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div className="flex items-center justify-center text-white bg-blue-500 rounded-lg w-8 h-8">
                        <Zap className="w-5 h-5 fill-current" />
                    </div>
                    NexaFlow
                </Link>

                {/* --- Desktop Navigation (Hidden on Mobile) --- */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <Link href="/features" className="hover:text-blue-600 transition-colors">Features</Link>
                    <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
                    <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                </nav>

                {/* --- Desktop CTA Buttons (Hidden on Mobile) --- */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                        Log in
                    </Link>
                    <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started
                    </Link>
                </div>

                {/* --- Mobile Menu Toggle Button --- */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* --- Mobile Menu Dropdown --- */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">

                    {/* Mobile Nav Links */}
                    <nav className="flex flex-col gap-4 text-base font-medium text-slate-600">
                        <Link
                            href="/features"
                            className="hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#pricing"
                            className="hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>

                    <hr className="border-slate-100" />

                    {/* Mobile CTA Buttons */}
                    <div className="flex flex-col gap-3">
                        <Link
                            href="/login"
                            className="text-center py-2 text-slate-600 font-medium hover:text-slate-900"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Log in
                        </Link>
                        <Link
                            href="/signup"
                            className="text-center py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
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