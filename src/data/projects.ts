// =============================================================================
// PROJECT DATA — single source of truth
// -----------------------------------------------------------------------------
// Add / edit projects here without touching any component.
//
// Automations: every field except `title`, `category`, `description`, `task`,
// and `tools` is OPTIONAL. Cards gracefully omit any button whose URL is
// missing (loomUrl, secondaryLoomUrl, onePagerUrl).
//
// Products: real shipped builds — liveUrl / githubUrl included where public.
// =============================================================================

export interface AutomationProject {
  title: string;
  category: "automation";
  description: string;
  task: string;
  tools: string[];
  /** Primary Loom walkthrough — renders the "Watch Demo" button when present. */
  loomUrl?: string;
  /** Optional second Loom (e.g. the result) — renders "Watch Result". */
  secondaryLoomUrl?: string;
  /** Optional Google Doc / case study — renders "View Case Study". */
  onePagerUrl?: string;
  featured?: boolean;
}

export interface ProductProject {
  title: string;
  category: "product";
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export type Project = AutomationProject | ProductProject;

// -----------------------------------------------------------------------------
// AUTOMATION PROJECTS (primary tab — real work)
// -----------------------------------------------------------------------------
export const automationProjects: AutomationProject[] = [
  {
    title: "AI Voice Agent for Job Intake and Scheduling",
    category: "automation" as const,
    description:
      "Built a voice agent in Retell AI that answers calls, classifies the caller's job type, and collects the service address. The agent calls a Make.com scenario through a webhook, and the scenario reads a shared Google Calendar and returns real available time slots, which the agent then offers to the caller.",
    task: "Answer inbound job calls, capture the job details, and offer real open time slots",
    tools: ["Retell AI", "Make", "Google Calendar API", "Webhooks", "JSON"],
    loomUrl: "https://www.loom.com/share/3db114de790548a2b6f51c3ab2ca7be3",
    featured: true,
  },
  {
    title: "MCP Servers for AI Agents in Make",
    category: "automation" as const,
    description:
      "Deployed and connected MCP servers, including Teamwork, Unipile, and Cloudflare, for use inside Make. When an AI agent is built in Make, it can call these servers to take real actions in those tools, reading and updating records, sending messages, and handling infrastructure tasks, instead of only returning text back to the user.",
    task: "Give AI agents real access to the tools a business already runs on",
    tools: ["Make", "MCP", "Teamwork", "Unipile", "Cloudflare"],
    featured: true,
  },
  {
    title: "Daily Stand-Up Automation",
    category: "automation" as const,
    description:
      "Built an intelligent stand-up automation system that manages daily team updates, tracks sprint progress, and syncs employee availability automatically. The system connects Telegram, Airtable, Google Sheets, and n8n to collect stand-up responses, update task statuses, and notify managers, all without manual coordination.",
    task: "Eliminate manual daily stand-up coordination across distributed teams",
    tools: ["Airtable", "Google Sheets", "n8n", "Telegram"],
    loomUrl: "https://www.loom.com/share/61c7f5c98b8741049ca6452902eeae90",
    onePagerUrl:
      "https://docs.google.com/document/d/1Mh8-wBlnJAQRZqNICg7FlsynCoZugHLT9wzd7ak5STY/edit?usp=sharing",
    featured: true,
  },
  {
    title: "Proposal Generation & Delivery Automation",
    category: "automation" as const,
    description:
      "Built an AI-powered proposal generation and delivery system that automates the creation, approval, and sending of sales proposals after discovery calls. The automation connects n8n, Airtable, Google Sheets, Google Docs, and OpenAI to generate client-ready proposals in minutes while ensuring internal review and approval before delivery.",
    task: "Automate sales proposal creation from discovery call to client delivery",
    tools: ["Airtable", "n8n", "Google Sheets", "Google Docs", "OpenAI"],
    loomUrl:
      "https://www.loom.com/share/d02d567a048d4770b9cd92d8a355fde0?sid=e0987c68-320d-4e76-8737-c08770d7b63c",
    onePagerUrl:
      "https://docs.google.com/document/d/1V_1Ol9JdSMRhYOjh6qdL6o0RE9bRFeSb_WRffffnD3o/edit?usp=sharing",
    featured: true,
  },
  {
    title: "Lead Generation & Outreach Automation",
    category: "automation" as const,
    description:
      "Built an AI-powered lead generation and outreach automation system that identifies, enriches, and personalizes engagement with potential clients. The system integrates n8n, Airtable, Apify, and OpenAI to automate the discovery of high-quality leads, validate their contact information, and generate tailored outreach sequences for email and LinkedIn, eliminating hours of manual prospecting work.",
    task: "Automate lead discovery, enrichment, and personalized outreach at scale",
    tools: ["Airtable", "Apify", "n8n", "OpenAI"],
    loomUrl:
      "https://www.loom.com/share/fe432c38d76e48ecb0dec995bc7b8d92?sid=839d2771-14c0-462f-8db9-defe11bd6f17",
    onePagerUrl:
      "https://docs.google.com/document/d/1twB9yvWNCXhiRx66EI5CCDqcMsUjA-AQtMdiPLTfdW8/edit?usp=sharing",
    featured: true,
  },
  {
    title: "Reporting & Dashboard Automation",
    category: "automation" as const,
    description:
      "Built an AI-powered reporting and dashboard automation that consolidates data from multiple departmental sources and updates a unified Airtable dashboard with performance metrics. The workflow connects Airtable, Google Sheets, Make.com, and custom logic modules to automate yearly performance reporting across Sales, Project Delivery, and People Operations.",
    task: "Consolidate multi-department data into a unified performance dashboard automatically",
    tools: ["Airtable", "Make", "Google Sheets"],
    loomUrl:
      "https://www.loom.com/share/cd7c79b788ac4276a7eb4f74119933fa?sid=674e3b66-a29f-4291-930b-2456290d31e0",
    featured: true,
  },
  {
    title: "Content Generation & Publishing Automation",
    category: "automation" as const,
    description:
      "Built an AI-powered content generation and publishing system that automates the creation, optimization, and distribution of articles across multiple platforms. The automation integrates n8n, OpenAI, and Telegram to generate SEO-optimized content, adapt it for platform-specific formats, and publish or save posts for future scheduling with minimal human effort.",
    task: "Automate end-to-end content creation from ideation to multi-platform publishing",
    tools: ["Google Sheets", "n8n", "OpenAI", "Telegram"],
    loomUrl:
      "https://www.loom.com/share/0d98f6cb383645ea8c8523c4b96324ef?sid=446cf54e-5f8b-462f-8679-d6c743c7600f",
    secondaryLoomUrl:
      "https://www.loom.com/share/b74d7da946ba42ac9fa1130d5f69f912?sid=1d8527d7-2a11-4c8b-80c0-357ed2c52f6e",
    onePagerUrl:
      "https://docs.google.com/document/d/1tym1-KCeID-a_VOn__ifs_Vqf-ZDURONpUrw79YXqxM/edit?usp=sharing",
    featured: true,
  },
  {
    title: "Invoice Inbox Automation",
    category: "automation" as const,
    description:
      "Built an AI-powered invoice processing system that automates the extraction and logging of invoice details from emails into Google Sheets. The automation connects Gmail, Make.com, OpenAI, PDF.co, and Google Sheets to handle both email-based and PDF-based invoices seamlessly.",
    task: "Automate invoice extraction from email inboxes and log into structured spreadsheets",
    tools: ["Make", "Gmail", "OpenAI", "PDF.co", "Google Sheets"],
    loomUrl:
      "https://www.loom.com/share/c60ecb4767994c63948528dfb53c5f7c?sid=47ce8c8a-8462-4b37-8787-e30f244f1a89",
    featured: true,
  },
];

// -----------------------------------------------------------------------------
// PRODUCT PROJECTS (real, shipped builds)
// -----------------------------------------------------------------------------
export const productProjects: ProductProject[] = [
  {
    title: "PosiFit",
    category: "product",
    description:
      "A mobile app for people in eating disorder recovery to privately log meals, moods, and reflections. Everything saves on the phone first and works with no connection, and a backend I built syncs it to the cloud so a lost or replaced phone does not mean a lost journal. Sign-in is anonymous by design, so no names, emails, or passwords are collected. Built as a volunteer developer at Dalhousie University.",
    techStack: ["React Native", "Expo", "NativeWind", "Node.js", "Express", "MongoDB", "JWT"],
    featured: true,
  },
  {
    title: "OmniBrief",
    category: "product",
    description:
      "My final-year capstone: a multimodal summarization and question-answering platform built with Django. Users feed it text, documents, or audio (transcribed with Google Cloud Speech-to-Text), get back a concise NLP summary, then ask follow-up questions about the content and download the result as text or audio. Summary quality was measured with ROUGE scoring alongside a user study.",
    techStack: ["Python", "Django", "NLP", "TextRank", "Google Speech-to-Text", "HTML/CSS"],
    githubUrl: "https://github.com/CodingIsForMe/Summarization-Platform-Project",
    featured: true,
  },
  {
    title: "CipherSheet",
    category: "product",
    description:
      "A local-first, zero-trust web app for finance teams that need to hand sensitive spreadsheets to external consultants. It tokenizes confidential data entirely in the browser, rebalancing SUM formulas so the sanitized file still computes, then restores the originals when the file comes back. No backend, no network calls: Web Workers, AES-GCM via the Web Crypto API, and IndexedDB do everything client-side.",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Web Workers", "Web Crypto", "IndexedDB"],
    liveUrl: "https://ciphersheet.vercel.app",
    featured: true,
  },
  {
    title: "VIBEXI",
    category: "product",
    description:
      "“Your Taste. Your Team.” Pick five songs and get a football XI generated from your music taste, then share it or battle a friend in an async simulated match that can end in an interactive penalty shootout. Entertainment-first by design: pack-opening reveal drama, synthesized sound effects through the Web Audio API, and shareable PNG match reports.",
    techStack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    liveUrl: "https://vibexi.vercel.app",
    featured: true,
  },
  {
    title: "BLUFF: Multiplayer Card Game",
    category: "product",
    description:
      "A real-time multiplayer bluff card game built with a small team, featuring power cards, secret roles at 9+ players, risk modifiers, betting windows, and a ghost-council mechanic for eliminated players. Socket.IO drives live game state, Supabase handles passwordless auth and profiles, LiveKit powers opt-in voice chat, and both client and server ship with CI test suites.",
    techStack: ["Next.js", "Node.js", "Express", "Socket.IO", "Supabase", "LiveKit"],
    githubUrl: "https://github.com/Honour-Boy/bluff-game",
    featured: true,
  },
  {
    title: "Imperialcare DryCleaners",
    category: "product",
    description:
      "Production website for a premium laundry and dry-cleaning business in Surulere, Lagos, featuring pricing, gallery, testimonials, a pickup-booking flow with an admin portal behind auth, and a floating WhatsApp widget for instant customer contact. Designed, built, and shipped end-to-end for a real client.",
    techStack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://imperialcare-web.vercel.app",
    featured: true,
  },
];

// -----------------------------------------------------------------------------
// TOOL BADGE COLORS — brand colors per automation tool
// -----------------------------------------------------------------------------
export interface ToolColor {
  bg: string;
  text: string;
}

export const toolColors: Record<string, ToolColor> = {
  n8n: { bg: "#EA4B71", text: "#FFFFFF" },
  Make: { bg: "#6D00CC", text: "#FFFFFF" },
  Airtable: { bg: "#2D7FF9", text: "#FFFFFF" },
  "Google Sheets": { bg: "#0F9D58", text: "#FFFFFF" },
  "Google Docs": { bg: "#4285F4", text: "#FFFFFF" },
  OpenAI: { bg: "#000000", text: "#FFFFFF" },
  Telegram: { bg: "#0088CC", text: "#FFFFFF" },
  Apify: { bg: "#00C7B7", text: "#04201E" },
  Gmail: { bg: "#EA4335", text: "#FFFFFF" },
  "PDF.co": { bg: "#FF6B35", text: "#FFFFFF" },
};

/** Fallback for any tool not explicitly listed above. */
export const defaultToolColor: ToolColor = { bg: "#334155", text: "#E2E8F0" };

export function getToolColor(tool: string): ToolColor {
  return toolColors[tool] ?? defaultToolColor;
}
