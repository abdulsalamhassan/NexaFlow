import {
    Zap,
    ShieldCheck,
    BarChart3,
    Users,
    Layers,
    Smartphone,
    ArrowRight,
    Code2,
    Lock,
    Globe,
    Link,
    Code,
    User,
    ChartNetwork,
    CloudUpload,
    Cloudy
} from "lucide-react";
import React from "react";

export default function Features() {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-blue-100 to-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* --- Section Header --- */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                        <Zap className="w-3 h-3" /> Capabilities
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        More than just a dashboard. <br />
                        <span className="text-blue-600">It’s your command center.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We've engineered every detail to help you ship faster. From real-time collaboration to automated workflows, NexaFlow handles the heavy lifting.
                    </p>
                </div>

                {/* --- Primary Bento Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 justify-center">
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <BarChart3 className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">Real-time Analytics</h3>
                            <p className="text-slate-600 max-w-md">
                                Visualize your team's velocity with precision. Our engine processes data instantly to give you actionable insights without the wait.
                            </p>
                        </div>
                        <div>
                            <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-50 transition-colors">
                                <Layers className="w-24 h-24 opacity-50 rotate-12" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="w-12 h-12 bg-fuchsia-100 rounded-xl flex items-center justify-center mb-6 text-fuchsia-600">
                            <Link className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Seamless Integration</h3>
                        <p className="text-slate-600 text-sm mb-6">
                           Connect with your favorite tools and services. Our API makes integration a breeze.
                        </p>
                        <div className="absolute top-6 right-6 text-fuchsia-100 group-hover:text-fuchsia-50 transition-colors">
                            {/* <Lock className="w-24 h-24 opacity-60 -rotate-12" /> */}
                            <ChartNetwork className="w-24 h-24 opacity-60 -rotate-12" />
                        </div>
                    </div>
                </div>

                {/* --- Secondary Bento Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Feature 3: Collaboration */}
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Team Sync</h3>
                        <p className="text-slate-600 text-sm mb-6">
                            Built-in comments, tagging, and threads keep everyone aligned without Slack overload.
                        </p>
                        <div className="absolute top-6 right-6 text-purple-100 group-hover:text-purple-50 transition-colors">
                            {/* <Lock className="w-24 h-24 opacity-60 -rotate-12" /> */}
                            <User className="w-24 h-24 opacity-60 -rotate-12" />
                        </div>
                    </div>

                    {/* Feature 4: Security */}
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise Security</h3>
                        <p className="text-slate-600 text-sm">
                            SSO, 2FA, and Audit Logs come standard. We are SOC2 Type II compliant and GDPR ready.
                        </p>
                        <div className="absolute top-6 right-6 text-emerald-100 group-hover:text-emerald-50 transition-colors">
                            <Lock className="w-24 h-24 opacity-60 -rotate-12" />
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                    {/* Feature 3: Collaboration */}
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="w-12 h-12 bg-cyan-200 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Developer Friendly</h3>
                        <p className="text-slate-600 text-sm mb-6">
                           Comprehensive documentation and SDKs for all major programming languages and frameworks.
                        </p>
                        <div className="absolute top-6 right-6 text-cyan-100 group-hover:text-cyan-50 transition-colors">
                            {/* <Lock className="w-24 h-24 opacity-60 -rotate-12" /> */}
                            <Code2 className="w-24 h-24 opacity-60 -rotate-12" />
                        </div>
                    </div>

                    {/* Feature 4: Security */}
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                            <Cloudy className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Cloud Native</h3>
                        <p className="text-slate-600 text-sm">
                           Built on modern cloud infrastructure for maximum scalability and reliability.
                        </p>
                        <div className="absolute top-6 right-6 text-indigo-100 group-hover:text-indigo-50 transition-colors">
                            <CloudUpload className="w-24 h-24 opacity-60 -rotate-12" />
                        </div>
                    </div>

                </div>

                {/* --- Bottom CTA Text --- */}
                <div className="mt-16 text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                        See all features <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>


        </section>
    );
}