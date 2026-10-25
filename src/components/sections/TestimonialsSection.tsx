import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { useLanguage } from "../../context/LanguageContext";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote,
  ArrowUpRight,
  Mic,
  Languages,
  Volume2,
  Database,
  Film,
  Building2,
  MapPin,
  CheckCircle2,
  SlidersHorizontal
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeInView } from "../ui/FadeInView";
import { TESTIMONIALS_DATA, TestimonialItem } from "../../data/testimonials";

export const TestimonialsSection: React.FC = () => {
  const { navigate } = useNavigation();
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const total = TESTIMONIALS_DATA.length;
  const rawItem: TestimonialItem = TESTIMONIALS_DATA[currentIndex];

  // Resolve language-specific fields
  const isThai = language === "th";
  const currentItem = {
    ...rawItem,
    serviceLabel: isThai && rawItem.th ? rawItem.th.serviceLabel : rawItem.serviceLabel,
    partnerType: isThai && rawItem.th ? rawItem.th.partnerType : rawItem.partnerType,
    clientIndustry: isThai && rawItem.th ? rawItem.th.clientIndustry : rawItem.clientIndustry,
    quote: isThai && rawItem.th ? rawItem.th.quote : rawItem.quote,
    challenge: isThai && rawItem.th ? rawItem.th.challenge : rawItem.challenge,
    solution: isThai && rawItem.th ? rawItem.th.solution : rawItem.solution,
    authorRole: isThai && rawItem.th ? rawItem.th.authorRole : rawItem.author.role,
    keyMetric: isThai && rawItem.th ? rawItem.th.keyMetric : rawItem.keyMetric,
    additionalMetrics: isThai && rawItem.th ? rawItem.th.additionalMetrics : rawItem.additionalMetrics
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay effect with pause-on-hover
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, handleNext]);

  // Keyboard navigation when user is focused inside section
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  // Service icon mapping
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case "asr":
        return <Mic className="w-4 h-4 text-violet-600" aria-hidden="true" />;
      case "translate":
        return <Languages className="w-4 h-4 text-indigo-600" aria-hidden="true" />;
      case "tts":
        return <Volume2 className="w-4 h-4 text-amber-600" aria-hidden="true" />;
      case "data-collection":
        return <Database className="w-4 h-4 text-teal-600" aria-hidden="true" />;
      case "video-service":
        return <Film className="w-4 h-4 text-rose-600" aria-hidden="true" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-blue-600" aria-hidden="true" />;
    }
  };

  // Color theme lookup
  const getThemeAccents = (color: TestimonialItem["themeColor"]) => {
    switch (color) {
      case "violet":
        return {
          metricText: "text-violet-600",
          metricBg: "bg-violet-50/70 border-violet-200/80",
          activeTab: "bg-violet-600 text-white shadow-sm"
        };
      case "indigo":
        return {
          metricText: "text-indigo-600",
          metricBg: "bg-indigo-50/70 border-indigo-200/80",
          activeTab: "bg-indigo-600 text-white shadow-sm"
        };
      case "amber":
        return {
          metricText: "text-amber-600",
          metricBg: "bg-amber-50/70 border-amber-200/80",
          activeTab: "bg-amber-600 text-white shadow-sm"
        };
      case "teal":
        return {
          metricText: "text-teal-600",
          metricBg: "bg-teal-50/70 border-teal-200/80",
          activeTab: "bg-teal-600 text-white shadow-sm"
        };
      case "rose":
      default:
        return {
          metricText: "text-rose-600",
          metricBg: "bg-rose-50/70 border-rose-200/80",
          activeTab: "bg-rose-600 text-white shadow-sm"
        };
    }
  };

  const theme = getThemeAccents(rawItem.themeColor);

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.99
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.28 },
        scale: { duration: 0.28 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      scale: 0.99,
      transition: {
        x: { type: "spring" as const, stiffness: 280, damping: 28 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <section
      ref={sectionRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Client testimonials and AI partner success stories"
      className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200 focus:outline-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <FadeInView direction="up">
            <SectionHeading
              kicker={t.testimonials.kicker}
              title={t.testimonials.title}
              description={t.testimonials.description}
            />
          </FadeInView>

          {/* Carousel Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause automatic slide rotation" : "Resume automatic slide rotation"}
              title={isPlaying ? "Pause auto-advance" : "Start auto-advance"}
              className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="h-5 w-px bg-slate-200 mx-1" />
            <button
              onClick={handlePrev}
              aria-label="Previous partner testimonial"
              className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next partner testimonial"
              className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Discipline Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200/80">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider pr-2 hidden sm:flex items-center gap-1.5 shrink-0">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>{t.testimonials.selectFocus}</span>
          </div>
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isSelected = idx === currentIndex;
            const label = isThai && item.th ? item.th.serviceLabel.split(" ")[0] : item.serviceLabel.split(" ")[0];
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(idx)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-md transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? "bg-slate-900 text-white font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                <span>{label}</span>
                <span className="text-[10px] opacity-75">({item.clientOrganization.split(" ")[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Main Testimonial Showcase Box */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative min-h-[480px] rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden"
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`${currentItem.id}-${language}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 h-full"
            >
              {/* Left Column: Quote, Author, Context */}
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200">
                <div className="space-y-6">
                  {/* Zero-Pill Unboxed Metadata header */}
                  <div className="flex flex-wrap items-center gap-y-1.5 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                      {getServiceIcon(currentItem.serviceId)}
                      {currentItem.serviceLabel}
                    </span>
                    <span className="mx-2 text-slate-300">·</span>
                    <span className="text-slate-700 font-medium">{currentItem.partnerType}</span>
                    <span className="mx-2 text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      {currentItem.clientIndustry}
                    </span>
                  </div>

                  {/* Quote Display */}
                  <div className="relative pt-2">
                    <Quote
                      className="absolute -top-1 -left-2 w-10 h-10 text-slate-100 -z-0 pointer-events-none select-none"
                      aria-hidden="true"
                    />
                    <blockquote className="relative z-10 text-lg sm:text-xl lg:text-2xl font-normal text-slate-900 leading-relaxed font-sans">
                      &ldquo;{currentItem.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Challenge & Solution Summary */}
                  <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <p className="leading-relaxed">
                      <span className="font-semibold text-slate-900">{t.testimonials.partnerChallenge}: </span>
                      {currentItem.challenge}
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-semibold text-slate-900">{t.testimonials.tcaiDelivery}: </span>
                      {currentItem.solution}
                    </p>
                  </div>
                </div>

                {/* Author Credentials */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs tracking-tight">
                      {currentItem.author.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                        {currentItem.author.name}
                      </h4>
                      <p className="text-xs text-slate-600 font-medium">
                        {currentItem.authorRole} —{" "}
                        <span className="text-slate-900 font-semibold">{currentItem.clientOrganization}</span>
                      </p>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {currentItem.author.location}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate("/services", currentItem.serviceId)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors group/link cursor-pointer"
                  >
                    <span>{t.testimonials.exploreSpecs}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Engineering Metric & Technical Validation Panel */}
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 bg-slate-50/60 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
                    <span className="font-mono uppercase tracking-wider text-[11px] font-semibold text-slate-500">
                      {t.testimonials.technicalMetricAudit}
                    </span>
                    <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {t.testimonials.verifiedOutcome}
                    </span>
                  </div>

                  {/* Primary Key Metric Card */}
                  <div className={`p-6 rounded-xl border ${theme.metricBg} space-y-2`}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      {currentItem.keyMetric.label}
                    </span>
                    <div className={`text-4xl sm:text-5xl font-black tracking-tight ${theme.metricText} font-mono`}>
                      {currentItem.keyMetric.value}
                    </div>
                    <p className="text-xs text-slate-600 leading-normal pt-1">
                      {currentItem.keyMetric.detail}
                    </p>
                  </div>

                  {/* Supporting Engineering Benchmarks */}
                  <div className="space-y-2.5">
                    <h5 className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                      {t.testimonials.auditParameters}
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {currentItem.additionalMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs space-y-1"
                        >
                          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider truncate">
                            {metric.label}
                          </p>
                          <p className="text-xs font-bold text-slate-900 font-mono">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Compliance & Provenance Note */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span>{t.testimonials.complianceNote}</span>
                  <span className="font-mono text-[10px]">TCAI-{currentItem.id.slice(-3).toUpperCase()}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination & Indicator Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Progress / Step indicator */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-500 font-medium">
              {t.testimonials.caseCountText} {currentIndex + 1} / {total}
            </span>
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS_DATA.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  role="tab"
                  aria-selected={idx === currentIndex}
                  aria-label={`Jump to ${item.clientOrganization} testimonial`}
                  className={`h-2 transition-all rounded-full cursor-pointer ${
                    idx === currentIndex
                      ? "w-8 bg-slate-900"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Direct CTA link */}
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <span>{t.testimonials.ctaQuestion}</span>
            <button
              onClick={() => navigate("/contact")}
              className="font-semibold text-slate-900 hover:text-blue-600 underline underline-offset-4 transition-colors cursor-pointer"
            >
              {t.testimonials.ctaAction}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
