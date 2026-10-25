import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../context/NavigationContext";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SERVICES_DATA, ServiceItem } from "../data/services";
import { CTASection } from "../components/sections/CTASection";
import { FadeInView } from "../components/ui/FadeInView";
import { 
  Check, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  HelpCircle,
  Languages,
  Database,
  AudioWaveform,
  Volume2,
  Mic2,
  Video
} from "lucide-react";

export const ServicesPage: React.FC = () => {
  const { activeParam, navigate } = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  useEffect(() => {
    if (activeParam) {
      const found = SERVICES_DATA.find(
        (s) => s.id === activeParam || s.slug === activeParam
      );
      if (found) {
        setSelectedFilter(found.id);
        const element = document.getElementById(`service-${found.id}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [activeParam]);

  const handleFilterChange = (id: string) => {
    setSelectedFilter(id);
    if (id !== "all") {
      const element = document.getElementById(`service-${id}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const getServiceTheme = (color: ServiceItem["themeColor"]) => {
    switch (color) {
      case "indigo":
        return {
          icon: <Languages className="w-5 h-5 text-indigo-600" aria-hidden="true" />,
          iconBg: "bg-indigo-50 border-indigo-200/80",
          textBadge: "text-indigo-600",
          buttonHover: "hover:bg-indigo-700",
          accentBorder: "border-indigo-100",
          specBg: "bg-indigo-50/50"
        };
      case "violet":
        return {
          icon: <AudioWaveform className="w-5 h-5 text-violet-600" aria-hidden="true" />,
          iconBg: "bg-violet-50 border-violet-200/80",
          textBadge: "text-violet-600",
          buttonHover: "hover:bg-violet-700",
          accentBorder: "border-violet-100",
          specBg: "bg-violet-50/50"
        };
      case "amber":
        return {
          icon: <Volume2 className="w-5 h-5 text-amber-600" aria-hidden="true" />,
          iconBg: "bg-amber-50 border-amber-200/80",
          textBadge: "text-amber-600",
          buttonHover: "hover:bg-amber-700",
          accentBorder: "border-amber-100",
          specBg: "bg-amber-50/50"
        };
      case "teal":
        return {
          icon: <Database className="w-5 h-5 text-teal-600" aria-hidden="true" />,
          iconBg: "bg-teal-50 border-teal-200/80",
          textBadge: "text-teal-600",
          buttonHover: "hover:bg-teal-700",
          accentBorder: "border-teal-100",
          specBg: "bg-teal-50/50"
        };
      case "rose":
        return {
          icon: <Video className="w-5 h-5 text-rose-600" aria-hidden="true" />,
          iconBg: "bg-rose-50 border-rose-200/80",
          textBadge: "text-rose-600",
          buttonHover: "hover:bg-rose-700",
          accentBorder: "border-rose-100",
          specBg: "bg-rose-50/50"
        };
      default:
        return {
          icon: <Layers className="w-5 h-5 text-blue-600" aria-hidden="true" />,
          iconBg: "bg-blue-50 border-blue-200/80",
          textBadge: "text-blue-600",
          buttonHover: "hover:bg-blue-700",
          accentBorder: "border-blue-100",
          specBg: "bg-blue-50/50"
        };
    }
  };

  const filteredServices =
    selectedFilter === "all"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === selectedFilter);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs currentPage="Services" />
          <FadeInView direction="up" className="max-w-3xl space-y-4 pt-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Core Capabilities & Scope of Work
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Translate, ASR, TTS, Data Collection & Video Service
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
              Discover our structured delivery scopes across professional translation, speech recognition tuning (ASR), neural voice quality assessment (TTS), high-hygiene data collection, and broadcast-grade video service.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Internal Navigation Filter Tabs with Framer Motion hover/tap */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs">
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
              onClick={() => handleFilterChange("all")}
              className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer shadow-2xs ${
                selectedFilter === "all"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Services ({SERVICES_DATA.length})
            </motion.button>
            {SERVICES_DATA.map((svc) => (
              <motion.button
                key={svc.id}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                onClick={() => handleFilterChange(svc.id)}
                className={`px-3.5 py-2 rounded-lg font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer shadow-2xs ${
                  selectedFilter === svc.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {svc.title}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {filteredServices.map((service, index) => {
          const theme = getServiceTheme(service.themeColor);

          return (
            <FadeInView
              key={service.id}
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
                id={`service-${service.id}`}
                className="p-8 lg:p-12 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-8 transition-colors"
              >
                {/* Header row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <span className={theme.textBadge}>{service.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{service.domainBadge}</span>
                      <span aria-hidden="true">·</span>
                      <span>Service {String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                        transition={{ duration: 0.2 }}
                        className={`w-10 h-10 rounded-lg ${theme.iconBg} border flex items-center justify-center shrink-0 cursor-default`}
                      >
                        {theme.icon}
                      </motion.div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-base text-slate-700 font-medium leading-relaxed">
                      {service.overviewHeadline}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Consultation trigger card */}
                  <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Project Inquiry
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Ready to evaluate scopes, timelines, or pilot criteria for {service.title}?
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => navigate(`/contact?item=${service.id}`)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                    >
                      <span>Discuss {service.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </motion.button>
                  </div>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-[11px] font-mono text-slate-600 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-semibold uppercase tracking-wider text-slate-700">TECHNICAL SPECIFICATIONS</span>
                    <span className="text-slate-500">{service.technicalMetric}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-1">
                    {service.interactiveSpecs.map((spec, spIdx) => (
                      <div key={spIdx} className="p-3 rounded-lg bg-white border border-slate-200/90 font-mono text-xs">
                        <span className="text-[10px] text-slate-400 block uppercase font-medium">{spec.label}</span>
                        <span className="font-semibold text-slate-800 text-[11px] leading-tight block mt-0.5">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              {/* Optional High-Res Asset Banner if available */}
              {service.image && (
                <div className="rounded-xl overflow-hidden border border-slate-200 max-h-80 bg-slate-900 group">
                  <img
                    src={service.image}
                    alt={`${service.title} studio and engineering environment`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover max-h-80 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              )}

              {/* Scope of Work */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" aria-hidden="true" />
                  <span>Scope of Work & Technical Deliverables</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.scopeOfWork.map((scope, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ 
                        x: 4, 
                        backgroundColor: "#f8fafc",
                        borderColor: "#93c5fd" 
                      }}
                      transition={{ duration: 0.15 }}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/70 border border-slate-200/80 text-xs text-slate-700 transition-colors cursor-default"
                    >
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-medium">{scope}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Illustrative Use Cases & Client Benefits in 2 columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-slate-100">
                {/* Illustrative Use Cases */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    <span>Illustrative Use Cases</span>
                  </h3>
                  <div className="space-y-3">
                    {service.illustrativeUseCases.map((uc, uIdx) => (
                      <motion.div
                        key={uIdx}
                        whileHover={{ 
                          y: -3, 
                          borderColor: "#93c5fd",
                          boxShadow: "0 8px 16px -4px rgba(37, 99, 235, 0.06)" 
                        }}
                        transition={{ duration: 0.15 }}
                        className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 hover:border-blue-200 transition-colors cursor-default"
                      >
                        <h4 className="text-sm font-bold text-slate-900">
                          {uc.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {uc.description}
                        </p>
                        <p className="text-[11px] text-blue-600 font-medium pt-1">
                          Applicable Context: {uc.applicableFields}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Client Benefits */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    <span>Value & Advantages to Clients</span>
                  </h3>
                  <div className="space-y-3">
                    {service.clientBenefits.map((ben, bIdx) => (
                      <motion.div
                        key={bIdx}
                        whileHover={{ 
                          y: -3, 
                          borderColor: "#93c5fd",
                          backgroundColor: "#ffffff",
                          boxShadow: "0 8px 16px -4px rgba(37, 99, 235, 0.06)"
                        }}
                        transition={{ duration: 0.15 }}
                        className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1 transition-colors cursor-default"
                      >
                        <h4 className="text-xs font-bold text-slate-900">
                          {ben.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {ben.detail}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </FadeInView>
        );
      })}
      </div>

      {/* Bottom CTA */}
      <CTASection />
    </div>
  );
};

export default ServicesPage;
