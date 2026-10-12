# PORTFOLIO BUILD — FULL PROMPT FOR CLAUDE CODE

Copy everything below this line and paste it into Claude Code:

---

Build me a modern, animated, professional portfolio website from scratch in this project folder. Use **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for animations. The site should be a single-page scrolling portfolio with smooth section navigation, inspired by the structure and polish of https://oluwatoniloba-daada-portfolio.vercel.app/ — but with richer animations, a more distinctive visual identity, and a layout tailored to an AI engineer & automation architect.

---

## WHO I AM

My name is **Chukwudi**. Package me as an **AI Engineer & Automation Architect**.

I'm a Full Stack Engineer and AI Automation Specialist who builds systems that connect data, people, and AI to streamline how teams work. My expertise spans front-end development, data analytics, and workflow automation using tools like n8n, Make, Airtable, Apify, Power BI, Python, JavaScript, Google Workspace, Tavily, and Telegram Bots.

I design and deploy automation solutions that transform repetitive manual workflows — like proposal creation, performance tracking, and lead generation — into intelligent, scalable systems. These solutions save time, reduce errors, and boost efficiency.

I'm also **co-founder of Everything Data**, a data community with over 50 members across LinkedIn and Slack. As Power BI Lead, I mentor professionals and enthusiasts in data analytics and visualization.

**Key facts:**
- Based in **Lagos, Nigeria**
- **6 months at 4SpotConsulting** as AI Automation Specialist
- **1+ year** total AI automation experience
- Co-founder of **Everything Data** (50+ members)
- Power BI Lead & mentor

---

## PROFILE PHOTO

My profile photo is located at `./public/images/profile.jpg` (I will place it there). It's a professional headshot — navy suit, tie, warm-toned background.

**Photo treatment rules:**
- Display it in a stylish frame/shape (rounded with a subtle gradient border or glow effect)
- Keep the original aspect ratio — **NO distortion, NO warping, NO AI manipulation, NO filters that change my appearance**
- Only use CSS styling: subtle border/glow, slight shadow, clean rounded or shaped mask
- Make it look premium and professional

---

## SITE SECTIONS (in scroll order)

### 1. HERO SECTION

