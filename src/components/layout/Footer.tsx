import React from "react";
import { motion } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { useLanguage } from "../../context/LanguageContext";
import { COMPANY_INFO } from "../../data/company";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();
  const { t } = useLanguage();
  const currentYear = 2026;

  const navItems = [
    { name: t.nav.home, href: "/", id: "home" },
    { name: t.nav.about, href: "/about", id: "about" },
    { name: t.nav.services, href: "/services", id: "services" },
    { name: t.nav.industries, href: "/industries", id: "industries" },
    { name: t.nav.careers, href: "/careers", id: "careers" },
    { name: t.nav.contact, href: "/contact", id: "contact" }
  ];

  const serviceLinks = [
    { name: t.hero.services[0].name, href: "/services?item=translate" },
    { name: t.hero.services[1].name, href: "/services?item=asr" },
    { name: t.hero.services[2].name, href: "/services?item=tts" },
    { name: t.hero.services[3].name, href: "/services?item=data-collection" },
    { name: t.hero.services[4].name, href: "/services?item=video-service" }
  ];

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
                {t.nav.taglineSubtitle}
              </span>
            </motion.div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {t.footer.legalDescription}
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
              <span>{t.footer.qualityStatement}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              {t.footer.companyHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
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
              {t.footer.servicesHeading}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((service, idx) => (
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
              {t.footer.inquiriesHeading}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.inquiriesDescription}
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
                <span>{t.footer.draftInquiryBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {t.footer.copyrightText}
          </p>
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ color: "#ffffff", y: -1 }}
              transition={{ duration: 0.15 }}
              onClick={() => navigate("/about")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t.footer.aboutOrg}
            </motion.button>
            <motion.button
              whileHover={{ color: "#ffffff", y: -1 }}
              transition={{ duration: 0.15 }}
              onClick={() => navigate("/careers")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t.footer.collaboratorNetwork}
            </motion.button>
            <motion.button
              whileHover={{ color: "#ffffff", y: -1 }}
              transition={{ duration: 0.15 }}
              onClick={() => navigate("/contact")}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t.footer.contactDesk}
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
