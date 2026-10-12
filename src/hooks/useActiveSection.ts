"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view based on scroll position and
 * returns its id. Used by the navbar to highlight the active link.
 *
 * @param sectionIds ordered list of section element ids to observe
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? ""
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }

        if (visible.size > 0) {
          // Pick the most-visible section.
          let best = "";
          let bestRatio = -1;
          for (const [id, ratio] of visible) {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = id;
            }
          }
          if (best) setActiveSection(best);
        }
      },
      {
        // Bias the active band toward the upper-middle of the viewport.
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(",")]);

  return activeSection;
}
