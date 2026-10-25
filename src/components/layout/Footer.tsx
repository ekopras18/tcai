import React from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { MAIN_NAV, FOOTER_SERVICE_LINKS } from "../../data/navigation";
import { COMPANY_INFO } from "../../data/company";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex items-baseline gap-2 inline-flex"
            >
              <span className="text-2xl font-extrabold tracking-tight text-white">
                TCAI
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Information Technology
              </span>
            </motion.div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {COMPANY_INFO.legalEntity} provides enterprise solutions across Translate, ASR, TTS, Data Collection, and Video Service.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
              <span>Structured quality controls & strict project confidentiality.</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {MAIN_NAV.map((item) => (
                <li key={item.id}>
                  <motion.button
                    whileHover={{ x: 3, color: "#ffffff" }}
                    transition={{ duration: 0.15 }}
                    onClick={() => navigate(item.href)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {item.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SERVICE_LINKS.map((service, idx) => (
                <li key={idx}>
                  <motion.button
                    whileHover={{ x: 3, color: "#ffffff" }}
                    transition={{ duration: 0.15 }}
                    onClick={() => navigate(service.href)}
                    className="hover:text-white transition-colors text-left truncate max-w-full cursor-pointer"
                  >
                    {service.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Communication & Inquiry */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Project Inquiries
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have specifications, language requirements, or dataset volumes to review? Connect with our project desk.
            </p>
            <div className="pt-1">
              <motion.a
                whileHover={{ scale: 1.02, x: 2 }}
                transition={{ duration: 0.15 }}
                href={`mailto:${COMPANY_INFO.contact.officialEmail}`}
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{COMPANY_INFO.contact.officialEmail}</span>
              </motion.a>
            </div>
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "#334155" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 text-xs font-medium text-white bg-slate-800 px-3 py-2 rounded transition-colors cursor-pointer shadow-xs"
              >
                <span>Draft project inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {COMPANY_INFO.legalEntity}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ color: "#ffffff", y: -1 }}
              transition={{ duration: 0.15 }}
              onClick={() => navigate("/about")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              About Organization
            </motion.button>
            <motion.button
              whileHover={{ color: "#ffffff", y: -1 }}
              transition={{ duration: 0.15 }}
              onClick={() => navigate("/careers")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Collaborator Network
            </motion.button>
            <motion.button
              whileHover={{ color: "#ffffff", y: -1 }}
              transition={{ duration: 0.15 }}
              onClick={() => navigate("/contact")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Contact Desk
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
