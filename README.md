# Chukwudi — Portfolio

A modern, animated, single-page portfolio for an **AI Engineer & Automation Architect**.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Editing content

Everything lives in plain data files — no need to touch components:

| What | File |
| --- | --- |
| Automation & product projects | `src/data/projects.ts` |
| Experience timeline | `src/data/experience.ts` |
| Skills & marquee tools | `src/data/skills.ts` |

### Adding an automation project

Append to `automationProjects` in `src/data/projects.ts`. Only `title`,
`category`, `description`, `task`, and `tools` are required. `loomUrl`,
`secondaryLoomUrl`, and `onePagerUrl` are optional — the card automatically
hides the matching button when a URL is missing.

New tools get a neutral badge by default; add brand colors in the
`toolColors` map in the same file.

## Things to update

- **Profile photo** — `public/images/profile.jpg`
- **Resume** — replace the placeholder `public/resume.pdf` with your real CV
- **Email** — `chukwudi@example.com` in `src/components/Contact.tsx`
- **Social links** — currently `#` placeholders in `Hero.tsx`, `Contact.tsx`, `Footer.tsx`

## Structure

```
src/
  app/            layout, page, global styles
  components/     UI + sections
  data/           projects, experience, skills
  hooks/          useActiveSection
  utils/          cn (classNames helper)
public/
  images/profile.jpg
  resume.pdf
```

## Theme

Dark by default with a light/dark toggle in the navbar. Surface colors are
driven by CSS variables in `globals.css`; brand accents (cyan `#00D4FF`,
violet `#7C3AED`) stay constant across both themes.
