// Skill categories. `iconKey` maps to a Feather icon in Skills.tsx so this
// data file stays free of JSX. `accent` chooses the category's highlight color.

export type SkillIconKey = "automation" | "development" | "design" | "platforms";

export interface SkillCategory {
  title: string;
  iconKey: SkillIconKey;
  accent: "accent" | "violet";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & Automation",
    iconKey: "automation",
    accent: "accent",
    skills: [
      "n8n",
      "Make (Integromat)",
      "Apify",
      "OpenAI",
      "Claude",
      "Airtable",
      "Tavily",
    ],
  },
  {
    title: "Development",
    iconKey: "development",
    accent: "violet",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Design & No-Code",
    iconKey: "design",
    accent: "accent",
    skills: ["Webflow", "Softr Studio", "Notion"],
  },
  {
    title: "Platforms & Tools",
    iconKey: "platforms",
    accent: "violet",
    skills: [
      "Google Sheets",
      "Google Mail",
      "Google Docs",
      "Telegram Bots",
      "Power BI",
    ],
  },
];

// Names that scroll in the infinite marquee at the bottom of the Skills section.
export const marqueeTools: string[] = [
  "n8n",
  "Make",
  "Apify",
  "OpenAI",
  "Claude",
  "Airtable",
  "Tavily",
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "React",
  "React Native",
  "Node.js",
  "Express",
  "MongoDB",
  "Webflow",
  "Softr Studio",
  "Notion",
  "Google Sheets",
  "Google Docs",
  "Telegram Bots",
  "Power BI",
  "Gmail",
  "PDF.co",
];
