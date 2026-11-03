/**
 * Single source of truth for the business details supplied by the gym.
 * Nothing here should be invented — no prices, schedules, staff or social links.
 */
export const BUSINESS = {
  name: "Freedom Fitness Center",
  category: "Gym & Fitness Center",
  street: "Abu Bakr Al-Siddeeq St",
  city: "Amman",
  country: "Jordan",
  phoneDisplay: "+962 7 9755 6554",
  phoneHref: "tel:+962797556554",
  whatsappHref: "https://wa.me/962797556554",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Freedom+Fitness+Center+Abu+Bakr+Al-Siddeeq+St+Amman+Jordan",
  rating: 4.5,
  reviewCount: 204,
} as const;

export const SECTIONS = [
  "home",
  "about",
  "facilities",
  "training",
  "reviews",
  "contact",
] as const;

export type SectionId = (typeof SECTIONS)[number];
