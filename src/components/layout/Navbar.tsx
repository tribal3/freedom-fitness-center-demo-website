import { ArrowUpRight, Globe, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useScrolled } from "../../hooks/useScrolled";
import { useLanguage } from "../../i18n/LanguageProvider";
import { BUSINESS, SECTIONS } from "../../lib/business";
import { Brand } from "../ui/Brand";

const NAV_LINKS = SECTIONS;

export function Navbar() {
  const { t, toggleLanguage } = useLanguage();
  const scrolled = useScrolled(20);
  const active = useScrollSpy(NAV_LINKS);
  const [open, setOpen] = useState(false);

  /** Close the sheet first, then scroll once the body scroll lock is released. */
  const goToSection = (id: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`shell flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16 lg:h-20" : "h-20 lg:h-24"
        }`}
      >
        <Brand onNavigate={() => setOpen(false)} />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-9">
          {NAV_LINKS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              data-active={active === id}
              className="navlink label relative py-2 text-white/55 transition-colors duration-300 hover:text-white data-[active=true]:text-white"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t.ui.switchAria}
            className="label hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-white/70 transition-all duration-300 hover:border-accent/50 hover:text-accent sm:inline-flex"
          >
            <Globe className="size-4" strokeWidth={1.75} />
            {t.ui.switchLabel}
          </button>

          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-ink transition-all duration-300 hover:bg-white sm:inline-flex"
          >
            <span className="label">{t.nav.join}</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.ui.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-accent/50 hover:text-accent lg:hidden"
          >
            <Menu className="size-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "visible" : "invisible"}`}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label={t.ui.menuClose}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 h-full w-full bg-ink/80 backdrop-blur-sm transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label={t.nav.home}
          className={`grain absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto border-b border-white/10 bg-coal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="shell flex h-20 items-center justify-between">
            <Brand onNavigate={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.ui.menuClose}
              className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-accent/50 hover:text-accent"
            >
              <X className="size-5" strokeWidth={1.75} />
            </button>
          </div>

          <nav aria-label="Mobile" className="shell flex flex-col pb-4">
            {NAV_LINKS.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => {
                  event.preventDefault();
                  goToSection(id);
                }}
                className={`group flex items-center justify-between border-t border-white/10 py-4 transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${90 + index * 45}ms` : "0ms" }}
              >
                <span className="display text-2xl text-white group-hover:text-accent sm:text-3xl">
                  {t.nav[id]}
                </span>
                <span className="label text-white/25 group-hover:text-accent">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="shell flex flex-col gap-3 pb-8">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                goToSection("contact");
              }}
              className="flex items-center justify-between rounded-full bg-accent px-6 py-4 text-ink"
            >
              <span className="label">{t.nav.join}</span>
              <ArrowUpRight className="size-5" strokeWidth={2.5} />
            </a>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={t.ui.switchAria}
                className="label flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-4 text-white/75 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Globe className="size-4" strokeWidth={1.75} />
                {t.ui.switchLabel}
              </button>

              <a
                href={BUSINESS.phoneHref}
                className="label flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-4 text-white/75 transition-colors hover:border-accent/50 hover:text-accent"
                dir="ltr"
              >
                <Phone className="size-4" strokeWidth={1.75} />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
