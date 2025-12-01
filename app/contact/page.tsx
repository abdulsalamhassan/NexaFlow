"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {

    return (
        <section className="w-full py-24 bg-gradient-to-r from-blue-50 to-sky-100" id="contact">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-blue-700">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto">
                        Have a question or want to work together? Send us a message and we'll respond quickly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <form
                        className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center gap-6">
                        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
                            <div className="p-3 bg-blue-600 text-white rounded-full">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Email</h3>
                                <p className="text-gray-700">contact@nexaflow.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
                            <div className="p-3 bg-blue-600 text-white rounded-full">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                                <p className="text-gray-700">+252 616 88 10 31</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
                            <div className="p-3 bg-blue-600 text-white rounded-full">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Location</h3>
                                <p className="text-gray-700">123 Tech Street, Tarabuunka</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
