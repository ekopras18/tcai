import React from "react";
import { motion } from "framer-motion";

export const PageLoader: React.FC = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center space-y-4"
    >
      <div className="relative w-12 h-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full border-2 border-slate-200 border-t-blue-600"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
        </div>
      </div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        Loading module...
      </p>
      <span className="sr-only">Loading page content</span>
    </div>
  );
};
