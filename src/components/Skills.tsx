"use client";

import { skillCategories } from "@/data/skills";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import ToolMarquee from "./ToolMarquee";
import ToolIcon, { toolBrand } from "./ToolIcon";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          index="04"
          eyebrow="Capabilities"
          title="The stack I build with"
          subtitle="A practical toolkit spanning AI automation, development, design, and the platforms that tie it all together."
        />

        <div className="mt-14 grid gap-x-12 gap-y-12 border-t border-border/15 pt-12 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-medium tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="group inline-flex items-center gap-2 rounded border border-border/20 px-3 py-1.5 text-sm font-medium text-foreground/85 transition-colors duration-200 hover:border-accent hover:text-foreground"
                    >
                      <span
                        style={{ color: toolBrand(skill) }}
                        className="flex shrink-0"
                      >
                        <ToolIcon tool={skill} size={14} />
                      </span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div className="container-px mt-16">
        <p className="label mb-5 text-center">Tools in my belt</p>
      </div>
      <ToolMarquee />
    </section>
  );
}
