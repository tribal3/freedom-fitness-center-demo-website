import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Facilities() {
  const { t } = useLanguage();
  const facilities = t.facilities;

  return (
    <section
      id="facilities"
      aria-labelledby="facilities-title"
      className="relative border-y border-white/10 bg-coal py-24 sm:py-28 lg:py-32"
    >
      <div className="shell">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            headingId="facilities-title"
            eyebrow={facilities.eyebrow}
            lead={facilities.titleLead}
            accent={facilities.titleAccent}
            description={facilities.description}
          />
          <div className="hidden shrink-0 items-center gap-3 pb-2 lg:flex">
            <span className="display text-5xl text-white/12">
              {String(facilities.items.length).padStart(2, "0")}
            </span>
            <span className="label max-w-[7rem] text-white/40">{facilities.eyebrow}</span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.items.map((item, index) => {
            const isFeature = index === 0;
            return (
              <Reveal
                key={item.title}
                delay={index * 70}
                className={
                  isFeature ? "sm:col-span-2 lg:col-span-2" : "sm:col-span-1"
                }
              >
                <article className="group relative h-full min-h-[19rem] overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-500 hover:border-accent/40 lg:min-h-[21rem]">
                  <Photo
                    id={item.image.id}
                    alt={item.image.alt}
                    sizes={
                      isFeature
                        ? "(min-width: 1024px) 62vw, (min-width: 640px) 94vw, 92vw"
                        : "(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                    }
                    className="photo-mono absolute inset-0 h-full w-full object-cover opacity-55 transition-all duration-[900ms] ease-out group-hover:scale-[1.05] group-hover:opacity-80 group-hover:[filter:grayscale(0.15)_contrast(1.05)]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/70 to-ink/10" />
                  <div className="absolute inset-0 bg-linear-to-r from-ink/60 to-transparent rtl:bg-linear-to-l" />

                  <div className="relative flex h-full flex-col justify-end gap-2 p-6 sm:p-7">
                    <div className="mb-auto flex items-start justify-between">
                      <span className="label text-white/30">
                        0{index + 1}
                      </span>
                      <span className="grid size-9 place-items-center rounded-full border border-white/15 text-white/50 transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
                        <ArrowUpRight
                          className="size-4 transition-transform duration-500 group-hover:rotate-45"
                          strokeWidth={2}
                        />
                      </span>
                    </div>

                    <h3 className="display h-card text-white">{item.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-white/55 transition-colors duration-500 group-hover:text-white/70">
                      {item.text}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-4 block h-px w-10 bg-accent/60 transition-all duration-500 group-hover:w-20"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 max-w-2xl text-[0.7rem] leading-relaxed text-white/30">
          {facilities.note}
        </p>
      </div>
    </section>
  );
}
