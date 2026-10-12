"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";
import { socialLinks, type SocialLink } from "@/data/socials";
import { cn } from "@/utils/cn";

const ICONS: Record<SocialLink["key"], IconType> = {
  linkedin: FiLinkedin,
  github: FiGithub,
  email: FiMail,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

/**
 * Row of editorial social buttons (LinkedIn, GitHub, Email). Hairline squares
 * that flip to the accent fill on hover. Reads links from src/data/socials.ts.
 */
export default function SocialLinks({
  className,
  iconSize = 17,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {socialLinks.map((s) => {
        const Icon = ICONS[s.key];
        const external = s.href.startsWith("http");
        return (
          <a
            key={s.key}
            href={s.href}
            aria-label={s.label}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="grid h-11 w-11 place-items-center rounded-md border border-border/20 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-ink"
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
