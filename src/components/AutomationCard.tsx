"use client";

import { FiPlay, FiArrowUpRight, FiFileText } from "react-icons/fi";
import type { AutomationProject } from "@/data/projects";
import ToolIcon, { toolBrand } from "./ToolIcon";

interface AutomationCardProps {
  project: AutomationProject;
  index: number;
  onOpen: (project: AutomationProject) => void;
}

function ToolChip({ tool }: { tool: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-border/20 px-2 py-1 font-mono text-[0.7rem] text-muted">
      <span style={{ color: toolBrand(tool) }} className="flex">
        <ToolIcon tool={tool} size={12} />
      </span>
      {tool}
    </span>
  );
}

export default function AutomationCard({
  project,
  index,
  onOpen,
}: AutomationCardProps) {
  return (
    <article
      onClick={() => onOpen(project)}
      className="group relative flex h-full cursor-pointer flex-col rounded-lg border border-border/15 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
    >
      {/* Top row: index + featured */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.featured && (
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-4 font-heading text-2xl font-medium leading-tight tracking-tight">
        {project.title}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {/* Problem solved */}
      <div className="mt-5 border-l border-accent pl-3.5">
        <p className="label text-accent">Problem solved</p>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">
          {project.task}
        </p>
      </div>

      {/* Tools */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tools.map((tool) => (
          <ToolChip key={tool} tool={tool} />
        ))}
      </div>

      {/* Footer actions */}
      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <div className="flex items-center gap-4">
          {project.loomUrl && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpen(project);
              }}
              className="group/play inline-flex items-center gap-2 text-sm font-medium"
              aria-label="Watch demo"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-foreground transition-colors group-hover/play:border-accent group-hover/play:bg-accent group-hover/play:text-accent-ink">
                <FiPlay size={12} className="ml-0.5 fill-current" />
              </span>
              Watch demo
            </button>
          )}
          {project.onePagerUrl && (
            <a
              href={project.onePagerUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
            >
              <FiFileText size={14} />
              Case study
            </a>
          )}
        </div>

        <FiArrowUpRight
          size={20}
          className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>
    </article>
  );
}
