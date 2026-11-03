import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden bg-ink py-24 sm:py-28 lg:py-32"
    >
      <span
        aria-hidden="true"
        className="display pointer-events-none absolute -top-6 start-0 -z-0 text-[24vw] leading-none text-white/[0.025] select-none"
      >
        {t.deco.freedom}
      </span>

      <div className="shell relative grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10 bg-elevated sm:aspect-5/6">
              <Photo
                id={about.image.id}
                alt={about.image.alt}
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="photo h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />
              <span className="label absolute top-5 start-5 rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 text-white/60 backdrop-blur-md">
                {about.caption}
              </span>
            </div>

            <div className="absolute -bottom-7 end-4 rounded-2xl border border-accent/25 bg-coal/95 px-5 py-4 backdrop-blur-md sm:end-8">
              <p className="display text-3xl leading-none text-accent">{about.badgeValue}</p>
              <p className="label mt-2 max-w-[8rem] text-white/50">{about.badgeLabel}</p>
            </div>

            <div className="absolute -start-4 -bottom-12 hidden w-32 overflow-hidden rounded-xl border-4 border-ink bg-elevated lg:block">
              <div className="aspect-square">
                <Photo
                  id={about.detail.id}
                  alt={about.detail.alt}
                  sizes="128px"
                  widths={[240, 320, 480]}
                  className="photo h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={80}>
            <SectionHeading
              headingId="about-title"
              eyebrow={about.eyebrow}
              lead={about.titleLead}
              accent={about.titleAccent}
              description={about.description}
            />
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-9 space-y-5 border-t border-white/10 pt-8">
              {about.points.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                    <Check className="size-4" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-[0.95rem] font-semibold text-white">{point.title}</h3>
                    <p className="mt-1 max-w-md text-sm leading-relaxed text-white/50">
                      {point.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9">
              <Button
                href="#facilities"
                variant="outline"
                icon={<ArrowRight className="size-4" strokeWidth={2.5} />}
              >
                {about.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
