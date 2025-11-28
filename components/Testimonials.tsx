"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const testimonials = [
    {
        id: 1,
        name: "Sarah Jenks",
        role: "Product Manager",
        company: "TechFlow",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        content: "NexaFlow transformed how we handle our sprint planning. The automation features alone saved us 10+ hours a week. It is simply the best tool in the market right now.",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "CTO",
        company: "StartUp Inc",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        content: "The API documentation is flawless, and the uptime has been 100% since we switched. Highly recommended for any dev team scaling up.",
    },
    {
        id: 3,
        name: "Jessica Lee",
        role: "Marketing Director",
        company: "Growthly",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
        content: "Finally, a dashboard that looks good and makes sense. My team actually enjoys logging their tasks now. The UI is incredibly intuitive.",
    },
    {
        id: 4,
        name: "David Ross",
        role: "Freelancer",
        company: "Self Employed",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        content: "I've tried Asana, Trello, and Jira. NexaFlow strikes the perfect balance between power and simplicity. The mobile app is also top-tier.",
    },
];

const companies = ["Acme Corp", "Global Bank", "Nier.ai", "Stripey", "Boltshift"];

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Loved by builders worldwide
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Join thousands of teams who rely on NexaFlow to power their daily operations.
                    </p>
                </div>

            

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={false}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="pb-16 !px-4" // Padding bottom for pagination dots
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="h-full">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col hover:shadow-md transition-shadow duration-300">

                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Quote Content */}
                                    <blockquote className="flex-grow mb-6 relative">
                                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100 -z-10 rotate-180 opacity-50" />
                                        <p className="text-slate-700 leading-relaxed relative z-10">
                                            "{item.content}"
                                        </p>
                                    </blockquote>

                                    {/* User Info */}
                                    <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                                        />
                                        <div>
                                            <div className="font-semibold text-slate-900">{item.name}</div>
                                            <div className="text-sm text-slate-500">{item.role}, {item.company}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom styling for Swiper pagination dots via Tailwind arbitrary values is hard, 
              usually best to override via global CSS or style tag, but here is a inline fix */}
                    <style jsx global>{`
            .swiper-pagination-bullet {
              background: #cbd5e1; /* slate-300 */
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background: #2563eb; /* blue-600 */
              width: 20px;
              border-radius: 4px;
              transition: width 0.3s ease;
            }
          `}</style>
                </div>
            </div>
        </section>
    );
}