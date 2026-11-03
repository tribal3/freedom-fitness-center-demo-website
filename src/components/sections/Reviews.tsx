import { ArrowUpRight, Star } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { BUSINESS } from "../../lib/business";
import { Button } from "../ui/Button";
import { Photo } from "../ui/Photo";
import { Reveal } from "../ui/Reveal";
import { Stars } from "../ui/Stars";

export function Reviews() {
  const { t } = useLanguage();
  const reviews = t.reviews;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="relative overflow-hidden border-b border-white/10 bg-coal py-24 sm:py-28 lg:py-32"
    >
      <div className="absolute inset-0">
        <Photo
          id={reviews.image.id}
          alt=""
          widths={[768, 1280, 1920]}
          sizes="100vw"
          className="photo-mono h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-coal via-coal/85 to-coal" />
        <div className="grain absolute inset-0" />
      </div>

      <div className="shell relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal className="w-full">
            <p className="eyebrow justify-center">{reviews.eyebrow}</p>

            <h2 id="reviews-title" className="display h-section mt-5 text-white">
              <span className="block">{reviews.titleLead}</span>
              <span className="mt-1 block text-accent">{reviews.titleAccent}</span>
            </h2>

            <div className="mt-11 flex flex-col items-center">
              <div className="flex items-end justify-center gap-3">
                <span className="display text-7xl leading-none text-white sm:text-8xl">
                  {reviews.scoreValue}
                </span>
                <span className="label pb-3 text-white/40 sm:pb-4">{reviews.scoreScale}</span>
              </div>

              <Stars
                rating={BUSINESS.rating}
                starClassName="size-6 sm:size-7"
                className="mt-5 gap-1.5"
              />

              <p className="mt-5 flex items-center gap-2 text-white/60">
                <Star className="size-4 text-star" strokeWidth={2} fill="currentColor" />
                <span className="text-sm sm:text-base">
                  <span className="font-semibold text-white">{BUSINESS.reviewCount}</span>{" "}
                  {reviews.reviewsLabel}
                </span>
              </p>
              <p className="mt-2 text-[0.7rem] text-white/30">{reviews.source}</p>

              <div className="mt-9">
                <Button
                  href={BUSINESS.mapsHref}
                  external
                  icon={<ArrowUpRight className="size-4" strokeWidth={2.5} />}
                >
                  {reviews.cta}
                </Button>
              </div>

              <p className="mt-8 max-w-lg border-t border-white/10 pt-6 text-[0.75rem] leading-relaxed text-white/35">
                {reviews.note}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
