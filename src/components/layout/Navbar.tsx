import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { useLanguage } from "../../context/LanguageContext";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t.nav.home, href: "/", id: "home" },
    { name: t.nav.about, href: "/about", id: "about" },
    { name: t.nav.services, href: "/services", id: "services" },
    { name: t.nav.industries, href: "/industries", id: "industries" },
    { name: t.nav.careers, href: "/careers", id: "careers" },
    { name: t.nav.contact, href: "/contact", id: "contact" }
  ];

  const handleNavClick = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Brand Wordmark */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={() => handleNavClick("/")}
            className="flex items-baseline gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-blue-600 focus:outline-none rounded cursor-pointer shrink-0"
            aria-label="TCAI Home"
          >
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
              TCAI
            </span>
            <span className="hidden sm:inline text-xs font-medium text-slate-500 tracking-normal whitespace-nowrap">
              {t.nav.taglineSubtitle}
            </span>
          </motion.button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-slate-600">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.href);
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Zone 3: Actions & Language Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Desktop Language Switcher */}
            <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-1" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded font-medium text-[11px] transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-white text-slate-900 font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("th")}
                className={`px-2 py-1 rounded font-medium text-[11px] transition-all cursor-pointer ${
                  language === "th"
                    ? "bg-white text-slate-900 font-semibold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="เปลี่ยนเป็นภาษาไทย (Thai)"
              >
                ไทย
              </button>
            </div>

            {/* Primary Action Button */}
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              onClick={() => handleNavClick("/contact")}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer shadow-xs"
            >
              <span>{t.nav.discussProject}</span>
              <motion.span
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.15 }}
                className="inline-block"
              >
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile controls: language switch & menu hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="flex sm:hidden items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  language === "en" ? "bg-white text-slate-900 font-semibold shadow-xs" : "text-slate-600"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("th")}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  language === "th" ? "bg-white text-slate-900 font-semibold shadow-xs" : "text-slate-600"
                }`}
              >
                ไทย
              </button>
            </div>

            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile drawer with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(item.href);
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors cursor-pointer ${
                      isActive
                        ? "bg-slate-50 text-blue-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                );
              })}

              {/* Mobile language switch row */}
              <div className="pt-3 pb-1 border-t border-slate-100 flex items-center justify-between px-1">
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>Language / ภาษา</span>
                </span>
                <div className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 rounded-md font-medium text-xs transition-all ${
                      language === "en" ? "bg-white text-slate-900 font-semibold shadow-xs" : "text-slate-600"
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("th")}
                    className={`px-3 py-1 rounded-md font-medium text-xs transition-all ${
                      language === "th" ? "bg-white text-slate-900 font-semibold shadow-xs" : "text-slate-600"
                    }`}
                  >
                    ภาษาไทย (TH)
                  </button>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick("/contact")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <span>{t.nav.discussProject}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
