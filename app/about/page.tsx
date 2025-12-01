import { Heart, Rocket, Target, Users } from "lucide-react";
import React from "react";

const About = () => {
    return (
        <section className="w-full py-24 bg-gradient-to-r from-blue-50 to-sky-100" id="about">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header Text */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-blue-700">
                        About NexaFlow
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto">
                        We're on a mission to revolutionize how businesses operate with innovative technology solutions.
                    </p>
                </div>

                {/* Story + Image */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Text */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-sky-500 bg-clip-text text-transparent mb-4">
                            Our Story
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Founded in 2020, NexaFlow began with a small team of passionate developers and designers
                            dedicated to transformative technology. Today, we proudly serve businesses across
                            industries, helping them optimize workflows and reach new levels of digital success.
                        </p>

                        <h3 className="text-3xl font-bold mb-2 text-blue-700">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We aim to empower businesses with smart, scalable, and innovative tech solutions that
                            improve efficiency, fuel growth, and create meaningful impact.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-22485.jpg"
                            alt="Team collaboration illustration"
                            className="w-full max-w-md rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* Values */}
                <h2 className="text-4xl font-extrabold text-center text-blue-700 mt-24">
                    Our Values
                </h2>

                <div className="mt-16 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">

                    {/* Value Card 1 */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-sky-500 text-white rounded-xl shadow">
                                <Target size={26} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Mission Driven</h3>
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed">
                            We build technology that simplifies workflows and creates measurable impact.
                        </p>
                    </div>

                    {/* Value Card 2 */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-rose-500 text-white rounded-xl shadow">
                                <Heart size={26} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Customer First</h3>
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed">
                            Our users guide every decision we make — their success is our core priority.
                        </p>
                    </div>

                    {/* Value Card 3 */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-indigo-500 text-white rounded-xl shadow">
                                <Users size={26} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Collaborative</h3>
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed">
                            We believe teamwork and open collaboration lead to extraordinary results.
                        </p>
                    </div>

                    {/* Value Card 4 */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-emerald-500 text-white rounded-xl shadow">
                                <Rocket size={26} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                        </div>
                        <p className="text-gray-700 text-base leading-relaxed">
                            We constantly push boundaries and embrace modern technologies.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
