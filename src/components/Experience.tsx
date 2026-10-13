"use client";

import { FiMapPin, FiClock } from "react-icons/fi";
import { experiences } from "@/data/experience";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where I've shipped real systems"
        />

        <div className="mt-14 border-t border-border/15">
          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.company}
              delay={i * 0.1}
              direction="up"
              className="grid gap-6 border-b border-border/15 py-10 lg:grid-cols-[16rem_1fr] lg:gap-12"
            >
              {/* Left meta column */}
              <div className="space-y-3">
                <div className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {exp.current && (
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    Current
                  </span>
                )}
                <div className="space-y-1.5 text-sm text-muted">
                  <p className="flex items-center gap-2">
                    <FiClock size={13} />
                    {exp.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiMapPin size={13} />
                    {exp.location}
                  </p>
                </div>
              </div>

              {/* Right content column */}
              <div>
                <h3 className="font-heading text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                  {exp.role}
                </h3>
                <p className="mt-1 font-heading text-xl font-normal italic text-accent">
                  {exp.company}
                </p>

                {exp.description && (
                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                    {exp.description}
                  </p>
                )}

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-base leading-relaxed text-foreground/80"
                      >
                        <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
