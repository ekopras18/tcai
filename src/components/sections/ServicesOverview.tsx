import React from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { useLanguage } from "../../context/LanguageContext";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInView, StaggerContainer, StaggerItem } from "../ui/FadeInView";
import { 
  Languages, 
  Database, 
  AudioWaveform, 
  Volume2, 
  Video,
  ArrowRight
} from "lucide-react";

export const ServicesOverview: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useLanguage();

  const serviceIcons = {
    translate: <Languages className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
    asr: <AudioWaveform className="w-6 h-6 text-violet-600" aria-hidden="true" />,
    tts: <Volume2 className="w-6 h-6 text-amber-600" aria-hidden="true" />,
    "data-collection": <Database className="w-6 h-6 text-teal-600" aria-hidden="true" />,
    "video-service": <Video className="w-6 h-6 text-rose-600" aria-hidden="true" />
  };

  const getThemeClasses = (serviceId: string) => {
    switch (serviceId) {
      case "translate":
        return {
          iconBg: "bg-indigo-50 border-indigo-200/80",
          hoverBorder: "hover:border-indigo-300",
          textHover: "group-hover:text-indigo-600",
          badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200"
        };
      case "asr":
        return {
          iconBg: "bg-violet-50 border-violet-200/80",
          hoverBorder: "hover:border-violet-300",
          textHover: "group-hover:text-violet-600",
          badgeBg: "bg-violet-50 text-violet-700 border-violet-200"
        };
      case "tts":
        return {
          iconBg: "bg-amber-50 border-amber-200/80",
          hoverBorder: "hover:border-amber-300",
          textHover: "group-hover:text-amber-600",
          badgeBg: "bg-amber-50 text-amber-800 border-amber-200"
        };
      case "data-collection":
        return {
          iconBg: "bg-teal-50 border-teal-200/80",
          hoverBorder: "hover:border-teal-300",
          textHover: "group-hover:text-teal-600",
          badgeBg: "bg-teal-50 text-teal-800 border-teal-200"
        };
      case "video-service":
      default:
        return {
          iconBg: "bg-rose-50 border-rose-200/80",
          hoverBorder: "hover:border-rose-300",
          textHover: "group-hover:text-rose-600",
          badgeBg: "bg-rose-50 text-rose-800 border-rose-200"
        };
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200" id="services-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <FadeInView direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            kicker={t.servicesOverview.kicker}
            title={t.servicesOverview.title}
            description={t.servicesOverview.description}
          />
          <motion.button
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            <span>{t.servicesOverview.viewAllBtn}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </FadeInView>

        {/* Dynamic Grid of 5 Services */}
        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.servicesOverview.services.map((svc, index) => {
            const theme = getThemeClasses(svc.id);
            const icon = serviceIcons[svc.id as keyof typeof serviceIcons] || serviceIcons.translate;

            return (
              <StaggerItem
                key={svc.id}
                className={`h-full ${index === 3 || index === 4 ? "lg:col-span-1" : ""}`}
              >
                <motion.div
                  whileHover={{ 
                    y: -6, 
                    boxShadow: "0 14px 30px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)"
                  }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }}
                  className={`h-full bg-white rounded-xl border border-slate-200 ${theme.hoverBorder} p-7 flex flex-col justify-between transition-colors group relative overflow-hidden`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.15 }}
                        className={`w-12 h-12 rounded-xl ${theme.iconBg} border flex items-center justify-center shadow-2xs`}
                      >
                        {icon}
                      </motion.div>
                      
                      {/* Domain Telemetry Snippet */}
                      <span className="font-mono text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {svc.domainSnippet}
                      </span>
                    </div>

                    <div>
                      {/* Zero-pill: clean text metadata */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                        <span>{svc.category}</span>
                      </div>
                      <h3 className={`text-xl font-bold text-slate-900 tracking-tight ${theme.textHover} transition-colors`}>
                        {svc.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Contextual Spec Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-600">
                      {svc.specs.map((sp, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-700">
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 font-mono">
                      {svc.metricBadge}
                    </span>
                    <motion.button
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => navigate(`/services?item=${svc.id}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span>{t.servicesOverview.scopeDetailsBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesOverview;
