# Edwin Pile — Full-Stack (Web & Mobile) Portfolio

Production-minded engineer focused on scalable web & mobile apps, clean architecture, and measurable results. I build with **React / React Native / .NET / Node.js**, deploy to cloud, and ship fast.

**Live:** _coming soon_  
**Contact:** epilepra@gmail.com · [LinkedIn](https://www.linkedin.com/in/edwin-pile-583652234/) · [GitHub](https://github.com/EPraz)

---

## Highlights

- **Web & Mobile:** React + React Native apps with real-world UX, performance, and reliability goals.
- **APIs & Cloud:** REST/GraphQL, SQL Server/No SQL Server, Azure (Functions, Web Apps), CI/CD.
- **Quality:** xUnit/Jest, integration tests, code reviews, and documentation.
- **Performance by design:** GPU-conscious animations (GSAP), adaptive WebGL (R3F), responsive grids, lazy assets.

---

## Tech Stack

**Frontend:** React, React Native (Expo), TypeScript, Tailwind/MUI  
**Backend:** .NET (C#), Node.js/NestJS, REST/GraphQL  
**Data:** PostgreSQL, SQL Server, No SQL Server  
**Cloud/DevOps:** Azure (Functions, Web Apps, API Management), CI/CD, Git Flow  
**Testing:** xUnit, Jest  
**Viz:** Charts.js/Recharts (as needed)

---

## Projects (Selection)

> All cards are driven from a single data source and rendered in a uniform grid with status badges and CTAs.

- **Project Management App** — Sprints, roles, taskboard, charts  
  Stack: React · NestJS · Prisma · PostgreSQL · Supabase  
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/ecommerce-admin-rn)
  <!-- _Status: Live_ · [Repo](https://github.com/EPraz/pm-app) · Live link in site -->

- **Multi-Tenant E-commerce Admin (RN)** — Vendor dashboards & analytics  
  Stack: React Native · Expo · NestJS · PostgreSQL · Stripe API  
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/ecommerce-admin-rn)

- **CCTV Viewer App (RN)** — Multi-camera UI prototype  
  Stack: React Native · Expo · TypeScript  
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/cctv-viewer-rn)

- **Services Marketplace (RN)** — Clients ↔ Providers MVP  
  Stack: React Native · Expo · NestJS · PostgreSQL  
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/marketplace-rn)

- **Offline Orders System (RN)** — POS-style, offline-first  
  Stack: React Native · Expo · NestJS · PostgreSQL · AsyncStorage  
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/offline-orders-rn)

- **Organization Admin Hub (RN)** — Centralized org management  
  Stack: React Native · Expo · NestJS · PostgreSQL  
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/admin-hub-rn)

---

## Architecture & Implementation

- **Content-driven UI:** Cards/sections render from typed constants for easy updates.  
  Update these to maintain the site without touching components:

  - `contants/projects.ts` — project cards (title, stack, links, status)
  - `contants/index.ts` — `heroWords`, `abilities`, `techStackImgs`, `counterItems`, `socialImgs`, `expCards`

- **Uniform project grid:** Same-sized cards, fixed media aspect ratio, clamped text, consistent CTAs (Live/Repo/Demo).

- **Animations (GSAP):** Batched `ScrollTrigger` for minimal observers; respects `prefers-reduced-motion`; one-time entrance animations.

- **Background (StarsCanvas):** R3F scene tuned for **battery vs. power**:

  - Adaptive DPR & lower point count on battery
  - `powerPreference: "low-power"` when not charging
  - `useMemo` for positions, slower rotation ticks
  - Optional toggle to disable entirely (feature flag ready)

- **Accessibility & UX:** Keyboard-focusable cards/links, alt text for icons/logos, consistent hit targets, high-contrast badges.

---

## Performance & Accessibility Notes

- **Images:** `object-cover`, lazy loading, consistent aspect ratios.
- **Animations:** transform/opacity only; batching to avoid layout thrash.
- **WebGL:** reduced cost in low-power scenarios.
<!-- - **Targets:** Lighthouse ≥ 90 across PWA/Perf/Best Practices/SEO on mobile. -->

---

## Thank you

<!-- ## Getting Started

**Prerequisites:** Node 18+ and pnpm/yarn/npm.

```bash
# install
npm install

# run dev
npm dev

# build
npm build

# preview
npm preview

# lint (if configured)
npm lint
``` -->
