"use client";

import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import SocialLinks from "./SocialLinks";
import { EMAIL } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/15 py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="container-px"
      >
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href={`mailto:${EMAIL}`}
              className="font-heading text-4xl font-medium tracking-tight transition-colors hover:text-accent sm:text-5xl"
            >
              Let&rsquo;s talk
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 font-mono text-sm text-muted">{EMAIL}</p>
          </div>
          <SocialLinks />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/15 pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <p>© 2026 Chukwudi, AI Engineer &amp; Automation Architect</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
          <a
            href="#hero"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            Back to top
            <FiArrowUp
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
