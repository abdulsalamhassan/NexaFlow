import { Check } from "lucide-react";

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple Pricing</h2>
                    <p className="text-slate-600">No credit card required to start.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Starter Plan */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-slate-900">$0</span>
                            <span className="text-slate-600">/mo</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-600">Perfect for individuals and hobbyists.</p>
                        <button className="mt-6 w-full py-2.5 px-4 bg-slate-100 text-slate-900 font-medium rounded-lg hover:bg-slate-200 transition-colors">
                            Get Started
                        </button>
                        <ul className="mt-8 space-y-4 text-sm text-slate-600">
                            {['1 User', '5 Projects', 'Community Support'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <Check className="w-4 h-4 text-green-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pro Plan (Highlighted) */}
                    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative shadow-2xl">
                        <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                            POPULAR
                        </div>
                        <h3 className="text-lg font-semibold text-white">Pro</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-white">$29</span>
                            <span className="text-slate-400">/mo</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-400">For growing teams and startups.</p>
                        <button className="mt-6 w-full py-2.5 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20">
                            Start Free Trial
                        </button>
                        <ul className="mt-8 space-y-4 text-sm text-slate-300">
                            {['Up to 10 Users', 'Unlimited Projects', 'Priority Support', 'Analytics Dashboard'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <Check className="w-4 h-4 text-blue-400" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-900">Enterprise</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-bold text-slate-900">$99</span>
                            <span className="text-slate-600">/mo</span>
                        </div>
                        <p className="mt-4 text-sm text-slate-600">For large scale organizations.</p>
                        <button className="mt-6 w-full py-2.5 px-4 bg-white border border-slate-200 text-slate-900 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                            Contact Sales
                        </button>
                        <ul className="mt-8 space-y-4 text-sm text-slate-600">
                            {['Unlimited Users', 'SSO & Advanced Security', 'Custom Integrations', 'Dedicated Account Manager'].map((item) => (
                                <li key={item} className="flex items-center gap-3">
                                    <Check className="w-4 h-4 text-green-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}