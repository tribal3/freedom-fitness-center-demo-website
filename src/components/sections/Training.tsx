import { ArrowRight, Info } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Training() {
  const { t } = useLanguage();
  const training = t.training;

  return (
    <section
      id="training"
      aria-labelledby="training-title"
      className="relative overflow-hidden bg-ink py-24 sm:py-28 lg:py-32"
    >
      <div className="shell">
        <Reveal>
          <SectionHeading
            headingId="training-title"
            eyebrow={training.eyebrow}
            lead={training.titleLead}
            accent={training.titleAccent}
            description={training.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {training.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="h-full">
              <article className="group relative flex h-full min-h-[24rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-500 hover:border-accent/40 lg:min-h-[30rem]">
                <Photo
                  id={item.image.id}
                  alt={item.image.alt}
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                  widths={[480, 768, 1024, 1440]}
                  className="photo-mono absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[900ms] ease-out group-hover:scale-[1.06] group-hover:opacity-90 group-hover:[filter:grayscale(0.1)_contrast(1.02)]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 to-ink/5" />

                <div className="relative flex flex-col gap-3 p-6">
                  <span className="label text-accent/70">0{index + 1}</span>
                  <h3 className="display h-card text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{item.text}</p>
                  <span
                    aria-hidden="true"
                    className="mt-2 h-px w-full bg-white/10 transition-colors duration-500 group-hover:bg-accent/50"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="flex max-w-xl items-start gap-3 text-[0.8rem] leading-relaxed text-white/40">
              <Info className="mt-0.5 size-4 shrink-0 text-accent/60" strokeWidth={1.75} />
              {training.note}
            </p>
            <Button
              href="#contact"
              variant="outline"
              className="shrink-0 self-start md:self-auto"
              icon={<ArrowRight className="size-4" strokeWidth={2.5} />}
            >
              {training.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
