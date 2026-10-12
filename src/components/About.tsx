"use client";

import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: 6, suffix: "+", label: "Automations deployed" },
  { value: 9, suffix: "", label: "Months at 4SpotConsulting" },
  { value: 1, suffix: "+", label: "Year of AI experience" },
  { value: 50, suffix: "+", label: "Community members mentored" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Systems that connect data, people & AI"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          {/* Bio */}
          <ScrollReveal direction="left">
            <div className="space-y-6 text-lg leading-relaxed text-muted sm:text-xl">
              <p>
                I&rsquo;m a{" "}
                <span className="font-medium text-foreground">
                  Full Stack Engineer
                </span>{" "}
                and{" "}
                <span className="font-medium text-foreground">
                  AI Automation Specialist
                </span>{" "}
                who builds systems that connect data, people, and AI to
                streamline how teams work. My expertise spans full stack
                development, data analytics, and workflow automation using n8n,
                Make, Airtable, Apify, Power BI, Python, JavaScript, Google
                Workspace, Tavily, and Telegram Bots.
              </p>
              <p>
                I design and deploy automation that turns repetitive manual
                workflows (proposal creation, performance tracking, lead
                generation) into intelligent, scalable systems. For the past 9
                months I&rsquo;ve done exactly that as an AI Automation
                Specialist at <span className="accent-mark">4SpotConsulting</span>
                .
              </p>
              <p>
                Alongside the automation work I build products end to end. Since
                February 2026 I&rsquo;ve been a volunteer developer at{" "}
                <span className="accent-mark">Dalhousie University</span> in
                Halifax, where I built <span className="accent-mark">PosiFit</span>,
                a mobile recovery support app, and the backend it runs on.
              </p>
              <p>
                I&rsquo;m also co-founder of{" "}
                <span className="accent-mark">Everything Data</span>, a community
                of 50+ members across LinkedIn and Slack. As Power BI Lead, I
                mentor professionals in data analytics and visualization.
              </p>
            </div>

            {/* Pull-quote */}
            <blockquote className="mt-12 border-t border-border/15 pt-8">
              <p className="font-heading text-2xl font-normal italic leading-snug text-foreground sm:text-3xl">
                “If a process is repetitive, it can be automated, and if it can
                be automated, it should be.”
              </p>
            </blockquote>
          </ScrollReveal>

          {/* Stat ledger */}
          <ScrollReveal direction="right">
            <dl className="border-t border-border/15">
              {stats.map((stat, i) => (
                <ScrollReveal
                  key={stat.label}
                  delay={i * 0.1}
                  className="flex items-baseline justify-between gap-4 border-b border-border/15 py-5"
                >
                  <dt className="font-heading text-5xl font-medium leading-none tracking-tight sm:text-6xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </dt>
                  <dd className="max-w-[9rem] text-right font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-muted">
                    {stat.label}
                  </dd>
                </ScrollReveal>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
