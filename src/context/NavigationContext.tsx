import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface NavigationContextType {
  currentPath: string;
  activeParam: string | null;
  navigate: (path: string, param?: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

function parsePath(pathname: string): { path: string; param: string | null } {
  const url = new URL(window.location.href);
  const param = url.searchParams.get("item") || url.searchParams.get("role") || null;
  
  // Normalize path
  let normalized = pathname;
  if (!normalized || normalized === "") normalized = "/";
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return { path: normalized, param };
}

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return parsePath(window.location.pathname).path;
  });
  const [activeParam, setActiveParam] = useState<string | null>(() => {
    return parsePath(window.location.pathname).param;
  });

  useEffect(() => {
    const handlePopState = () => {
      const { path, param } = parsePath(window.location.pathname);
      setCurrentPath(path);
      setActiveParam(param);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (toPath: string, param?: string) => {
    let target = toPath;
    let queryParam = param || null;

    if (toPath.includes("?")) {
      const parts = toPath.split("?");
      target = parts[0];
      const searchParams = new URLSearchParams(parts[1]);
      queryParam = searchParams.get("item") || searchParams.get("role") || null;
    }

    if (!target || target === "") target = "/";
    if (target.length > 1 && target.endsWith("/")) {
      target = target.slice(0, -1);
    }

    setCurrentPath(target);
    setActiveParam(queryParam);

    let newUrl = target;
    if (queryParam) {
      newUrl += `?item=${encodeURIComponent(queryParam)}`;
    }

    // Update browser URL history safely
    try {
      window.history.pushState({}, "", newUrl);
    } catch {
      // In sandbox if pushState restricted, state continues working
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavigationContext.Provider value={{ currentPath, activeParam, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
