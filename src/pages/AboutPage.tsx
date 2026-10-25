import React from "react";
import { motion } from "framer-motion";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { COMPANY_INFO } from "../data/company";
import { CTASection } from "../components/sections/CTASection";
import { FadeInView, StaggerContainer, StaggerItem } from "../components/ui/FadeInView";
import { 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Compass, 
  CheckCircle, 
  RefreshCw, 
  Lock, 
  Users2 
} from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs currentPage="About Us" />
          <FadeInView direction="up" className="max-w-3xl space-y-4 pt-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Identity & Operational Approach
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Connecting Human Expertise with Technology
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
              {COMPANY_INFO.heroSubheadline}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Section 1: Company Overview */}
      <section className="py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <FadeInView direction="up" className="lg:col-span-5 space-y-4">
              <SectionHeading
                kicker="Company Profile"
                title="About TCAI Information Technology"
                description="A specialized provider of high-fidelity data, linguistic solutions, and digital creative pipelines."
              />
            </FadeInView>
            <FadeInView delay={0.1} direction="up" className="lg:col-span-7 space-y-6 text-base text-slate-600 leading-relaxed">
              <p>
                <strong>{COMPANY_INFO.legalEntity}</strong> was established to bridge the gap between automated digital systems and the nuanced precision required for high-stakes enterprise applications. As artificial intelligence models and digital media platforms evolve, raw computation alone cannot replicate the cultural accuracy of native linguists, the critical discernment of acoustic specialists, or the visual craftsmanship of seasoned video editors.
              </p>
              <p>
                Our organization brings together domain-tested specialists across Translate (language and localization), ASR (automatic speech recognition), TTS (text-to-speech evaluation), Data Collection (AI data pipelines), and Video Service (digital media production). We structure workflows that scale smoothly with client requirements, providing the operational rigor required to train production AI models, adapt software for international markets, and deliver broadcast-quality media.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg bg-slate-50 border border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Rigorous Data Hygiene</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Proprietary datasets and client IP handled under strict confidentiality.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-lg bg-slate-50 border border-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <Users2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Human-in-the-Loop</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Subject matter specialists validating nuanced domain terminology.
                  </p>
                </motion.div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeInView direction="up">
            <SectionHeading
              centered
              kicker="Purpose & Direction"
              title="Mission & Vision"
              description="Guiding our operational principles and service delivery frameworks."
            />
          </FadeInView>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-8 rounded-xl border border-slate-200 space-y-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  &ldquo;{COMPANY_INFO.mission}&rdquo;
                </p>
              </motion.div>
            </StaggerItem>

            {/* Vision */}
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-8 rounded-xl border border-slate-200 space-y-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center">
                  <Compass className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  &ldquo;{COMPANY_INFO.vision}&rdquo;
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section className="py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <FadeInView direction="up">
            <SectionHeading
              centered
              kicker="Organizational Standards"
              title="Core Values"
              description="The bedrock principles that govern every client collaboration and internal project phase."
            />
          </FadeInView>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {COMPANY_INFO.coreValues.map((val) => (
              <StaggerItem key={val.title} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full p-6 rounded-xl bg-slate-50/80 border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-md bg-blue-600/10 text-blue-600 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Section 4: Our Approach */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeInView direction="up">
            <SectionHeading
              kicker="Operational Rigor"
              title="Our Delivery Approach"
              description="How we maintain consistent quality across varied data schemas, language pairs, and media formats."
            />
          </FadeInView>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 hover:shadow-xs transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Human-in-the-Loop Foundation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Automated tools provide initial efficiency, but every deliverable undergoes human review by qualified native linguists, audio engineers, or annotation reviewers.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 hover:shadow-xs transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Iterative Calibration Loops
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Prior to full-scale production, we conduct pilot verification batches to calibrate guidelines, resolve borderline edge cases, and align with client benchmarks.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 hover:shadow-xs transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Confidentiality & Compliance
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  All specialists work under non-disclosure protocols with role-segregated access to source files, preserving the security of pre-release intellectual property.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default AboutPage;
