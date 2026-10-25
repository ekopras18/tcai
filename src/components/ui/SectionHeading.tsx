import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  centered?: boolean;
  alignLeftOnMobile?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  centered = false,
}) => {
  return (
    <div className={`space-y-3 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {kicker && (
        <p className="text-xs font-semibold tracking-wider uppercase text-blue-600">
          {kicker}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-600 leading-relaxed max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </div>
  );
};
