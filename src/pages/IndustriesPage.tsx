import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../context/NavigationContext";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { INDUSTRIES_DATA, IndustryItem } from "../data/industries";
import { CTASection } from "../components/sections/CTASection";
import { FadeInView } from "../components/ui/FadeInView";
import { 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight, 
  Cpu, 
  Code2, 
  Film, 
  Megaphone, 
  GraduationCap, 
  Building2,
  FileCheck
} from "lucide-react";

export const IndustriesPage: React.FC = () => {
  const { activeParam, navigate } = useNavigation();
  const [selectedIndustry, setSelectedIndustry] = useState<string>("ai-ml");

  useEffect(() => {
    if (activeParam) {
      const match = INDUSTRIES_DATA.find((ind) => ind.id === activeParam);
      if (match) {
        setSelectedIndustry(match.id);
        const element = document.getElementById(`industry-${match.id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [activeParam]);

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
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs currentPage="Industries" />
          <FadeInView direction="up" className="max-w-3xl space-y-4 pt-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Sector Alignment & Use Cases
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Industries We Support
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
              Addressing operational challenges across AI development, international software deployment, broadcast media, and multi-market communications.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Industry Switcher Strip */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {INDUSTRIES_DATA.map((ind) => (
              <motion.button
                key={ind.id}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                onClick={() => {
                  setSelectedIndustry(ind.id);
                  const el = document.getElementById(`industry-${ind.id}`);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-colors flex items-center gap-2 cursor-pointer shadow-2xs ${
                  selectedIndustry === ind.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span>{ind.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Detailed Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {INDUSTRIES_DATA.map((ind) => (
          <FadeInView
            key={ind.id}
            direction="up"
            distance={20}
            duration={0.5}
            className="scroll-mt-36"
          >
            <motion.article
              whileHover={{ 
                borderColor: "#94a3b8",
                boxShadow: "0 14px 30px -6px rgba(15, 23, 42, 0.07)"
              }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }}
              id={`industry-${ind.id}`}
              className="p-8 lg:p-10 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-8 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.15 }}
                      className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center cursor-default"
                    >
                      {getIndustryIcon(ind.id)}
                    </motion.div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {ind.name}
                    </h2>
                  </div>
                  <p className="text-sm font-semibold text-blue-600">
                    {ind.headline}
                  </p>
                  <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                    {ind.summary}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => navigate(`/contact?item=${ind.id}`)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
                >
                  <span>Inquire for {ind.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Grid of Challenges & Relevant Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Common Challenges */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500" aria-hidden="true" />
                    <span>Common Industry Challenges</span>
                  </h3>
                  <div className="space-y-2.5">
                    {ind.challenges.map((chal, cIdx) => (
                      <motion.div
                        key={cIdx}
                        whileHover={{ x: 3, backgroundColor: "#ffffff", borderColor: "#cbd5e1" }}
                        transition={{ duration: 0.15 }}
                        className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed transition-colors cursor-default"
                      >
                        {chal}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Relevant TCAI Services */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    <span>Relevant TCAI Service Solutions</span>
                  </h3>
                  <div className="space-y-2.5">
                    {ind.relevantServices.map((svc, sIdx) => {
                      const serviceTarget = svc.includes("Translate")
                        ? "/services?item=translate"
                        : svc.includes("ASR")
                        ? "/services?item=asr"
                        : svc.includes("TTS")
                        ? "/services?item=tts"
                        : svc.includes("Data Collection")
                        ? "/services?item=data-collection"
                        : svc.includes("Video")
                        ? "/services?item=video-service"
                        : "/services";

                      return (
                        <motion.div
                          key={sIdx}
                          whileHover={{ x: 3, borderColor: "#60a5fa" }}
                          transition={{ duration: 0.15 }}
                          className="p-3.5 rounded-lg bg-blue-50/50 border border-blue-100 text-xs text-slate-800 font-medium flex items-center justify-between transition-colors"
                        >
                          <span>{svc}</span>
                          <motion.button
                            whileHover={{ x: 2 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={() => navigate(serviceTarget)}
                            className="text-[11px] text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
                          >
                            <span>View scope</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Illustrative Scenario */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                  <FileCheck className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  <span>Illustrative Deployment Scenario</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {ind.illustrativeScenario.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {ind.illustrativeScenario.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/80">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Key Sample Deliverables
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {ind.illustrativeScenario.keyDeliverables.map((deliv, dIdx) => (
                      <motion.span
                        key={dIdx}
                        whileHover={{ scale: 1.05, borderColor: "#93c5fd" }}
                        transition={{ duration: 0.15 }}
                        className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-700 cursor-default shadow-2xs"
                      >
                        {deliv}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </FadeInView>
        ))}
      </div>

      <CTASection />
    </div>
  );
};

export default IndustriesPage;