- Large, bold heading: "Hi, I'm **Chukwudi**"
- Animated typing/cycling subtitle that rotates through: "AI Engineer", "Automation Architect", "Full Stack Builder"
- Short punchy tagline: "I build intelligent systems and automated workflows that help teams work smarter."
- Green pulse dot "Available for work" badge
- CTA buttons: "View Projects" (scrolls to projects) and "Download Resume"
- Social links row (LinkedIn, GitHub, Twitter/X — I'll update URLs later, use placeholder `#` links for now)
- Profile photo on the right side with the styling described above
- Scroll-down indicator animation at bottom
- Subtle parallax or gradient animation on the background

### 2. ABOUT ME

- Detailed bio using the content from my "Who I Am" section above
- Mention 4SpotConsulting, Everything Data co-founder role, Power BI Lead
- **Animated stat counters** on scroll:
  - "6+" → "Automation Projects Deployed"
  - "6 months" → "at 4SpotConsulting"
  - "1+" → "Year AI Experience"
  - "50+" → "Community Members Mentored"

### 3. EXPERIENCE (Timeline layout)

**4SpotConsulting** — AI Automation Specialist
- Duration: 6 months
- Location: Remote
- Responsibilities: Designed and deployed end-to-end automation workflows using n8n, Make, and Airtable. Built AI-powered systems for proposal generation, reporting dashboards, lead generation, invoice processing, content publishing, and daily stand-ups. Integrated OpenAI, Apify, Telegram bots, Google Workspace, and PDF processing tools into production workflows.

**Everything Data** — Co-Founder & Power BI Lead
- Duration: Ongoing
- Built and lead a data community of 50+ professionals across LinkedIn and Slack. Mentor members in data analytics, Power BI, and visualization.

### 4. PROJECTS — **THIS IS THE MOST IMPORTANT SECTION**

Split into **two tabbed/segmented categories** with a toggle or tab selector:

#### Tab 1: "Automations Built"

This is the primary tab (shown by default). Use these **exact real projects** with all details:

```typescript
// data/projects.ts — AUTOMATION PROJECTS

export const automationProjects = [
  {
    title: "Daily Stand-Up Automation",
    category: "automation" as const,
    description: "Built an intelligent stand-up automation system that manages daily team updates, tracks sprint progress, and syncs employee availability automatically. The system connects Telegram, Airtable, Google Sheets, and n8n to collect stand-up responses, update task statuses, and notify managers — all without manual coordination.",
    task: "Eliminate manual daily stand-up coordination across distributed teams",
    tools: ["Airtable", "Google Sheets", "n8n", "Telegram"],
    loomUrl: "https://www.loom.com/share/61c7f5c98b8741049ca6452902eeae90",
    onePagerUrl: "https://docs.google.com/document/d/1Mh8-wBlnJAQRZqNICg7FlsynCoZugHLT9wzd7ak5STY/edit?usp=sharing",
    featured: true,
  },
  {
    title: "Proposal Generation & Delivery Automation",
    category: "automation" as const,
    description: "Built an AI-powered proposal generation and delivery system that automates the creation, approval, and sending of sales proposals after discovery calls. The automation connects n8n, Airtable, Google Sheets, Google Docs, and OpenAI to generate client-ready proposals in minutes while ensuring internal review and approval before delivery.",
    task: "Automate sales proposal creation from discovery call to client delivery",
    tools: ["Airtable", "n8n", "Google Sheets", "Google Docs", "OpenAI"],
    loomUrl: "https://www.loom.com/share/d02d567a048d4770b9cd92d8a355fde0?sid=e0987c68-320d-4e76-8737-c08770d7b63c",
    onePagerUrl: "https://docs.google.com/document/d/1V_1Ol9JdSMRhYOjh6qdL6o0RE9bRFeSb_WRffffnD3o/edit?usp=sharing",
    featured: true,
  },
  {
    title: "Lead Generation & Outreach Automation",
    category: "automation" as const,
    description: "Built an AI-powered lead generation and outreach automation system that identifies, enriches, and personalizes engagement with potential clients. The system integrates n8n, Airtable, Apify, and OpenAI to automate the discovery of high-quality leads, validate their contact information, and generate tailored outreach sequences for email and LinkedIn — eliminating hours of manual prospecting work.",
    task: "Automate lead discovery, enrichment, and personalized outreach at scale",
    tools: ["Airtable", "Apify", "n8n", "OpenAI"],
    loomUrl: "https://www.loom.com/share/fe432c38d76e48ecb0dec995bc7b8d92?sid=839d2771-14c0-462f-8db9-defe11bd6f17",
    onePagerUrl: "https://docs.google.com/document/d/1twB9yvWNCXhiRx66EI5CCDqcMsUjA-AQtMdiPLTfdW8/edit?usp=sharing",
    featured: true,
  },
  {
    title: "Reporting & Dashboard Automation",
    category: "automation" as const,
    description: "Built an AI-powered reporting and dashboard automation that consolidates data from multiple departmental sources and updates a unified Airtable dashboard with performance metrics. The workflow connects Airtable, Google Sheets, Make.com, and custom logic modules to automate yearly performance reporting across Sales, Project Delivery, and People Operations.",
    task: "Consolidate multi-department data into a unified performance dashboard automatically",
    tools: ["Airtable", "Make", "Google Sheets"],
    loomUrl: "https://www.loom.com/share/cd7c79b788ac4276a7eb4f74119933fa?sid=674e3b66-a29f-4291-930b-2456290d31e0",
    featured: true,
  },
  {
    title: "Content Generation & Publishing Automation",
    category: "automation" as const,
    description: "Built an AI-powered content generation and publishing system that automates the creation, optimization, and distribution of articles across multiple platforms. The automation integrates n8n, OpenAI, and Telegram to generate SEO-optimized content, adapt it for platform-specific formats, and publish or save posts for future scheduling with minimal human effort.",
    task: "Automate end-to-end content creation from ideation to multi-platform publishing",
    tools: ["Google Sheets", "n8n", "OpenAI", "Telegram"],
    loomUrl: "https://www.loom.com/share/0d98f6cb383645ea8c8523c4b96324ef?sid=446cf54e-5f8b-462f-8679-d6c743c7600f",
    secondaryLoomUrl: "https://www.loom.com/share/b74d7da946ba42ac9fa1130d5f69f912?sid=1d8527d7-2a11-4c8b-80c0-357ed2c52f6e",
    onePagerUrl: "https://docs.google.com/document/d/1tym1-KCeID-a_VOn__ifs_Vqf-ZDURONpUrw79YXqxM/edit?usp=sharing",
    featured: true,
  },
  {
    title: "Invoice Inbox Automation",
    category: "automation" as const,
    description: "Built an AI-powered invoice processing system that automates the extraction and logging of invoice details from emails into Google Sheets. The automation connects Gmail, Make.com, OpenAI, PDF.co, and Google Sheets to handle both email-based and PDF-based invoices seamlessly.",
    task: "Automate invoice extraction from email inboxes and log into structured spreadsheets",
    tools: ["Make", "Gmail", "OpenAI", "PDF.co", "Google Sheets"],
    loomUrl: "https://www.loom.com/share/c60ecb4767994c63948528dfb53c5f7c?sid=47ce8c8a-8462-4b37-8787-e30f244f1a89",
    featured: true,
  },
];
```

**Automation card design requirements:**
- Each card shows: title, description, task (what problem it solved), and **tool badges**
- **Tool badges** are colored pill/tag badges with distinct colors per tool:
  - n8n → orange-red (#EA4B71)
  - Make → purple (#6D00CC)
  - Airtable → blue (#2D7FF9)
  - Google Sheets → green (#0F9D58)
  - Google Docs → blue (#4285F4)
  - OpenAI → dark/black (#000000 with white text)
  - Telegram → sky blue (#0088CC)
  - Apify → teal (#00C7B7)
  - Gmail → red (#EA4335)
  - PDF.co → orange (#FF6B35)
- A **"Watch Demo"** button that links to the Loom URL. This button should be prominent but only shown if `loomUrl` exists
- If `onePagerUrl` exists, show a secondary link like "View Case Study" or "Read More"
- If `secondaryLoomUrl` exists, show a "Watch Result" button alongside the main demo button
- Hover animation: lift + subtle glow effect
- On click or via a detail modal, show the full description + task

**IMPORTANT for future-proofing:** Some future automation projects I add WON'T have Loom links or one-pagers. The card component must gracefully handle missing `loomUrl`, `onePagerUrl`, and `secondaryLoomUrl` — just don't render those buttons if the field is undefined/empty.

#### Tab 2: "Products Built"

I don't have product projects yet. Create **2 placeholder product cards** with realistic placeholder content (e.g., "AI-Powered Dashboard" and "Data Community Platform") so I can see the layout and replace later. Product cards should show:
- Title, description, tech stack tags (like React, Next.js, Supabase, etc.), live URL, GitHub URL
- No "tools used" or "task" fields — that's only for automations
- Same hover animation style

**Project data structure:** Store everything in a single `data/projects.ts` file so I can easily add/edit projects later without touching components.

### 5. SKILLS / TOOLS

Organize my real skills from the data below into visual categories:

**AI & Automation:** n8n, Make (Integromat), Zapier, Apify, LLMs (OpenAI, Claude), Airtable, Tavily
**Development:** JavaScript, Python, SQL, Frontend Web Development
**Design & No-Code:** Figma, Webflow, Softr Studio, Notion
**Platforms & Tools:** Google Sheets, Google Mail, Google Docs, Telegram Bots, Power BI

- Use a clean icon-based grid layout — **NO progress bars** (they're subjective)
- Each skill shows as a clean card or icon+label
- Add an **infinite scrolling marquee/ticker** of tool names at the bottom (like the reference site)

### 6. CONTACT

- Email (placeholder: chukwudi@example.com — I'll update)
- Location: Lagos, Nigeria
- Social links (LinkedIn, GitHub, Twitter/X — placeholder `#` for now)
- Simple contact form: name, email, message (non-functional for now, I'll hook it up later)
- "Available for work" badge
- "Response time usually within 24 hours"

### 7. FOOTER

- Minimal: name, role ("AI Engineer & Automation Architect"), copyright 2026
- Social links
- "Built with Next.js & Tailwind CSS"

---

## DESIGN REQUIREMENTS

**Color Scheme — Dark theme:**
- Background: dark navy/charcoal (#0A0A1A or similar deep dark blue-black, NOT pure black)
- Primary accent: electric blue/cyan (#00D4FF or #00B4D8)
- Secondary accent: a complementary violet or purple for variety (#7C3AED)
- Text: white (#FFFFFF) on dark, with muted gray (#94A3B8) for secondary text
- Subtle gradient accents using the primary/secondary colors
- Cards: slightly lighter dark (#111827 or #1E293B) with subtle border
- Include a **light/dark mode toggle** in the navbar

**Typography:**
- Use a distinctive, modern font pairing — NOT Inter, Roboto, or Arial
- Suggestion: **"Plus Jakarta Sans"** or **"Outfit"** for body, **"Cabinet Grotesk"** or **"Clash Display"** for headings
- Import from Google Fonts or use next/font
- Headings should feel bold and punchy, body text clean and readable

**Animations (Framer Motion):**
- Smooth fade-in-up on scroll for each section (use `react-intersection-observer`)
- Staggered card grid reveals (cards animate in sequence, not all at once)
- Hover effects on all interactive elements (scale, glow, border color shift)
- Hero typing/cycling animation for the role subtitle
- Animated number counters for stats in the About section
- Smooth scroll between sections
- Navbar blur/opacity increase on scroll
- Active section indicator in nav that tracks scroll position
- Page load entrance animation (brief, elegant)
- Tool marquee continuous scroll animation
- Card hover: translateY(-8px) + shadow increase + subtle border glow

**Responsiveness:**
- Fully responsive: desktop, tablet, mobile
- Mobile hamburger menu with smooth slide-in animation
- Cards stack to single column on mobile
- Hero section stacks vertically on mobile (text above, photo below)
- Tab selector remains usable on mobile

**Navigation:**
- Sticky top navbar with glassmorphism (backdrop-blur + semi-transparent bg)
- Sections: About, Experience, Projects, Skills, Contact
- "Download Resume" button in nav (styled differently from nav links)
- Smooth scroll on click
- Active section highlighting based on scroll position

---

## TECHNICAL SETUP

1. Initialize with: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` (if not already done)
2. Install: `framer-motion react-icons react-intersection-observer react-type-animation`
3. Project structure:
```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    ProjectCard.tsx
    AutomationCard.tsx
    Skills.tsx
    Contact.tsx
    Footer.tsx
    ScrollReveal.tsx (reusable scroll animation wrapper)
    AnimatedCounter.tsx
    ToolMarquee.tsx
    ThemeToggle.tsx
  data/
    projects.ts
    experience.ts
    skills.ts
  hooks/
    useActiveSection.ts
  utils/
    cn.ts (classname utility)
public/
  images/
    profile.jpg
  resume.pdf (placeholder)
```

4. Make sure `npm run dev` works without errors before finishing

---

## CRITICAL REMINDERS

- The **Projects section is the star of the show** — it should be the most visually impressive and detailed section
- **Automations tab is shown by default** since that's where all my real work is
- Every automation card MUST show the **colored tool badges** — this is a key differentiator
- The **Loom "Watch Demo" button** is a major feature — make it visually prominent (maybe with a play icon) but ONLY render it when a loomUrl exists
- All project data lives in **one data file** for easy future editing
- **Do NOT distort my profile photo** — CSS styling only
- Make the site feel alive with animations but keep it professional, not gimmicky
- The overall vibe should say: "This person builds serious production systems, not toy projects"

**Start building now. Initialize the project, install all dependencies, create every component, wire up the data, and make a fully functional, production-quality portfolio. Run the dev server and fix any errors.**
