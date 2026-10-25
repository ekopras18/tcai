import React from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
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

interface OverviewCard {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  anchor: string;
  themeColor: "indigo" | "violet" | "amber" | "teal" | "rose";
  domainSnippet: string;
  metricBadge: string;
  specs: string[];
}

export const ServicesOverview: React.FC = () => {
  const { navigate } = useNavigation();

  const servicesList: OverviewCard[] = [
    {
      id: "translate",
      title: "Translate",
      category: "Language & Localization",
      description:
        "Professional human translation and localization services supporting multilingual enterprise communication, technical manuals, and software interfaces.",
      icon: <Languages className="w-6 h-6 text-indigo-600" aria-hidden="true" />,
      anchor: "translate",
      themeColor: "indigo",
      domainSnippet: "EN ⇄ JA / ID / DE / ES",
      metricBadge: "99.2% Terminology Precision",
      specs: ["Native TEP Review", "Custom TM & Glossaries", "UI & Manuals"]
    },
    {
      id: "asr",
      title: "ASR (Speech Recognition)",
      category: "Speech Technology",
      description:
        "Automatic speech recognition acoustic data preparation, verbatim transcription, time-aligned phonetic validation, and acoustic model tuning.",
      icon: <AudioWaveform className="w-6 h-6 text-violet-600" aria-hidden="true" />,
      anchor: "asr",
      themeColor: "violet",
      domainSnippet: "±10ms Phoneme Boundaries",
      metricBadge: "WER < 4.2% Benchmark",
      specs: ["48kHz Studio & Field Audio", "Multi-Speaker Diarization", "SNR Tagging"]
    },
    {
      id: "tts",
      title: "TTS (Text-to-Speech)",
      category: "Speech Technology",
      description:
        "Synthetic voice evaluation, Mean Opinion Score (MOS) benchmark testing, prosody calibration, and pronunciation lexicons for neural voice models.",
      icon: <Volume2 className="w-6 h-6 text-amber-600" aria-hidden="true" />,
      anchor: "tts",
      themeColor: "amber",
      domainSnippet: "Neural Prosody & Pitch Contour",
      metricBadge: "4.82 / 5.00 MOS Score",
      specs: ["Native Listening Panels", "G2P Dictionary Auditing", "Vocal Warmth Scoring"]
    },
    {
      id: "data-collection",
      title: "Data Collection",
      category: "AI Data Solutions",
      description:
        "Structured speech, text, audio, and multimodal data collection and annotation pipelines designed to train and benchmark production AI models.",
      icon: <Database className="w-6 h-6 text-teal-600" aria-hidden="true" />,
      anchor: "data-collection",
      themeColor: "teal",
      domainSnippet: "Multi-Turn Dialogue & NER",
      metricBadge: "99.1% Inter-Annotator Agreement",
      specs: ["Multi-Speaker Speech Corpus", "Strict PII Scrubbing", "Schema Tagging"]
    },
    {
      id: "video-service",
      title: "Video Service",
      category: "Media Production",
      description:
        "Comprehensive video editing, product demo walkthroughs, motion graphics, promotional cutdowns, and synchronized multilingual subtitling.",
      icon: <Video className="w-6 h-6 text-rose-600" aria-hidden="true" />,
      anchor: "video-service",
      themeColor: "rose",
      domainSnippet: "SMPTE 4K 60fps Masters",
      metricBadge: "Subtitle Drift ±15ms",
      specs: ["NLE Precision Post-Cuts", "Motion Graphics & UI Callouts", "SRT/VTT Burn-ins"]
    }
  ];

  const getThemeClasses = (color: OverviewCard["themeColor"]) => {
    switch (color) {
      case "indigo":
        return {
          iconBg: "bg-indigo-50 border-indigo-200/80",
          hoverBorder: "hover:border-indigo-300",
          textHover: "group-hover:text-indigo-600",
          badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
          snippetBg: "bg-indigo-950/5 text-indigo-900 border-indigo-100"
        };
      case "violet":
        return {
          iconBg: "bg-violet-50 border-violet-200/80",
          hoverBorder: "hover:border-violet-300",
          textHover: "group-hover:text-violet-600",
          badgeBg: "bg-violet-50 text-violet-700 border-violet-200",
          snippetBg: "bg-violet-950/5 text-violet-900 border-violet-100"
        };
      case "amber":
        return {
          iconBg: "bg-amber-50 border-amber-200/80",
          hoverBorder: "hover:border-amber-300",
          textHover: "group-hover:text-amber-600",
          badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
          snippetBg: "bg-amber-950/5 text-amber-900 border-amber-100"
        };
      case "teal":
        return {
          iconBg: "bg-teal-50 border-teal-200/80",
          hoverBorder: "hover:border-teal-300",
          textHover: "group-hover:text-teal-600",
          badgeBg: "bg-teal-50 text-teal-800 border-teal-200",
          snippetBg: "bg-teal-950/5 text-teal-900 border-teal-100"
        };
      case "rose":
        return {
          iconBg: "bg-rose-50 border-rose-200/80",
          hoverBorder: "hover:border-rose-300",
          textHover: "group-hover:text-rose-600",
          badgeBg: "bg-rose-50 text-rose-800 border-rose-200",
          snippetBg: "bg-rose-950/5 text-rose-900 border-rose-100"
        };
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200" id="services-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <FadeInView direction="up" className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            kicker="Our Core Specializations"
            title="Translate, ASR, TTS, Data Collection & Video Service"
            description="Focused technological capabilities uniting qualified human discernment with scalable data and media engineering."
          />
          <motion.button
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            <span>View All Service Scopes</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        </FadeInView>

        {/* Dynamic Grid of 5 Services */}
        <StaggerContainer staggerDelay={0.09} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((svc, index) => {
            const theme = getThemeClasses(svc.themeColor);

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
                        {svc.icon}
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
                      onClick={() => navigate(`/services?item=${svc.anchor}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span>Scope details</span>
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
