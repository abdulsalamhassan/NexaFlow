import Image from "next/image";
import { Heart, Rocket, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-white py-24" id="about">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 md:text-6xl">About NexaFlow</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg italic leading-relaxed text-slate-600 md:text-xl">
            We are building a faster, clearer way for teams to plan, collaborate, and deliver meaningful work.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
              Our Story
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-700">
              Founded in 2020, NexaFlow started with a small team of builders focused on reducing operational friction.
              Today, teams across industries use NexaFlow to simplify workflows and ship with confidence.
            </p>

            <h2 className="mb-2 text-3xl font-bold text-blue-700">Our Mission</h2>
            <p className="text-lg leading-relaxed text-slate-700">
              We empower organizations with scalable tools that improve efficiency, accelerate outcomes, and create lasting value.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/about.svg"
              alt="Team collaboration illustration"
              width={520}
              height={420}
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>

      <h2 className="mt-24 text-center text-4xl font-extrabold text-blue-700">Our Values</h2>
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-4">
        <article className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="rounded-xl bg-sky-500 p-3 text-white shadow">
              <Target size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Mission Driven</h3>
          </div>
          <p className="text-base leading-relaxed text-slate-700">We build technology that creates measurable impact.</p>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="rounded-xl bg-rose-500 p-3 text-white shadow">
              <Heart size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Customer First</h3>
          </div>
          <p className="text-base leading-relaxed text-slate-700">User outcomes guide product decisions at every step.</p>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="rounded-xl bg-indigo-500 p-3 text-white shadow">
              <Users size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Collaborative</h3>
          </div>
          <p className="text-base leading-relaxed text-slate-700">Great products are built through transparent teamwork.</p>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-lg transition hover:shadow-xl">
          <div className="mb-4 flex items-center gap-4">
            <div className="rounded-xl bg-emerald-500 p-3 text-white shadow">
              <Rocket size={26} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Innovation</h3>
          </div>
          <p className="text-base leading-relaxed text-slate-700">We continuously improve with modern tools and bold thinking.</p>
        </article>
      </div>
    </section>
  );
}
