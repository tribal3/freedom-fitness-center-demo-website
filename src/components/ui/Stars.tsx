import { Star } from "lucide-react";

type StarsProps = {
  rating: number;
  className?: string;
  /** Tailwind size class for each star. */
  starClassName?: string;
};

/**
 * Five-star display with fractional fill (4.5 renders four full + one half).
 * Purely decorative — the accessible rating lives in surrounding text.
 */
export function Stars({ rating, className = "", starClassName = "size-5" }: StarsProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-hidden="true" dir="ltr">
      {[0, 1, 2, 3, 4].map((index) => {
        const fill = Math.max(0, Math.min(1, rating - index));
        return (
          <span key={index} className="relative inline-block">
            <Star className={`${starClassName} text-white/20`} strokeWidth={1.5} />
            <span
              className="absolute inset-y-0 start-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className={`${starClassName} fill-star text-star`} strokeWidth={1.5} />
            </span>
          </span>
        );
      })}
    </div>
  );
}
