import {
  ArrowRight,
  BarChart3,
  ChartNetwork,
  CloudUpload,
  Cloudy,
  Code,
  Code2,
  Layers,
  Link,
  Lock,
  ShieldCheck,
  User,
  Users,
  Zap,
} from "lucide-react";
import NextLink from "next/link";

export default function FeaturesPage() {
  return (
    <section id="features" className="relative overflow-hidden py-24">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Zap className="h-3 w-3" /> Capabilities
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
            More than just a dashboard. <br />
            <span className="text-blue-600">It is your command center.</span>
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Every feature is built to help teams ship faster, stay aligned, and scale without operational drag.
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="relative z-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">Real-time Analytics</h2>
              <p className="max-w-md text-slate-600">
                Track velocity, bottlenecks, and delivery health in one live operational view.
              </p>
            </div>
            <div className="absolute right-6 top-6 text-blue-100 transition-colors group-hover:text-blue-50">
              <Layers className="h-24 w-24 rotate-12 opacity-50" />
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-100 text-fuchsia-600">
              <Link className="h-6 w-6" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Seamless Integration</h2>
            <p className="mb-6 text-sm text-slate-600">
              Connect the tools your team already uses with a stable API and clear documentation.
            </p>
            <div className="absolute right-6 top-6 text-fuchsia-100 transition-colors group-hover:text-fuchsia-50">
              <ChartNetwork className="-rotate-12 h-24 w-24 opacity-60" />
            </div>
          </article>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Team Sync</h2>
            <p className="mb-6 text-sm text-slate-600">
              Comments, mentions, and task context keep communication in one place.
            </p>
            <div className="absolute right-6 top-6 text-purple-100 transition-colors group-hover:text-purple-50">
              <User className="-rotate-12 h-24 w-24 opacity-60" />
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Enterprise Security</h2>
            <p className="text-sm text-slate-600">
              SSO, 2FA, and audit trails provide security and compliance confidence at scale.
            </p>
            <div className="absolute right-6 top-6 text-emerald-100 transition-colors group-hover:text-emerald-50">
              <Lock className="-rotate-12 h-24 w-24 opacity-60" />
            </div>
          </article>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-blue-600">
              <Code className="h-6 w-6" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Developer Friendly</h2>
            <p className="mb-6 text-sm text-slate-600">SDKs and APIs are built for fast onboarding and reliable implementation.</p>
            <div className="absolute right-6 top-6 text-cyan-100 transition-colors group-hover:text-cyan-50">
              <Code2 className="-rotate-12 h-24 w-24 opacity-60" />
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
              <Cloudy className="h-6 w-6" />
            </div>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Cloud Native</h2>
            <p className="text-sm text-slate-600">Built on resilient infrastructure to support teams from startup to enterprise scale.</p>
            <div className="absolute right-6 top-6 text-indigo-100 transition-colors group-hover:text-indigo-50">
              <CloudUpload className="-rotate-12 h-24 w-24 opacity-60" />
            </div>
          </article>
        </div>

        <div className="mt-16 text-center">
          <NextLink
            href="/pricing"
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            View pricing plans <ArrowRight className="h-4 w-4" />
          </NextLink>
        </div>
      </div>
    </section>
  );
}
