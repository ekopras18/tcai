import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigation } from "../../context/NavigationContext";
import { MAIN_NAV } from "../../data/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={() => handleNavClick("/")}
            className="flex items-baseline gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-blue-600 focus:outline-none rounded cursor-pointer"
            aria-label="TCAI Home"
          >
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
              TCAI
            </span>
            <span className="hidden sm:inline text-xs font-medium text-slate-500 tracking-normal whitespace-nowrap">
              Information Technology
            </span>
          </motion.button>

          {/* Zone 2: Single-line Text Navigation Links with Framer Motion hover & layout indicator */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {MAIN_NAV.map((item) => {
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

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              onClick={() => handleNavClick("/contact")}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer shadow-xs"
            >
              <span>Discuss a Project</span>
              <motion.span
                whileHover={{ x: 2, y: -2 }}
                transition={{ duration: 0.15 }}
                className="inline-block"
              >
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </motion.span>
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center">
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
            className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col space-y-2">
              {MAIN_NAV.map((item) => {
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
              <div className="pt-3 border-t border-slate-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick("/contact")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <span>Discuss a Project</span>
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
