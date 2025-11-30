import React from "react";

const About = () => {
    return (
        <section className="w-full py-24 bg-white" id="about">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Text */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        About Us
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        We’re building the next generation digital platform designed to
                        empower students, developers, and teams across the world.
                        Our mission is simple: create beautiful, modern, and scalable tools
                        that help people learn, build, and grow faster.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        With a focus on clean design, premium user experience, and
                        modern engineering, we aim to deliver products that feel elegant,
                        reliable, and delightful to use.
                    </p>
                </div>

                {/* Right Image / Illustration */}
                <div className="flex justify-center">
                    <img
                        src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-22485.jpg"
                        alt="About Illustration"
                        className="w-full max-w-md rounded-2xl shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default About;
