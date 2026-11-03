import {
  ArrowUpRight,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { BUSINESS } from "../../lib/business";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

function MapPanel() {
  const { t } = useLanguage();
  const map = t.contact.map;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/12]">
        <svg
          aria-hidden="true"
          viewBox="0 0 640 480"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <rect width="640" height="480" fill="#0a0c10" />

          {/* City blocks */}
          <g fill="#101419" stroke="#1b2129" strokeWidth="1">
            <rect x="28" y="26" width="150" height="104" rx="4" />
            <rect x="200" y="26" width="120" height="104" rx="4" />
            <rect x="342" y="26" width="128" height="104" rx="4" />
            <rect x="492" y="26" width="126" height="104" rx="4" />

            <rect x="28" y="152" width="150" height="120" rx="4" />
            <rect x="200" y="152" width="120" height="120" rx="4" />
            <rect x="342" y="152" width="128" height="120" rx="4" />
            <rect x="492" y="152" width="126" height="120" rx="4" />

            <rect x="28" y="294" width="150" height="160" rx="4" />
            <rect x="200" y="294" width="120" height="160" rx="4" />
            <rect x="342" y="294" width="128" height="160" rx="4" />
            <rect x="492" y="294" width="126" height="160" rx="4" />
          </g>

          {/* Street grid */}
          <g stroke="#1e242d" strokeWidth="16" strokeLinecap="square">
            <path d="M188 -20 V500" />
            <path d="M330 -20 V500" />
            <path d="M482 -20 V500" />
            <path d="M-20 140 H660" />
            <path d="M-20 282 H660" />
          </g>
          <g stroke="#2a323d" strokeWidth="1.5" strokeDasharray="14 18">
            <path d="M188 -20 V500" />
            <path d="M330 -20 V500" />
            <path d="M482 -20 V500" />
            <path d="M-20 140 H660" />
            <path d="M-20 282 H660" />
          </g>

          {/* Highlighted approach route */}
          <path
            d="M-20 414 H250 L306 350 H660"
            fill="none"
            stroke="#d7ff3e"
            strokeOpacity="0.55"
            strokeWidth="3"
            strokeDasharray="12 10"
            strokeLinecap="round"
          />
          <path
            d="M-20 414 H250 L306 350"
            fill="none"
            stroke="#d7ff3e"
            strokeWidth="7"
            strokeOpacity="0.1"
            strokeLinecap="round"
          />
        </svg>

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-ink/40" />

        <span className="label absolute top-4 start-4 rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 text-white/50 backdrop-blur">
          {map.label}
        </span>

        <span
          aria-hidden="true"
          className="absolute top-4 end-4 grid size-9 place-items-center rounded-full border border-white/10 bg-ink/70 text-white/40 backdrop-blur"
        >
          <Navigation className="size-4" strokeWidth={1.75} />
        </span>

        <div className="absolute inset-x-0 bottom-0 top-0 grid place-items-center">
          <div className="relative flex flex-col items-center">
            <span
              aria-hidden="true"
              className="absolute -inset-7 rounded-full bg-accent/10 blur-[2px]"
            />
            <span
              aria-hidden="true"
              className="absolute -inset-3 animate-ping rounded-full border border-accent/30 [animation-duration:3s]"
            />
            <span className="relative grid size-12 place-items-center rounded-full bg-accent text-ink shadow-[0_10px_30px_-6px_rgba(215,255,62,0.5)]">
              <MapPin className="size-6" strokeWidth={2} />
            </span>

            <div className="mt-4 rounded-xl border border-white/10 bg-ink/90 px-4 py-3 text-center backdrop-blur-md">
              <p className="text-xs font-semibold text-white">{map.pin}</p>
              <p className="mt-0.5 text-[0.65rem] text-white/45">{map.title}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 bg-ink/80 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <p className="label text-white/30">{map.city}</p>
          <p className="mt-1 text-sm text-white/85">{map.title}</p>
        </div>
        <a
          href={BUSINESS.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="label group inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 px-4 py-2.5 text-accent transition-colors hover:bg-accent hover:text-ink"
        >
          {map.cta}
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2.5}
          />
        </a>
      </div>
    </div>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const contact = t.contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-ink py-24 sm:py-28 lg:py-32"
    >
      <span
        aria-hidden="true"
        className="display pointer-events-none absolute -bottom-10 end-0 text-[22vw] leading-none text-white/[0.02] select-none"
      >
        {t.deco.city}
      </span>

      <div className="shell relative grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <SectionHeading
            headingId="contact-title"
            eyebrow={contact.eyebrow}
            lead={contact.titleLead}
            accent={contact.titleAccent}
            description={contact.description}
          />

          <div className="mt-9 space-y-5 border-t border-white/10 pt-8">
            <div className="flex items-start gap-4">
              <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                <MapPin className="size-5" strokeWidth={1.6} />
              </span>
              <div>
                <p className="label text-white/35">{contact.addressLabel}</p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white">
                  {contact.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                <Phone className="size-5" strokeWidth={1.6} />
              </span>
              <div>
                <p className="label text-white/35">{contact.phoneLabel}</p>
                <a
                  href={BUSINESS.phoneHref}
                  dir="ltr"
                  className="mt-1.5 inline-block text-[0.95rem] text-white transition-colors hover:text-accent"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={BUSINESS.phoneHref} icon={<Phone className="size-4" strokeWidth={2.25} />}>
              {contact.actions.call}
            </Button>
            <Button
              href={BUSINESS.whatsappHref}
              external
              variant="outline"
              icon={<MessageCircle className="size-4" strokeWidth={2.25} />}
            >
              {contact.actions.whatsapp}
            </Button>
            <Button
              href={BUSINESS.mapsHref}
              external
              variant="soft"
              icon={<Navigation className="size-4" strokeWidth={2.25} />}
            >
              {contact.actions.directions}
            </Button>
          </div>

          <p className="mt-8 flex max-w-xl items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-[0.75rem] leading-relaxed text-white/40">
            <Clock className="mt-0.5 size-4 shrink-0 text-accent/70" strokeWidth={1.75} />
            {contact.hoursNote}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <MapPanel />
        </Reveal>
      </div>
    </section>
  );
}
