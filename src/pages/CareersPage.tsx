import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CAREERS_DATA, CareerCategory } from "../data/careers";
import { COMPANY_INFO } from "../data/company";
import { FadeInView, StaggerContainer, StaggerItem } from "../components/ui/FadeInView";
import { 
  Check, 
  Info, 
  ArrowUpRight, 
  Mail, 
  Copy, 
  CheckCheck, 
  X 
} from "lucide-react";

export const CareersPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<CareerCategory | null>(null);
  const [copied, setCopied] = useState(false);

  const handleOpenInterestModal = (role: CareerCategory) => {
    setSelectedRole(role);
    setCopied(false);
  };

  const generateMailtoUrl = (role: CareerCategory) => {
    const subject = encodeURIComponent(`[Collaborator Interest] ${role.roleTitle} — TCAI Network`);
    const body = encodeURIComponent(
      `Hello TCAI Talent Operations Team,\n\nI am expressing interest in joining your specialist network for: ${role.roleTitle} (${role.engagement}).\n\nName:\nLocation & Timezone:\nPrimary Language(s) or Tools:\nRelevant Experience / Portfolio Link:\nAvailability (Hours/Week):\n\nLooking forward to hearing from you.\n`
    );
    return `mailto:${COMPANY_INFO.contact.careersEmail}?subject=${subject}&body=${body}`;
  };

  const getDraftText = (role: CareerCategory) => {
    return `To: ${COMPANY_INFO.contact.careersEmail}
Subject: [Collaborator Interest] ${role.roleTitle} — TCAI Network

Hello TCAI Talent Operations Team,

I am expressing interest in joining your specialist network for: ${role.roleTitle} (${role.engagement}).

Name: [Your Name]
Location & Timezone: [Your City / Country]
Primary Language(s) or Tools: [e.g. English/Indonesian, Premiere Pro, Labelbox]
Relevant Experience / Portfolio Link: [Link or Summary]
Availability: [e.g. 15-20 hrs/week]

Looking forward to hearing from you.`;
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs currentPage="Careers & Collaborators" />
          <FadeInView direction="up" className="max-w-3xl space-y-4 pt-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-cyan-400">
              Specialist Network
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              Collaborate With TCAI
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
              We partner with skilled linguists, AI data labeling practitioners, speech technicians, voice talent, and video editors across distributed, project-based workflows.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Project Availability Notice Box */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView direction="up" distance={10}>
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-900">
                  Notice on Collaboration & Project Schedules
                </p>
                <p className="leading-relaxed">
                  TCAI operates on a project-based and batch-driven collaboration model. Positions and tasks listed below represent our active specialist pools. Project volume and intake windows depend on client requirements and confirmed sprint milestones.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FadeInView direction="up">
            <SectionHeading
              kicker="Specialist Domains"
              title="Professional Collaboration Pools"
              description="Explore our primary talent categories and submit your credentials for upcoming project batches."
            />
          </FadeInView>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAREERS_DATA.map((career) => (
              <StaggerItem key={career.id} className="h-full">
                <motion.div
                  whileHover={{ 
                    y: -6, 
                    borderColor: "#94a3b8",
                    boxShadow: "0 14px 28px -6px rgba(15, 23, 42, 0.08)"
                  }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] as const }}
                  className="h-full bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors space-y-6 group cursor-default"
                >
                  <div className="space-y-4">
                    <div>
                      {/* Zero-pill: clean text metadata */}
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span>{career.type}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-blue-600">{career.engagement}</span>
                      </div>
                      <h2 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                        {career.roleTitle}
                      </h2>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {career.overview}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Core Responsibilities
                      </p>
                      <ul className="space-y-1.5">
                        {career.responsibilities.map((resp, rIdx) => (
                          <motion.li
                            key={rIdx}
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.15 }}
                            className="flex items-start gap-2 text-xs text-slate-600"
                          >
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Target Qualifications
                      </p>
                      <ul className="space-y-1.5">
                        {career.qualifications.map((qual, qIdx) => (
                          <li key={qIdx} className="flex items-start gap-2 text-xs text-slate-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <motion.button
                      whileHover={{ scale: 1.025, backgroundColor: "#0f172a", color: "#ffffff" }}
                      whileTap={{ scale: 0.975 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => handleOpenInterestModal(career)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-slate-100 rounded-lg transition-colors cursor-pointer shadow-2xs"
                    >
                      <span>Express Your Interest</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </motion.button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Interactive Modal for Email Draft */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-white rounded-2xl border border-slate-200 max-w-lg w-full p-6 space-y-6 shadow-2xl relative z-10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Collaborator Inquiry
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {selectedRole.roleTitle}
                  </h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setSelectedRole(null)}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                We manage collaborator onboarding directly via our talent operations email. Click below to launch your email client with a preformatted inquiry draft, or copy the template to your clipboard.
              </p>

              {/* Draft Preview Box */}
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4 font-mono text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                {getDraftText(selectedRole)}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  href={generateMailtoUrl(selectedRole)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-xs cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Email App</span>
                </motion.a>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03, backgroundColor: "#e2e8f0" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => handleCopyText(getDraftText(selectedRole))}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Template</span>
                    </>
                  )}
                </motion.button>
              </div>

              <p className="text-[11px] text-slate-600 text-center">
                No backend submission required. All communications sent securely from your own client.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersPage;
