import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "soft";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-ink hover:bg-white shadow-[0_14px_40px_-18px_rgba(215,255,62,0.75)]",
  outline:
    "border border-white/20 bg-white/[0.03] text-white backdrop-blur-sm hover:border-accent/60 hover:text-accent",
  soft: "border border-white/10 bg-white/[0.06] text-white hover:border-white/25 hover:bg-white/[0.1]",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  className = "",
  ariaLabel,
  onClick,
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      {...externalProps}
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3.5 transition-all duration-300 active:scale-[0.985] sm:px-7 ${VARIANTS[variant]} ${className}`}
    >
      <span className="label relative z-10">{children}</span>
      {icon ? (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
          {icon}
        </span>
      ) : null}
      {variant === "primary" ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -start-1/2 w-1/2 -skew-x-12 bg-white/40 opacity-0 transition-all duration-700 group-hover:start-[120%] group-hover:opacity-100"
        />
      ) : null}
    </a>
  );
}
