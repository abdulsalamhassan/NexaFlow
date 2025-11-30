"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            question: "Can I cancel my subscription anytime?",
            answer:
                "Yes, you can cancel your subscription at any moment from your account dashboard. Your plan will stay active until the end of the billing cycle.",
        },
        {
            question: "Do you offer a free trial?",
            answer:
                "Yes, the Pro plan includes a 14-day free trial with access to all premium features.",
        },
        {
            question: "Is my data secure?",
            answer:
                "Absolutely. We use industry-standard encryption and follow best security practices to protect your data.",
        },
        {
            question: "Do you support team collaboration?",
            answer:
                "Yes, team features are available on the Pro and Enterprise plans with role management and shared workspaces.",
        },
        {
            question: "How can I contact support?",
            answer:
                "You can reach our support team anytime through the Help Center or Live Chat inside your dashboard.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-28 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 mt-3 text-lg">
                        Everything you need to know about our product.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition cursor-pointer bg-white"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-slate-900">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`w-6 h-6 text-slate-500 transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </div>

                            {openIndex === index && (
                                <p className="mt-4 text-slate-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
