import React from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Languages, 
  AudioWaveform, 
  Volume2, 
  Database, 
  Video,
  CheckCircle2,
  Layers
} from "lucide-react";

const easeCurve = [0.16, 1, 0.3, 1] as const;

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation();

  const services = [
    {
      id: "translate",
      name: "Translate",
      category: "Localization & Linguistics",
      summary: "Human translation & software string localization across 40+ language pairs.",
      icon: Languages,
      color: "text-indigo-400 group-hover:text-indigo-300",
      accentBg: "bg-indigo-500/10 border-indigo-500/20 group-hover:border-indigo-500/40",
      badgeText: "Native TEP Review"
    },
    {
      id: "asr",
      name: "ASR (Speech Recognition)",
      category: "Acoustic AI",
      summary: "Acoustic corpora preparation, phonetic timestamps & dialect model tuning.",
      icon: AudioWaveform,
      color: "text-violet-400 group-hover:text-violet-300",
      accentBg: "bg-violet-500/10 border-violet-500/20 group-hover:border-violet-500/40",
      badgeText: "Acoustic Corpora"
    },
    {
      id: "tts",
      name: "TTS (Text-to-Speech)",
      category: "Voice Synthesis",
      summary: "Neural voice calibration, SSML prosody design & natural conversational audio.",
      icon: Volume2,
      color: "text-amber-400 group-hover:text-amber-300",
      accentBg: "bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/40",
      badgeText: "Prosody & Voice Tuning"
    },
    {
      id: "data-collection",
      name: "Data Collection",
      category: "AI Training Corpora",
      summary: "Demographic speech recording, high-agreement annotation & PII scrubbing.",
      icon: Database,
      color: "text-teal-400 group-hover:text-teal-300",
      accentBg: "bg-teal-500/10 border-teal-500/20 group-hover:border-teal-500/40",
      badgeText: "Ethical AI Datasets"
    },
    {
      id: "video-service",
      name: "Video Service",
      category: "Multilingual Media",
      summary: "Frame-accurate subtitling, localized on-screen typography & master post-editing.",
      icon: Video,
      color: "text-rose-400 group-hover:text-rose-300",
      accentBg: "bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/40",
      badgeText: "Broadcast Frame Sync"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeCurve,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-14 pb-20 lg:pt-18 lg:pb-28">
      {/* Subtle background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Clear Core Proposition */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="text-xs font-semibold tracking-wider uppercase text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
                <span>PT Teknologi Cipta Akustik Indonesia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] text-balance">
                Precision Language, Speech & AI Data Services
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty pt-1">
                Specialized in five foundational disciplines: <strong className="text-white font-semibold">Translate</strong>, <strong className="text-white font-semibold">ASR</strong>, <strong className="text-white font-semibold">TTS</strong>, <strong className="text-white font-semibold">Data Collection</strong>, and <strong className="text-white font-semibold">Video Service</strong>. We unite certified native human expertise with production-grade engineering workflows.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/services")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap shadow-xs focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              >
                <span>Explore All 5 Services</span>
                <ArrowRight className="w-4 h-4 text-slate-900" aria-hidden="true" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              >
                <span>Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300" aria-hidden="true" />
              </motion.button>
            </motion.div>

            {/* Simple Trust Verification Line */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400"
            >
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                Dual Human-in-the-Loop QA
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                ISO 17100 Alignment
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                Enterprise NDA & PII Security
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column: Clean, Simple 5-Pillar Representation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeCurve }}
            className="lg:col-span-6 w-full"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xs p-5 sm:p-6 shadow-xl space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Core Disciplines & Production Services</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400">5 Capabilities</span>
              </div>

              {/* 5 Simple Cards */}
              <div className="space-y-2.5">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.button
                      key={service.id}
                      onClick={() => navigate("/services", service.id)}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                      className="w-full text-left p-3.5 rounded-xl border border-slate-800/80 bg-slate-800/40 hover:bg-slate-800/90 hover:border-slate-700 transition-all group flex items-start justify-between gap-3 cursor-pointer"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className={`p-2 rounded-lg border ${service.accentBg} shrink-0 mt-0.5`}>
                          <Icon className={`w-4 h-4 ${service.color}`} aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {service.name}
                            </h3>
                            <span className="text-[10px] font-mono text-slate-400">
                              · {service.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-snug line-clamp-1 pt-0.5">
                            {service.summary}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center pt-1 text-slate-500 group-hover:text-cyan-400 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Footer Tip */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>Click any discipline to view technical specifications</span>
                <span className="text-cyan-400 font-medium">Production-Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
