import React from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FadeInView } from "../ui/FadeInView";

export const CTASection: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useLanguage();

  return (
    <section className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <FadeInView direction="up" className="space-y-4 max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            {t.cta.kicker}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
            {t.cta.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
            {t.cta.description}
          </p>
        </FadeInView>

        <FadeInView delay={0.15} direction="up" className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          >
            <span>{t.cta.buttonContact}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-900" aria-hidden="true" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/services")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>{t.cta.buttonServices}</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" aria-hidden="true" />
          </motion.button>
        </FadeInView>

        <p className="text-xs text-slate-400 pt-2 font-mono">
          {t.cta.trustNote}
        </p>
      </div>
    </section>
  );
};

export default CTASection;
