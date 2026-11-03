import { useLanguage } from "../../i18n/LanguageProvider";

type BrandProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Brand({ className = "", onNavigate }: BrandProps) {
  const { t } = useLanguage();

  return (
    <a
      href="#home"
      onClick={onNavigate}
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Freedom Fitness Center — home"
    >
      <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-accent text-ink transition-transform duration-500 group-hover:rotate-[-6deg] sm:size-11">
        <svg viewBox="0 0 64 64" className="size-5" aria-hidden="true">
          <path d="M22 16h24v8H31v8h13v8H31v12h-9V16Z" fill="currentColor" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="display text-lg tracking-[0.08em] text-white sm:text-xl">
          Freedom
        </span>
        <span className="label mt-1 text-[0.55rem] text-white/45">{t.ui.brandSub}</span>
      </span>
    </a>
  );
}
