"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Two-digit section index, e.g. "01". Rendered in accent mono. */
  index?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Shared editorial section header: a mono kicker (index + eyebrow), a large
 * Fraunces title whose final word is set in italic for emphasis, an optional
 * subtitle, and a hairline rule. The title rises behind a clip mask on scroll.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  index,
  align = "left",
  className,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const words = title.split(" ");
  const lastWord = words.pop() ?? "";
  const lead = words.join(" ");

  return (
    <div
      ref={ref}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        {index && (
          <span className="font-mono text-xs font-medium text-accent">
            [{index}]
          </span>
        )}
        <span className="label">{eyebrow}</span>
        <span className="hidden h-px flex-1 bg-border/15 sm:block" />
      </motion.div>

      <h2 className="mt-5 overflow-hidden font-heading text-[2.1rem] font-semibold leading-[1.04] tracking-[-0.02em] sm:text-5xl lg:text-[3.4rem]">
        <motion.span
          className="block"
          initial={{ y: "110%" }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {lead}{" "}
          <span className="italic font-normal">{lastWord}</span>
        </motion.span>
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
