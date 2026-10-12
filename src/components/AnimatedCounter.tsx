"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  /** Rendered after the number (e.g. "+", " mo"). */
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
}

/**
 * Counts up from 0 to `value` once it scrolls into view. Uses
 * requestAnimationFrame with an ease-out curve for a smooth tick-up.
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  durationMs = 1600,
  className,
}: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
