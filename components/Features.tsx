import { Zap, Shield, BarChart3, Users, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-white font-extrabold" />,
    title: "Lightning Fast",
    description: "Optimized for speed so you can focus on work, not waiting for page loads.",
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Bank-Grade Security",
    description: "Your data is encrypted and protected with enterprise-level security protocols.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    title: "Real-time Analytics",
    description: "Track progress and performance with live dashboards and exportable reports.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Team Collaboration",
    description: "Built-in chat, comments, and tagging to keep everyone on the same page.",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    title: "Mobile First",
    description: "Fully responsive design that works perfectly on phones, tablets, and desktops.",
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Global CDN",
    description: "Servers distributed worldwide ensure low latency regardless of location.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Powerful Features</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything your team needs to move faster, stay aligned, and ship reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-sky-500 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Explore all capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
