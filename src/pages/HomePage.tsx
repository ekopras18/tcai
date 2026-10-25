import React from "react";
import { HeroSection } from "../components/sections/HeroSection";
import { CompanyIntro } from "../components/sections/CompanyIntro";
import { ServicesOverview } from "../components/sections/ServicesOverview";
import { WhyChoose } from "../components/sections/WhyChoose";
import { IndustriesSection } from "../components/sections/IndustriesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { WorkflowSection } from "../components/sections/WorkflowSection";
import { CTASection } from "../components/sections/CTASection";

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <CompanyIntro />
      <ServicesOverview />
      <WhyChoose />
      <IndustriesSection />
      <TestimonialsSection />
      <WorkflowSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
