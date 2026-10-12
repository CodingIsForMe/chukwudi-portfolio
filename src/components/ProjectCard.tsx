"use client";

import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { ProductProject } from "@/data/projects";

interface ProjectCardProps {
  project: ProductProject;
  index: number;
}

/** Product project card (tech stack + live / source links). */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLive = project.liveUrl && project.liveUrl !== "#";
  const hasRepo = project.githubUrl && project.githubUrl !== "#";

  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-border/15 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-2xl font-medium leading-tight tracking-tight">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border/20 px-2 py-1 font-mono text-[0.7rem] text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links — only render the ones that actually exist */}
      <div className="mt-6 flex items-center gap-5 border-t border-border/15 pt-5">
        {hasLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            <FiExternalLink size={14} />
            Live demo
          </a>
        )}
        {hasRepo && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
          >
            <FiGithub size={14} />
            Source
          </a>
        )}
        {!hasLive && !hasRepo && (
          <span className="font-mono text-xs text-muted">
            Private repository · walkthrough on request
          </span>
        )}
      </div>
    </article>
  );
}
