import React from "react";
import { motion, type Variants } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { useLanguage } from "../../context/LanguageContext";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Languages, 
  AudioWaveform, 
  Volume2, 
  Database, 
  Video,
  CheckCircle2
} from "lucide-react";

const easeCurve = [0.16, 1, 0.3, 1] as const;

export const HeroSection: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useLanguage();

  const serviceIcons = {
    translate: Languages,
    asr: AudioWaveform,
    tts: Volume2,
    "data-collection": Database,
    "video-service": Video,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeCurve,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-16 lg:pt-28 lg:pb-20 border-b border-slate-800/80">
      {/* Cinematic Full-Bleed Background with Ultra-Smooth Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {/* Cinematic Background Image (Studio Audio & Digital Media Engineering) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2560&q=85"
            alt="Cinematic digital media and sound engineering studio"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-[center_35%] filter brightness-[0.75] contrast-[1.10] scale-100 transition-transform duration-1000 ease-out"
          />
        </div>

        {/* Ultra-Smooth Continuous Horizontal Gradient (Maximum contrast on left text, cinematic glow on right) */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(2, 6, 23, 0.97) 0%, rgba(2, 6, 23, 0.93) 32%, rgba(2, 6, 23, 0.80) 58%, rgba(2, 6, 23, 0.60) 80%, rgba(2, 6, 23, 0.42) 100%)"
          }}
        />

        {/* Ultra-Smooth Continuous Vertical Gradient (Soft top fade and deep bottom transition) */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(2, 6, 23, 0.92) 0%, rgba(2, 6, 23, 0.40) 25%, rgba(2, 6, 23, 0.35) 55%, rgba(2, 6, 23, 0.85) 86%, rgba(2, 6, 23, 1) 100%)"
          }}
        />

        {/* Soft Radial Ambient Studio Glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 75% 38%, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.04) 35%, transparent 65%)"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-8"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold tracking-widest text-slate-200 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block animate-pulse" />
              <span>{t.hero.companyBadge}</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.35rem] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              {t.hero.title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl text-pretty pt-1 font-normal">
              {t.hero.description}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => navigate("/services")}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-all duration-200 shadow-xl focus-visible:ring-2 focus-visible:ring-cyan-400 focus:outline-none cursor-pointer whitespace-nowrap"
            >
              <span>{t.hero.exploreServicesBtn}</span>
              <ArrowRight className="w-4 h-4 text-slate-900" aria-hidden="true" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/35 rounded-lg transition-all duration-200 backdrop-blur-xs focus-visible:ring-2 focus-visible:ring-cyan-400 focus:outline-none cursor-pointer whitespace-nowrap"
            >
              <span>{t.hero.discussProjectBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-300" aria-hidden="true" />
            </motion.button>
          </motion.div>

          {/* Editorial Trust Markers */}
          <motion.div
            variants={itemVariants}
            className="pt-6 flex flex-wrap items-center gap-y-2.5 gap-x-8 text-xs text-slate-400 font-medium"
          >
            <span className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              {t.hero.trustPoint1}
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              {t.hero.trustPoint2}
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              {t.hero.trustPoint3}
            </span>
          </motion.div>
        </motion.div>

        {/* Refined Horizontal Navigation Section Near Bottom of Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: easeCurve }}
          className="mt-16 lg:mt-24 pt-8 border-t border-white/15"
        >
          {/* Subtle Section Label */}
          <div className="flex items-center justify-between pb-4 text-xs font-mono uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{t.hero.pillarsHeader}</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">{t.hero.clickToViewSpecs}</span>
          </div>

          {/* 5-Column Horizontal Showcase Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-0 lg:divide-x lg:divide-white/10 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-2 sm:p-3 lg:p-0">
            {t.hero.services.map((service, index) => {
              const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Languages;
              const indexStr = `0${index + 1}`;

              return (
                <button
                  key={service.id}
                  onClick={() => navigate("/services", service.id)}
                  className="w-full text-left p-4 lg:p-5 rounded-lg lg:rounded-none hover:bg-white/[0.06] transition-all duration-200 group flex flex-col justify-between gap-3 cursor-pointer"
                >
                  {/* Top: Minimal Index & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-400 group-hover:text-cyan-300 transition-colors">
                      {indexStr}
                    </span>
                    <div className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-all">
                      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Body: Service Title & Summary */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-400 leading-snug line-clamp-2">
                      {service.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
