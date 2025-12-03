import { Zap, Shield, BarChart3, Users, Smartphone, Globe } from "lucide-react";

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
    <section id="features" className="py-24 bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Powerful Features</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Everything you need to manage your business, wrapped in a beautiful interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl border border-slate-100 bg-white hover:bg-blue-100 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-100 transition-all duration-300">
              <div className="w-12 h-12 bg-sky-400 rounded-lg border border-slate-200 flex items-center justify-center mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}