import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Facilities } from "./components/sections/Facilities";
import { FinalCta } from "./components/sections/FinalCta";
import { Hero } from "./components/sections/Hero";
import { Marquee } from "./components/sections/Marquee";
import { Reviews } from "./components/sections/Reviews";
import { Training } from "./components/sections/Training";
import { TrustBar } from "./components/sections/TrustBar";
import { WhyUs } from "./components/sections/WhyUs";
import { LanguageProvider, useLanguage } from "./i18n/LanguageProvider";

function Site() {
  const { t } = useLanguage();

  return (
    <div className="min-h-dvh bg-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-100 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-ink"
      >
        <span className="label">{t.ui.skipToContent}</span>
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <TrustBar />
        <About />
        <Facilities />
        <Training />
        <WhyUs />
        <Reviews />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
