"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  automationProjects,
  productProjects,
  type AutomationProject,
} from "@/data/projects";
import AutomationCard from "./AutomationCard";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";
import { cn } from "@/utils/cn";

type Tab = "automation" | "product";

const TABS: { id: Tab; label: string; count: number }[] = [
  { id: "automation", label: "Automations", count: automationProjects.length },
  { id: "product", label: "Products", count: productProjects.length },
];

const gridContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  const [tab, setTab] = useState<Tab>("automation");
  const [selected, setSelected] = useState<AutomationProject | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          title="The work that proves it"
          subtitle="Production automations and products, built end-to-end, deployed, and running. This is the core of what I do."
        />

        {/* Editorial tabs with a sliding accent underline */}
        <div className="mt-12 flex items-center gap-8 border-b border-border/15">
          {TABS.map((t) => {
            const isActive = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "relative -mb-px flex items-baseline gap-2 pb-4 text-lg font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                )}
              >
                {t.label}
                <span className="font-mono text-xs text-muted">
                  ({t.count})
                </span>
                {isActive && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute -bottom-px left-0 h-0.5 w-full bg-accent"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Grids */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={gridContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tab === "automation"
              ? automationProjects.map((project, i) => (
                  <motion.div key={project.title} variants={gridItem}>
                    <AutomationCard
                      project={project}
                      index={i}
                      onOpen={setSelected}
                    />
                  </motion.div>
                ))
              : productProjects.map((project, i) => (
                  <motion.div key={project.title} variants={gridItem}>
                    <ProjectCard project={project} index={i} />
                  </motion.div>
                ))}
          </motion.div>
        </AnimatePresence>

      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
