"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  direction?: Direction;
  className?: string;
  /** Travel distance in px for the entrance. */
  distance?: number;
  once?: boolean;
}

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Reusable scroll-triggered fade/slide wrapper. Animates its children in
 * once they enter the viewport (uses react-intersection-observer).
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  distance = 28,
  once = true,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.2 });

  const o = offset[direction];
  const variants: Variants = {
    hidden: { opacity: 0, x: o.x * distance, y: o.y * distance },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
