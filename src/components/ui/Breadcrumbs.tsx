import React from "react";
import { useNavigation } from "../../context/NavigationContext";
import { useLanguage } from "../../context/LanguageContext";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  currentPage: string;
  parentPage?: { name: string; href: string };
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, parentPage }) => {
  const { navigate } = useNavigation();
  const { t } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
        <li>
          <button
            onClick={() => navigate("/")}
            className="hover:text-blue-600 transition-colors cursor-pointer"
          >
            {t.nav.home}
          </button>
        </li>
        {parentPage && (
          <li className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            <button
              onClick={() => navigate(parentPage.href)}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              {parentPage.name}
            </button>
          </li>
        )}
        <li className="flex items-center space-x-2">
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          <span className="text-slate-900 font-semibold" aria-current="page">
            {currentPage}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
