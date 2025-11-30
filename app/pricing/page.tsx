import FAQ from "@/components/Faq";
import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section className="py-28 bg-gradient-to-b from-white to-slate-100">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">
                        Choose the perfect plan for your needs.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                    {/* Starter */}
                    <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                        <h3 className="text-xl font-semibold text-slate-900">Starter</h3>

                        <div className="mt-5 flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold text-slate-900">$0</span>
                            <span className="text-slate-600">/mo</span>
                        </div>

                        <p className="mt-4 text-slate-600">
                            Ideal for individuals and hobby projects.
                        </p>

                        <button className="mt-8 w-full py-3 rounded-xl bg-slate-100 text-slate-900 font-semibold hover:bg-slate-200 transition shadow-sm">
                            Get Started
                        </button>

                        <ul className="mt-8 space-y-4 text-slate-700">
                            {["1 User", "5 Projects", "Community Support"].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* PRO (Featured) */}
                    <div className="bg-gradient-to-br from-sky-700 to-blue-700 p-10 rounded-3xl shadow-2xl text-white transform scale-105 border border-indigo-600">

                        <div className="absolute -mt-3 right-1 px-3 py-1 bg-blue-500 text-xs font-bold rounded-full">
                            POPULAR
                        </div>

                        <h3 className="text-xl font-semibold">Pro</h3>

                        <div className="mt-5 flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold">$29</span>
                            <span className="text-blue-200">/mo</span>
                        </div>

                        <p className="mt-4 text-blue-200">
                            Great for teams, startups, and growing businesses.
                        </p>

                        <button className="mt-8 w-full py-3 rounded-xl bg-white text-indigo-700 font-semibold hover:opacity-90 transition shadow-xl">
                            Start Free Trial
                        </button>

                        <ul className="mt-8 space-y-4 text-blue-100">
                            {[
                                "Up to 10 Users",
                                "Unlimited Projects",
                                "Priority Support",
                                "Analytics Dashboard",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-blue-300" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ENTERPRISE */}
                    <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl transition-all">
                        <h3 className="text-xl font-semibold text-slate-900">Enterprise</h3>

                        <div className="mt-5 flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold text-slate-900">$99</span>
                            <span className="text-slate-600">/mo</span>
                        </div>

                        <p className="mt-4 text-slate-600">
                            Built for large organizations with advanced needs.
                        </p>

                        <button className="mt-8 w-full py-3 rounded-xl bg-white border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50 transition shadow-sm">
                            Contact Sales
                        </button>

                        <ul className="mt-8 space-y-4 text-slate-700">
                            {[
                                "Unlimited Users",
                                "Advanced Security & SSO",
                                "Custom Integrations",
                                "Dedicated Account Manager",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
            <FAQ />
        </section>
    );
}
