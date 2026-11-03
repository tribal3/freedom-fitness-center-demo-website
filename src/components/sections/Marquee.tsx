import { useLanguage } from "../../i18n/LanguageProvider";

export function Marquee() {
  const { t } = useLanguage();
  const loop = [...t.ticker.words, ...t.ticker.words];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-coal py-4 sm:py-5">
      <div className="marquee-track flex w-max items-center hover:[animation-play-state:paused]">
        {loop.map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center">
            <span className="display px-6 text-lg whitespace-nowrap text-white/70 sm:text-xl">
              {word}
            </span>
            <span className="text-xs text-accent" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-linear-to-r from-coal to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-linear-to-l from-coal to-transparent sm:w-28" />
    </div>
  );
}
