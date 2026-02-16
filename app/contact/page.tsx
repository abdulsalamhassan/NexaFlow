"use client";

import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-sky-100 py-24" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 md:text-6xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg italic leading-relaxed text-slate-600 md:text-xl">
            Have a question or want to work together? Send a message and our team will respond quickly.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <form className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="mb-2 block font-semibold text-slate-700">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block font-semibold text-slate-700">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block font-semibold text-slate-700">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help"
                className="min-h-32 w-full rounded-lg border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button type="submit" className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white hover:bg-blue-700">
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-center gap-6">
            <article className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg">
              <div className="rounded-full bg-blue-600 p-3 text-white"><Mail size={24} /></div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Email</h2>
                <p className="text-slate-700">contact@nexaflow.com</p>
              </div>
            </article>

            <article className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg">
              <div className="rounded-full bg-blue-600 p-3 text-white"><Phone size={24} /></div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Phone</h2>
                <p className="text-slate-700">+252 616 88 10 31</p>
              </div>
            </article>

            <article className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg">
              <div className="rounded-full bg-blue-600 p-3 text-white"><MapPin size={24} /></div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Location</h2>
                <p className="text-slate-700">123 Tech Street, Tarabuunka</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
