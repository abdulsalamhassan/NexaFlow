import FAQ from "@/components/Faq";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-28">
      <div className="container mx-auto mb-10 px-6">
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Simple, Transparent Pricing</h1>
          <p className="mt-3 text-lg text-slate-600">Choose the plan that fits your team stage and growth.</p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all hover:shadow-xl">
            <h2 className="text-xl font-semibold text-slate-900">Starter</h2>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-600">/mo</span>
            </div>
            <p className="mt-4 text-slate-600">Ideal for individuals and early experimentation.</p>
            <button className="mt-8 w-full rounded-xl bg-slate-100 py-3 font-semibold text-slate-900 shadow-sm hover:bg-slate-200">
              Get Started
            </button>
            <ul className="mt-8 space-y-4 text-slate-700">
              {["1 User", "5 Projects", "Community Support"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative scale-105 rounded-3xl border border-indigo-600 bg-gradient-to-br from-sky-700 to-blue-700 p-10 text-white shadow-2xl">
            <div className="absolute -right-2 -top-3 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold">POPULAR</div>
            <h2 className="text-xl font-semibold">Pro</h2>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold">$29</span>
              <span className="text-blue-200">/mo</span>
            </div>
            <p className="mt-4 text-blue-100">Great for fast-moving teams and startups.</p>
            <button className="mt-8 w-full rounded-xl bg-white py-3 font-semibold text-indigo-700 shadow-xl hover:opacity-90">
              Start Free Trial
            </button>
            <ul className="mt-8 space-y-4 text-blue-100">
              {["Up to 10 Users", "Unlimited Projects", "Priority Support", "Analytics Dashboard"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-blue-300" /> {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-white p-10 shadow-lg transition-all hover:shadow-xl">
            <h2 className="text-xl font-semibold text-slate-900">Enterprise</h2>
            <div className="mt-5 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-slate-900">$99</span>
              <span className="text-slate-600">/mo</span>
            </div>
            <p className="mt-4 text-slate-600">Built for larger organizations with advanced requirements.</p>
            <button className="mt-8 w-full rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-900 shadow-sm hover:bg-slate-50">
              Contact Sales
            </button>
            <ul className="mt-8 space-y-4 text-slate-700">
              {["Unlimited Users", "Advanced Security & SSO", "Custom Integrations", "Dedicated Account Manager"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
      <FAQ />
    </section>
  );
}
