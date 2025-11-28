import { ArrowRight, TrendingUp, User } from "lucide-react";

export default function Hero() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-6 border border-blue-100">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    ✨ Trusted by 500+ companies
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto">
                    Manage your team workflow <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
                        without the chaos.
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                    Streamline projects, automate tasks, and hit your deadlines with our all-in-one SaaS platform designed for high-performing teams.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                    <button className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                        Start Free Trial <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-8 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
                        View Demo
                    </button>

                </div>
                <div className="flex items-center justify-center mb-10 gap-3 text-sm text-slate-500 space-x-7">
                     <span className="flex items-center space-x-2"><User className="text-blue-500 font-extrabold"/> +10K Users</span>
                     <span className="flex items-center "><TrendingUp className="text-green-500 font-extrabold mx-2" /> 98% Satisfaction</span>
                </div>
               
                {/* Dashboard Mockup Placeholder */}
                <div className="relative mx-auto max-w-5xl rounded-xl bg-slate-900/5 p-2 ring-1 ring-slate-900/10 lg:rounded-2xl lg:p-4">
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden aspect-[16/9] border border-slate-200 flex items-center justify-center text-slate-400 bg-slate-50">
                        {/* Replace this div with your <Image /> from Figma export */}
                        <span className="text-lg font-medium">Dashboard Preview Image</span>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(37,99,235,0.1)] opacity-50 blur-[80px]"></div>
            </div>
        </section>
    );
}