import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { BUSINESS } from "../../lib/business";
import { Stars } from "../ui/Stars";

export function TrustBar() {
  const { t } = useLanguage();
  const trust = t.trust;

  return (
    <section aria-label="Google rating and location" className="border-b border-white/10 bg-ink">
      <div className="shell">
        <div className="grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="flex flex-col gap-2 py-8 md:px-8 md:py-11 md:first:ps-0">
            <span className="label text-white/35">01</span>
            <div className="mt-1 flex items-end gap-2">
              <span className="display text-5xl text-white sm:text-6xl">
                {trust.ratingValue}
              </span>
              <span className="label pb-2 text-white/40">{trust.ratingScale}</span>
            </div>
            <Stars rating={BUSINESS.rating} starClassName="size-3.5" />
            <p className="label mt-1 text-white/50">{trust.ratingLabel}</p>
          </div>

          <div className="flex flex-col gap-2 py-8 md:px-8 md:py-11">
            <span className="label text-white/35">02</span>
            <div className="mt-1 flex items-end gap-2">
              <span className="display text-5xl text-white sm:text-6xl">
                {trust.reviewsValue}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-white/35">
              <Star className="size-3.5 text-accent" strokeWidth={2} />
              <span className="label">{trust.reviewsLabel}</span>
            </div>
            <p className="label mt-1 text-white/35">{t.footer.rating}</p>
          </div>

          <div className="flex flex-col gap-2 py-8 md:px-8 md:py-11 md:last:pe-0">
            <span className="label text-white/35">03</span>
            <div className="mt-1 flex items-end gap-3">
              <MapPin className="mb-1 size-6 text-accent" strokeWidth={1.5} />
              <span className="display text-3xl text-white sm:text-4xl">
                {trust.locationValue}
              </span>
            </div>
            <p className="label mt-1 text-white/50">{trust.locationLabel}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.7rem] leading-relaxed text-white/30">{trust.source}</p>
          <a
            href={BUSINESS.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="label inline-flex items-center gap-2 self-start text-accent/80 transition-colors hover:text-accent"
          >
            {trust.link}
            <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
