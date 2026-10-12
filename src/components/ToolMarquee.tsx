"use client";

import { marqueeTools } from "@/data/skills";
import ToolIcon, { toolBrand } from "./ToolIcon";

function Item({ tool }: { tool: string }) {
  return (
    <span className="flex items-center gap-2.5 whitespace-nowrap font-mono text-sm text-muted">
      <span style={{ color: toolBrand(tool) }} className="flex">
        <ToolIcon tool={tool} size={15} />
      </span>
      {tool}
      <span className="text-accent">/</span>
    </span>
  );
}

/**
 * Two editorial ticker rows scrolling in opposite directions. Each track is
 * rendered twice and translated -50% for a seamless loop. Edges fade into the
 * paper; both rows pause on hover.
 */
export default function ToolMarquee() {
  const rowA = [...marqueeTools, ...marqueeTools];
  const rowB = [...[...marqueeTools].reverse(), ...[...marqueeTools].reverse()];

  return (
    <div className="group relative flex flex-col gap-5 overflow-hidden border-y border-border/15 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent sm:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent sm:w-40" />

      <div className="flex w-max gap-8 animate-marquee group-hover:[animation-play-state:paused]">
        {rowA.map((tool, i) => (
          <Item key={`a-${tool}-${i}`} tool={tool} />
        ))}
      </div>

      <div className="flex w-max gap-8 animate-marquee-reverse group-hover:[animation-play-state:paused]">
        {rowB.map((tool, i) => (
          <Item key={`b-${tool}-${i}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}
