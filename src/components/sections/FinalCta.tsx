import { ArrowRight, Navigation } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { BUSINESS } from "../../lib/business";
import { PHOTOS } from "../../lib/images";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";

export function FinalCta() {
  const { t } = useLanguage();
  const cta = t.finalCta;

  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden border-t border-white/10 bg-ink"
    >
      <div className="absolute inset-0 -z-10">
        <Photo
          id={PHOTOS.finalCta}
          alt=""
          widths={[768, 1280, 1920]}
          sizes="100vw"
          className="photo-mono h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/85 to-ink" />
        <div className="grain absolute inset-0" />
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute start-1/2 top-1/2 -z-10 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.06] blur-[120px] rtl:translate-x-1/2"
      />

      <div className="shell relative py-24 sm:py-28 lg:py-32">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="eyebrow justify-center">{cta.eyebrow}</p>

          <h2 id="final-cta-title" className="display h-section mt-5 text-white">
            <span className="block">{cta.titleLead}</span>
            <span className="mt-1 block text-accent">{cta.titleAccent}</span>
          </h2>

          <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-white/60 sm:text-base">
            {cta.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href="#contact" icon={<ArrowRight className="size-4" strokeWidth={2.5} />}>
              {cta.primary}
            </Button>
            <Button
              href={BUSINESS.mapsHref}
              external
              variant="outline"
              icon={<Navigation className="size-4" strokeWidth={2.25} />}
            >
              {cta.secondary}
            </Button>
          </div>

          <a
            href={BUSINESS.phoneHref}
            dir="ltr"
            className="mt-10 inline-flex items-center gap-3 text-white/40 transition-colors hover:text-accent"
          >
            <span className="h-px w-8 bg-white/20" />
            <span className="text-sm tracking-wide">{BUSINESS.phoneDisplay}</span>
            <span className="h-px w-8 bg-white/20" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
