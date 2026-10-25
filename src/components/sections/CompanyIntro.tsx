import React from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "../../data/company";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInView, StaggerContainer, StaggerItem } from "../ui/FadeInView";
import { Users, Award, Layers } from "lucide-react";

export const CompanyIntro: React.FC = () => {
  const pillarIcons = [
    <Users key="users" className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    <Award key="award" className="w-5 h-5 text-blue-600" aria-hidden="true" />,
    <Layers key="layers" className="w-5 h-5 text-blue-600" aria-hidden="true" />
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <FadeInView direction="up" className="lg:col-span-5 space-y-6">
            <SectionHeading
              kicker="About TCAI"
              title={COMPANY_INFO.introTitle}
              description={COMPANY_INFO.introDescription}
            />
          </FadeInView>

          <div className="lg:col-span-7">
            <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {COMPANY_INFO.pillars.map((pillar, idx) => (
                <StaggerItem key={pillar.title} className="h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-colors flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                        {pillarIcons[idx]}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
