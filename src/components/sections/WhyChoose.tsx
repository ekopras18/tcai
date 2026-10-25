import React from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "../../data/company";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInView, StaggerContainer, StaggerItem } from "../ui/FadeInView";
import { Sliders, CheckSquare2, Network, Target } from "lucide-react";

export const WhyChoose: React.FC = () => {
  const icons = [
    <Sliders key="sliders" className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    <CheckSquare2 key="check" className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    <Network key="network" className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    <Target key="target" className="w-5 h-5 text-blue-600" aria-hidden="true" />
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <FadeInView direction="up">
          <SectionHeading
            centered
            kicker="Our Value Proposition"
            title="A Reliable Partner for Digital and Data-Driven Projects"
            description="We prioritize methodical quality processes, operational transparency, and active collaboration over arbitrary vanity metrics."
          />
        </FadeInView>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_INFO.whyChoose.map((item, idx) => (
            <StaggerItem key={item.title} className="h-full">
              <motion.div
                whileHover={{ 
                  y: -6, 
                  borderColor: "#93c5fd", 
                  backgroundColor: "#ffffff",
                  boxShadow: "0 12px 24px -6px rgba(37, 99, 235, 0.08)"
                }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }}
                className="h-full p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors flex flex-col justify-between group cursor-default"
              >
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.15 }}
                    className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:border-blue-200"
                  >
                    {icons[idx]}
                  </motion.div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
