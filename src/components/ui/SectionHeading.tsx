import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  lead: string;
  accent: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
  headingId?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  lead,
  accent,
  description,
  align = "start",
  className = "",
  headingId,
  children,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={headingId} className="display h-section mt-5 text-white">
        <span className="block">{lead}</span>
        <span className="block text-accent">{accent}</span>
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/60 sm:text-base ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
