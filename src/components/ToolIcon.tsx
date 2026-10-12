"use client";

import type { IconType } from "react-icons";
import { FiTool } from "react-icons/fi";
import {
  SiN8N,
  SiZapier,
  SiMake,
  SiAirtable,
  SiOpenai,
  SiClaude,
  SiGooglesheets,
  SiGoogledocs,
  SiGmail,
  SiTelegram,
  SiPython,
  SiJavascript,
  SiFigma,
  SiWebflow,
  SiNotion,
  SiCloudflare,
} from "react-icons/si";

// Brand logos that exist in react-icons/si. Tools without a logo (Apify,
// Tavily, Power BI, PDF.co, Softr, SQL…) fall back to a neutral wrench icon.
const ICON_MAP: Record<string, IconType> = {
  n8n: SiN8N,
  zapier: SiZapier,
  make: SiMake,
  "make (integromat)": SiMake,
  airtable: SiAirtable,
  openai: SiOpenai,
  claude: SiClaude,
  "google sheets": SiGooglesheets,
  "google docs": SiGoogledocs,
  gmail: SiGmail,
  "google mail": SiGmail,
  telegram: SiTelegram,
  "telegram bots": SiTelegram,
  python: SiPython,
  javascript: SiJavascript,
  figma: SiFigma,
  webflow: SiWebflow,
  notion: SiNotion,
  cloudflare: SiCloudflare,
};

// Brand accent colors (used when an icon stands alone, e.g. the marquee/chips).
const BRAND_COLOR: Record<string, string> = {
  n8n: "#EA4B71",
  zapier: "#FF4F00",
  make: "#8B5CF6",
  "make (integromat)": "#8B5CF6",
  airtable: "#2D7FF9",
  openai: "#10A37F",
  claude: "#D97757",
  "google sheets": "#0F9D58",
  "google docs": "#4285F4",
  gmail: "#EA4335",
  "google mail": "#EA4335",
  telegram: "#26A5E4",
  "telegram bots": "#26A5E4",
  python: "#6BB6FF",
  javascript: "#F7DF1E",
  figma: "#F24E1E",
  webflow: "#146EF5",
  notion: "#E6E9F2",
  apify: "#00C7B7",
  tavily: "#22D3EE",
  "power bi": "#F2C811",
  "pdf.co": "#FF6B35",
  "softr studio": "#EC5D2A",
  sql: "#38BDF8",
  "frontend web development": "#22D3EE",
  cloudflare: "#F38020",
};

function normalize(tool: string): string {
  return tool.toLowerCase().trim();
}

/** Brand accent color for a tool (cool slate fallback when unknown). */
export function toolBrand(tool: string): string {
  return BRAND_COLOR[normalize(tool)] ?? "#94A0C4";
}

interface ToolIconProps {
  tool: string;
  size?: number;
  className?: string;
}

/** Renders the tool's brand logo (or a neutral wrench fallback). */
export default function ToolIcon({ tool, size = 14, className }: ToolIconProps) {
  const Icon = ICON_MAP[normalize(tool)] ?? FiTool;
  return <Icon size={size} className={className} aria-hidden />;
}
