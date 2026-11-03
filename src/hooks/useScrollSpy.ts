import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view so the navbar can highlight it.
 */
export function useScrollSpy(ids: readonly string[], offset = 120) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const update = () => {
      const probe = window.scrollY + offset + 1;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= probe) {
          current = id;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 8;
      if (atBottom) {
        current = ids[ids.length - 1] ?? current;
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids, offset]);

  return active;
}
