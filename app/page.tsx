import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Pricing /> */}
      <Testimonials />
      {/* You can add a Testimonial section or FAQ section here */}
    </>
  );
}