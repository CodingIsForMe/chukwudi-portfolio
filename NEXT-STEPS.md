# ▶ Resume here next time

The portfolio is **built and live**: https://chukwudi-portfolio-rose.vercel.app

Nothing is broken — these are just the personal details still on placeholders.
Fill in the answers below and tell Claude "update my portfolio with these
answers" (or just paste them). Claude will apply them and redeploy.

---

## 1. Answer these (replace the blanks)

| # | Question | Your answer |
|---|----------|-------------|
| 1 | LinkedIn URL | ` ` |
| 2 | GitHub URL | ` ` |
| 3 | Twitter / X URL (or "none") | ` ` |
| 4 | Real email (replaces `chukwudi@example.com`) | ` ` |
| 5 | Phone number for the resume (optional) | ` ` |
| 6 | Custom domain you want? (e.g. `chukwudi.dev`, or "no") | ` ` |
| 7 | Anything else to change (tagline, project edits, etc.) | ` ` |

## 2. Change the profile picture

- Put the new photo at **`public/images/profile.jpg`** (keep that exact name).
- Best results: a **portrait, roughly 4:5**, with your face near the top — the
  hero frame crops with `object-top`, so a tall headshot looks best.
- Don't have it renamed? Just drop the new file anywhere in this folder and tell
  Claude the filename; it will move + rename it to `public/images/profile.jpg`.

## 3. How Claude applies your answers (reference)

| What | File(s) |
|------|---------|
| Social links (`#` placeholders) | `src/components/Hero.tsx`, `Contact.tsx`, `Footer.tsx` → the `socials` arrays |
| Email | `src/components/Contact.tsx` → `EMAIL` constant |
| Resume content | regenerated into `public/resume.pdf` |
| Projects (add/edit later) | `src/data/projects.ts` |

## 4. Redeploy after any change

```bash
npx vercel@latest deploy --prod --yes
```

This updates the live URL above. (Project is already linked to Vercel as
`chukwudi-portfolio`; no setup needed.)

## 5. Run locally

```bash
npm install   # only if node_modules is missing
npm run dev    # http://localhost:3000
```
