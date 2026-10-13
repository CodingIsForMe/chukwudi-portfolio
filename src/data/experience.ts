export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description?: string;
  highlights?: string[];
  /** Marks an ongoing role (renders the live pulse dot on the timeline). */
  current?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    company: "4Spot Consulting",
    role: "AI Automation Specialist",
    duration: "Nov 2025 - Aug 2026",
    location: "Remote",
    highlights: [
      "Designed and shipped end-to-end client automations in Make and n8n, connecting forms, content systems, file storage, messaging and AI models so data moves between tools with no manual handoff.",
      "Built a production content-to-video pipeline across three Make scenarios: each new WordPress article goes to the Claude API for a script, HeyGen renders the video, and webhooks route the finished file to Dropbox for distribution to YouTube Shorts and LinkedIn.",
      "Deployed MCP servers (Teamwork, Unipile, Cloudflare) inside Make so AI agents can take real actions in those tools.",
      "Led a secure migration of production scenarios across environments, re-mapping credentials and securing webhook endpoints so no client data was exposed.",
    ],
  },
  {
    company: "Dalhousie University, Faculty of Computer Science",
    role: "Volunteer Software Developer",
    duration: "Feb 2026 - Aug 2026",
    location: "Halifax, Nova Scotia, Canada",
    description:
      "Sole developer of PosiFit, a health app for the Persuasive Computing Lab that helps people in eating disorder recovery keep a private journal of meals, moods, and reflections. I built both the app and the backend it syncs to.",
    highlights: [
      "Built the app in React Native and Expo so it works fully offline, then added cloud sync so someone can restore their journal on a new phone without losing entries.",
      "Designed and deployed the backend myself: a Node.js and Express API on MongoDB Atlas, with anonymous sign-in so no names, emails, or passwords are ever collected.",
      "Moved the reflection screen away from mood scores and charts, and added crisis support lines for Canada and the US after checking each one was still active.",
    ],
  },
  {
    company: "Sourcing Sprint",
    role: "AI Automation Intern",
    duration: "Sep 2025 - Oct 2025",
    location: "Remote",
    highlights: [
      "Built production automations in n8n and Make for proposal generation, lead generation and outreach, invoice processing, content publishing and daily stand-ups.",
      "Integrated OpenAI, Apify, Telegram bots and Google Workspace through REST APIs and webhooks.",
    ],
  },
  {
    company: "Descasio",
    role: "Software Engineering Intern",
    duration: "Oct 2024 - Dec 2025",
    location: "Lagos, Nigeria",
    highlights: [
      "Built front-end features and client workflows to each client’s stated requirements, checked against structured test plans.",
    ],
  },
  {
    company: "PwC Nigeria",
    role: "Data Analyst Intern",
    duration: "Mar 2023 - Aug 2023",
    location: "Lagos, Nigeria",
    description:
      "Built interactive dashboards and reports in Power BI and Excel, and used SQL and Python to clean, analyze, and script against data while building a foundation in data science.",
    highlights: [
      "Designed Power BI and Excel dashboards that turned raw data into clear, decision-ready reporting.",
      "Supervised and helped run internal analytics training sessions in Power BI and Excel.",
      "Wrote SQL and Python scripts for data cleaning and analysis, and trained introductory regression models while learning data science.",
    ],
  },
  {
    company: "Everything Data",
    role: "Co-Founder & Power BI Lead",
    duration: "Ongoing",
    location: "Community",
    description:
      "Built and lead a data community of 50+ professionals across LinkedIn and Slack. Mentor members in data analytics, Power BI, and visualization.",
    highlights: [
      "Grew an engaged community of 50+ data professionals and enthusiasts.",
      "Run mentorship and hands-on sessions on Power BI, analytics, and data storytelling.",
    ],
    current: true,
  },
];
