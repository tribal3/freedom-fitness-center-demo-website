import { imageSet, imageUrl } from "../../lib/images";

type PhotoProps = {
  id: string;
  alt: string;
  className?: string;
  sizes?: string;
  widths?: number[];
  priority?: boolean;
};

const DEFAULT_WIDTHS = [480, 768, 1024, 1440, 1920];

/**
 * Responsive Unsplash photo with srcset + native lazy loading.
 */
export function Photo({
  id,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  widths = DEFAULT_WIDTHS,
  priority = false,
}: PhotoProps) {
  const fallbackWidth = widths[Math.min(2, widths.length - 1)] ?? 1024;

  return (
    <img
      src={imageUrl(id, fallbackWidth)}
      srcSet={imageSet(id, widths)}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
