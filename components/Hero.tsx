import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="absolute -top-6 left-0 h-[420px] w-[420px] rounded-full bg-blue-200/45 blur-3xl -z-10" />

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-700">
          <span className="inline-flex h-2 w-2 rounded-full bg-blue-500" />
          Trusted by 500+ companies
        </div>

        <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
          Manage your team workflow <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
            without the chaos.
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600 md:text-xl">
          Streamline projects, automate repetitive work, and deliver faster with one platform built for high-performing teams.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features"
            className="rounded-xl border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            View Demo
          </Link>
        </div>

        <div className="mb-12 flex flex-col items-center justify-center gap-6 text-sm text-slate-500 sm:flex-row">
          <span className="flex items-center gap-2">
            <User className="text-blue-500" /> 10K+ Users
          </span>
          <span className="flex items-center gap-2">
            <TrendingUp className="text-green-500" /> 98% Satisfaction
          </span>
        </div>

        <div className="flex justify-center">
          <Image
            src="/dashboard.png"
            width={1100}
            height={660}
            className="h-auto w-full max-w-4xl rounded-2xl border border-slate-200 shadow-xl shadow-slate-300/30"
            alt="NexaFlow dashboard preview"
            priority
          />
        </div>
      </div>
    </section>
  );
}

