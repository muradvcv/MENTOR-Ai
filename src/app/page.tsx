import AiFeature from "@/Components/Home/AiFeature";
import FaqCTA from "@/Components/Home/Faqs";
import Hero from "@/Components/Home/Hero";
import HowItWorks from "@/Components/Home/HowItWorks";
import PopularTools from "@/Components/Home/PopularTools";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Hero/>
    <AiFeature/>
    <HowItWorks/>
    <PopularTools/>
    <FaqCTA/>
  </div>
  );
}
