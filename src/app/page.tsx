import ExpertProfile from "@/components/ExpertProfile";
import FeaturedServices from "@/components/FeaturedServices";
import FinTrends from "@/components/FinTrends";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { testimonialsList } from "@/content/testimonials";

export default function Home() {
  return (
    <>
    <Hero/>
    <FeaturedServices/>
    <ExpertProfile />
    <Testimonials items={testimonialsList}/>
    <FinTrends/>
    </>
  );
}
