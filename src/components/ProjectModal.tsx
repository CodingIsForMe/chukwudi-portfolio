"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiPlay, FiFileText, FiArrowUpRight } from "react-icons/fi";
import type { AutomationProject } from "@/data/projects";
import ToolIcon, { toolBrand } from "./ToolIcon";

interface ProjectModalProps {
  project: AutomationProject | null;
  onClose: () => void;
}

/** Convert a Loom share URL into its embeddable player URL. */
function loomEmbed(url?: string): string | null {
  if (!url) return null;
  const m = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  return m ? `https://www.loom.com/embed/${m[1]}` : null;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const embed = loomEmbed(project?.loomUrl);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg border border-border/20 bg-card shadow-lift"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border/15 p-6 sm:p-8">
              <div>
                <p className="label">Case file</p>
                <h3 className="mt-2 font-heading text-3xl font-medium leading-tight tracking-tight">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border/20 text-muted transition-all duration-300 hover:rotate-90 hover:border-accent hover:text-accent"
              >
                <FiX size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded border border-border/20 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    <span style={{ color: toolBrand(tool) }} className="flex">
                      <ToolIcon tool={tool} size={13} />
                    </span>
                    {tool}
                  </span>
                ))}
              </div>

              {/* Loom embed */}
              {embed && (
                <div className="mt-6 overflow-hidden rounded-md border border-border/20 bg-black">
                  <div className="relative aspect-video w-full">
                    <iframe
                      src={embed}
                      title={`${project.title} demo`}
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      allow="fullscreen; picture-in-picture"
                    />
                  </div>
                </div>
              )}

              <p className="mt-6 text-base leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-6 border-l border-accent pl-4">
                <p className="label text-accent">Problem solved</p>
                <p className="mt-1.5 text-base leading-relaxed text-foreground/90">
                  {project.task}
                </p>
              </div>

              {/* Actions */}
              {(project.loomUrl ||
                project.secondaryLoomUrl ||
                project.onePagerUrl) && (
                <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-border/15 pt-6">
                  {project.loomUrl && (
                    <a
                      href={project.loomUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
                    >
                      <FiPlay size={14} className="fill-current" />
                      Open in Loom
                    </a>
                  )}
                  {project.secondaryLoomUrl && (
                    <a
                      href={project.secondaryLoomUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                    >
                      <FiPlay size={14} />
                      Watch result
                    </a>
                  )}
                  {project.onePagerUrl && (
                    <a
                      href={project.onePagerUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-foreground"
                    >
                      <FiFileText size={14} />
                      Case study
                      <FiArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
