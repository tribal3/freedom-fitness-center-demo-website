# Freedom Fitness Center — Website Concept

A premium, fully bilingual (English / Arabic) marketing website concept for **Freedom Fitness Center**, a gym on Abu Bakr Al-Siddeeq St, Amman, Jordan.

Dark, high-contrast fitness aesthetic with an electric lime accent, bold display typography, illustrative gym photography, scroll reveals and a full RTL experience.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide React icons
- Google Fonts: Anton (display), Manrope (body), Cairo (Arabic)

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run preview  # serve the production build
npm run lint     # oxlint
```

## Structure

```
src/
  components/
    layout/      Navbar (sticky, mobile sheet, language switch), Footer
    sections/    Hero, Marquee, TrustBar, About, Facilities, Training, WhyUs,
                 Reviews, Contact (with map panel), FinalCta
    ui/          Brand, Button, Photo, Reveal, SectionHeading, Stars
  hooks/         useScrolled, useScrollSpy
  i18n/          en.ts, ar.ts, LanguageProvider
  lib/           business.ts (verified details), images.ts (photo CDN helpers)
```

## Content and data rules

Only the supplied business details are used. There are no invented prices, packages, class schedules, trainer names, emails, social accounts or customer testimonials.

- The rating and review count (4.5 / 204) are attributed to Google, and reviews are linked out to the gym's Google listing.
- The two-floor layout is mentioned as reported in public feedback, without inventing floor arrangements.
- Opening hours are not published; the contact section notes that Google Maps currently shows a 2 AM closing time and asks visitors to confirm.
- Photography is illustrative Unsplash imagery, labelled as such in the About section and the footer — never presented as the real gym.

## Internationalisation

`src/i18n/en.ts` is the source dictionary; `ar.ts` is typed against its shape, so any missing or misspelled Arabic key fails the build. The provider sets `<html lang>` / `dir`, updates the title and meta description per language, and remembers the choice in `localStorage`. Layout mirrors correctly through logical spacing utilities (`ps-*`, `me-*`, `start-*`) and `dir`-aware CSS.
