import React, { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PageLoader } from "./components/ui/PageLoader";

// React.lazy dynamic imports for code-splitting and bundle optimization
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

const PageRenderer: React.FC = () => {
  const { currentPath } = useNavigation();

  const renderActivePage = () => {
    switch (currentPath) {
      case "/about":
        return <AboutPage />;
      case "/services":
        return <ServicesPage />;
      case "/industries":
        return <IndustriesPage />;
      case "/careers":
        return <CareersPage />;
      case "/contact":
        return <ContactPage />;
      case "/":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {renderActivePage()}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <LanguageProvider>
        <PageRenderer />
      </LanguageProvider>
    </NavigationProvider>
  );
}

