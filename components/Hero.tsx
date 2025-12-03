import { ArrowRight, TrendingUp, User } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-6 text-center relative z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6 border border-blue-100">
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    ✨ Trusted by 500+ companies
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-snug">
                    Manage your team workflow <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
                        without the chaos.
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    Streamline projects, automate tasks, and hit deadlines with our all-in-one SaaS platform
                    designed for high-performing teams.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    <button className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                        Start Free Trial <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
                        View Demo
                    </button>
                </div>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row items-center justify-center mb-10 gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                        <User className="text-blue-500" /> +10K Users
                    </span>
                    <span className="flex items-center gap-2">
                        <TrendingUp className="text-green-500" /> 98% Satisfaction
                    </span>
                </div>

                {/* Dashboard preveiw */}
                <div className="flex justify-center">
                    <img
                        src="/dashboard.png"
                        className="w-full max-w-lg rounded-md shadow-md"
                        alt="dashboard preview"
                    />
                </div>
            </div>
        </section>
    );
}
