/**
 * Illustrative fitness photography (Unsplash CDN).
 * These are stock images used as visual content — not photographs of the gym.
 */
const BASE = "https://images.unsplash.com";
const PARAMS = "auto=format&fit=crop&q=80";

export const imageUrl = (id: string, width: number) =>
  `${BASE}/${id}?${PARAMS}&w=${width}`;

export const imageSet = (id: string, widths: number[]) =>
  widths.map((width) => `${imageUrl(id, width)} ${width}w`).join(", ");

export const PHOTOS = {
  hero: "photo-1605296867304-46d5465a13f1",
  aboutMain: "photo-1581009146145-b5ef050c2e1e",
  aboutDetail: "photo-1571902943202-507ec2618e8f",
  aboutThird: "photo-1571019613454-1cb2f99b2d8b",
  reviewsBg: "photo-1534258936925-c58bed479fcb",
  finalCta: "photo-1534438327276-14e5300c3a48",
} as const;
