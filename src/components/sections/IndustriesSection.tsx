import React from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { useLanguage } from "../../context/LanguageContext";
import { INDUSTRIES_DATA } from "../../data/industries";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInView, StaggerContainer, StaggerItem } from "../ui/FadeInView";
import { ArrowRight, Cpu, Code2, Film, Megaphone, GraduationCap, Building2 } from "lucide-react";

export const IndustriesSection: React.FC = () => {
  const { navigate } = useNavigation();
  const { language, t } = useLanguage();
  const isThai = language === "th";

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "ai-ml":
        return <Cpu className="w-5 h-5 text-blue-600" aria-hidden="true" />;
      case "tech-software":
        return <Code2 className="w-5 h-5 text-blue-600" aria-hidden="true" />;
      case "media-entertainment":
        return <Film className="w-5 h-5 text-blue-600" aria-hidden="true" />;
      case "advertising-marketing":
        return <Megaphone className="w-5 h-5 text-blue-600" aria-hidden="true" />;
      case "education-elearning":
        return <GraduationCap className="w-5 h-5 text-blue-600" aria-hidden="true" />;
      case "enterprise-business":
        return <Building2 className="w-5 h-5 text-blue-600" aria-hidden="true" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600" aria-hidden="true" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <FadeInView direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            kicker={t.industries.kicker}
            title={t.industries.title}
            description={t.industries.description}
          />
          <motion.button
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/industries")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            <span>{t.industries.viewCaseStudies}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </FadeInView>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <StaggerItem key={ind.id} className="h-full">
              <motion.div
                whileHover={{ 
                  y: -6, 
                  borderColor: "#94a3b8",
                  boxShadow: "0 12px 24px -6px rgba(15, 23, 42, 0.08)"
                }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }}
                className="h-full bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between transition-colors group cursor-default"
              >
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.15 }}
                    className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors"
                  >
                    {getIndustryIcon(ind.id)}
                  </motion.div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-medium mt-0.5">
                      {ind.headline}
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {ind.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    {isThai ? "สถานการณ์ที่พบบ่อย" : "Common Scenarios"}
                  </span>
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/industries?item=${ind.id}`)}
                    className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isThai ? "ดูรายละเอียด" : "Review profile"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </motion.button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default IndustriesSection;
