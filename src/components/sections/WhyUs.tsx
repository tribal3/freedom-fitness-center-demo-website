import { ArrowUpRight, Dumbbell, Layers, MapPin, Target, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const ICONS: LucideIcon[] = [Dumbbell, Layers, MapPin, Target, Users];

export function WhyUs() {
  const { t } = useLanguage();
  const why = t.why;

  return (
    <section
      aria-labelledby="why-title"
      className="relative overflow-hidden border-y border-white/10 bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-40"
      />
      <div className="shell relative grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        <Reveal className="self-start lg:sticky lg:top-28">
          <SectionHeading
            headingId="why-title"
            eyebrow={why.eyebrow}
            lead={why.titleLead}
            accent={why.titleAccent}
            description={why.description}
          />

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-3 border-b border-white/15 pb-2 text-white transition-colors hover:border-accent hover:text-accent"
          >
            <span className="label">{why.cta}</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.25}
            />
          </a>
        </Reveal>

        <ul className="border-t border-white/10">
          {why.items.map((item, index) => {
            const Icon = ICONS[index] ?? Dumbbell;
            return (
              <Reveal key={item.title} delay={index * 60}>
                <li className="group flex items-start gap-5 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-6 sm:py-7">
                  <span className="mt-0.5 grid size-11 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/[0.03] text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-white sm:text-[1.05rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                      {item.text}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="display shrink-0 text-sm text-white/15 transition-colors duration-300 group-hover:text-accent/50"
                  >
                    0{index + 1}
                  </span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
