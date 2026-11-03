import { ArrowUp, ArrowUpRight, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { BUSINESS, SECTIONS } from "../../lib/business";
import { Brand } from "../ui/Brand";
import { Stars } from "../ui/Stars";

export function Footer() {
  const { t } = useLanguage();
  const footer = t.footer;

  return (
    <footer className="border-t border-white/10 bg-coal">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
          <div>
            <Brand />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              {footer.tagline}
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5">
              <Stars rating={BUSINESS.rating} starClassName="size-3" />
              <span className="label text-white/50">
                {BUSINESS.rating} · {BUSINESS.reviewCount} {footer.rating}
              </span>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="label text-white/30">{footer.explore}</h2>
            <ul className="mt-5 space-y-3">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-accent"
                  >
                    <span aria-hidden="true" className="h-px w-3 bg-white/20" />
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label text-white/30">{footer.contactHeading}</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent/70" strokeWidth={1.75} />
                <span className="leading-relaxed text-white/55">{footer.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent/70" strokeWidth={1.75} />
                <a
                  href={BUSINESS.phoneHref}
                  dir="ltr"
                  className="text-white/55 transition-colors hover:text-accent"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="mt-0.5 size-4 shrink-0 text-accent/70"
                  strokeWidth={1.75}
                />
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 transition-colors hover:text-accent"
                >
                  {footer.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Navigation
                  className="mt-0.5 size-4 shrink-0 text-accent/70"
                  strokeWidth={1.75}
                />
                <a
                  href={BUSINESS.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 transition-colors hover:text-accent"
                >
                  {footer.maps}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <p className="text-xs text-white/35">{footer.copyright}</p>
            <p className="text-[0.68rem] text-white/25">{footer.imageNote}</p>
          </div>

          <a
            href="#home"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-3 py-2 text-white/40 transition-colors hover:border-accent/40 hover:text-accent sm:self-auto"
          >
            <ArrowUp
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
            <span className="label">{t.hero.scroll}</span>
          </a>
        </div>

        <div
          dir="ltr"
          className="mt-6 flex justify-center border-t border-white/[0.06] pt-4"
        >
          <p className="text-center text-[0.68rem] leading-relaxed text-white/25">
            Website Concept Designed by{" "}
            <a
              href="https://tribal3.bond"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-1 font-semibold text-white/45 transition-colors duration-300 hover:text-accent"
            >
              TRIBAL³
              <ArrowUpRight
                className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2.25}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
