import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInView, StaggerContainer, StaggerItem } from "../ui/FadeInView";
import { Check } from "lucide-react";

export const WorkflowSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <FadeInView direction="up">
          <SectionHeading
            centered
            kicker={t.workflow.kicker}
            title={t.workflow.title}
            description={t.workflow.description}
          />
        </FadeInView>

        {/* Stepper Grid */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {t.workflow.steps.map((step, idx) => (
            <StaggerItem key={step.number} className="h-full">
              <motion.div
                whileHover={{ 
                  y: -6, 
                  borderColor: "#93c5fd",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 12px 24px -6px rgba(37, 99, 235, 0.08)"
                }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }}
                className="h-full relative p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between transition-colors group cursor-default"
              >
                <div className="space-y-4">
                  {/* Step number and title */}
                  <div className="flex items-center justify-between">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-2xl font-black tabular-nums text-blue-600 inline-block transition-transform"
                    >
                      {step.number}
                    </motion.span>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {step.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-0.5">
                      {step.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 space-y-2">
                  <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                    Key Outputs
                  </p>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((deliv, dIdx) => (
                      <motion.li
                        key={dIdx}
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-start gap-2 text-xs text-slate-600"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{deliv}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WorkflowSection;
