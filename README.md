# Arinze Ugwu — Portfolio

A responsive portfolio for Arinze Ugwu, a software engineer and AI evaluator based in Enugu, Nigeria with 5+ years of experience building web and backend systems, plus experience in coding-agent evaluation, technical QA, benchmark engineering, and security review. The site presents CV-backed experience and selected work through clear product narratives, an accessible light/dark interface, and a focused contact experience.

[View the live portfolio](https://arinze-portfolio.vercel.app/) · [Read the experience timeline](https://arinze-portfolio.vercel.app/#experience) · [Explore all projects](https://arinze-portfolio.vercel.app/projects) · [Contact Arinze](https://arinze-portfolio.vercel.app/contact)

## Highlights

- Editorial, responsive visual system designed for mobile through wide desktop layouts
- FieldNote Triage presented as the flagship project with a verified product screenshot
- Dedicated AI-evaluation practice section grounded in CV-backed coding-agent, factuality, rubric, and benchmark work
- CV-backed experience timeline spanning product engineering, AI evaluation, technical QA, benchmark validation, and security
- Current downloadable résumé with a stable public URL and recruiter-friendly filename
- One canonical project catalog shared by featured and archive views
- Rhythmic route transitions, directional scroll reveals, staggered content motion, accessible route and anchor focus, and reduced-motion support
- Persistent light/dark theme with safe browser-storage fallback
- Secure Formspree contact flow with clear submission feedback
- Social, search and structured metadata for a polished public launch
- Vercel security headers, immutable asset caching and SPA routing

## Stack

- React 19 and React Router 7
- Vite 7
- Framer Motion
- Custom responsive CSS
- Fontsource variable fonts
- ESLint 9
- GitHub Actions
- Vercel

## Local development

Use Node.js 24 and npm 11.

```bash
npm ci
npm run dev
```

Run the same quality gate used in CI:

```bash
npm run check
```

## Project structure

```text
src/
  components/   Reusable layout, project and content sections
  data/         Canonical project and professional profile data
  pages/        Route-level views
  assets/       Portrait and verified product imagery
public/         Current résumé, icons and social metadata assets
```

## Deployment

The `master` branch deploys to Vercel. Client-side routes are rewritten to `index.html`, while fingerprinted Vite assets receive immutable cache headers.

© Arinze Ugwu. All rights reserved.
