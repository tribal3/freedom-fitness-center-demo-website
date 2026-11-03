import { ArrowDown, ArrowRight, Layers } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";

export function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink"
    >
      <div className="absolute inset-0 -z-10">
        <Photo
          id={hero.image.id}
          alt={hero.image.alt}
          priority
          widths={[768, 1280, 1920, 2560]}
          sizes="100vw"
          className="photo hero-zoom h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/30 rtl:bg-linear-to-l" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/25 to-ink/70" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="shell relative flex flex-1 flex-col justify-end pt-32 pb-8 sm:pb-10">
        <div className="max-w-4xl">
          <p className="eyebrow animate-rise" style={{ animationDelay: "80ms" }}>
            {hero.eyebrow}
          </p>

          <h1 id="hero-title" className="display h-hero mt-6 text-white">
            <span
              className="animate-rise block"
              style={{ animationDelay: "160ms" }}
            >
              {hero.titleOne} <span className="text-accent">{hero.accentOne}</span>
            </span>
            <span
              className="animate-rise block"
              style={{ animationDelay: "260ms" }}
            >
              {hero.titleTwo} <span className="text-accent">{hero.accentTwo}</span>
            </span>
          </h1>

          <p
            className="animate-rise mt-7 max-w-xl text-[0.98rem] leading-relaxed text-white/65 sm:text-lg"
            style={{ animationDelay: "360ms" }}
          >
            {hero.description}
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            style={{ animationDelay: "460ms" }}
          >
            <Button href="#facilities" icon={<ArrowRight className="size-4" strokeWidth={2.5} />}>
              {hero.primary}
            </Button>
            <Button href="#contact" variant="outline">
              {hero.secondary}
            </Button>
          </div>
        </div>

        <div
          className="animate-fade mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-5 sm:mt-16"
          style={{ animationDelay: "700ms" }}
        >
          <a
            href="#about"
            className="group flex items-center gap-3 text-white/45 transition-colors hover:text-accent"
          >
            <span className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors group-hover:border-accent/50">
              <ArrowDown className="size-4 scroll-hint" strokeWidth={1.75} />
            </span>
            <span className="label">{hero.scroll}</span>
          </a>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 text-white/35 sm:flex">
              <Layers className="size-4 text-accent/70" strokeWidth={1.5} />
              <span className="label">{hero.badge}</span>
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="label text-white/35">{t.deco.city}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
