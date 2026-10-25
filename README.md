# TCAI Information Technology co. ltd. — Company Profile Website

Official static company profile website for **TCAI Information Technology co. ltd.**, specializing in AI Data Services, Language Services, Speech Technology (ASR & TTS), and Digital Media Production.

---

## 1. Project Overview

- **Architecture:** Pure Static Frontend SPA (Vite + React 19 + TypeScript + Tailwind CSS v4) with asynchronous route splitting via `React.lazy` and `Suspense`.
- **Performance & Bundling:** Separate JavaScript chunks for each page route to minimize initial load size and ensure swift First Contentful Paint.
- **Design System:** Corporate B2B technology aesthetic following the Universal Frontend Design Constitution (anti-slop restraint, zero-pill metadata discipline, Top Bar Contract, 60-30-10 color allocation).
- **Backend-Free Architecture:** No database, ORM, API endpoints, or admin authentication. All company profiles, service scopes, and industry data are centrally managed in static TypeScript data modules.
- **Form Handling:** Client-side validation with pre-formatted `mailto:` draft generation and copy-to-clipboard functionality.

---

## 2. Pages & Routes

- **Home (`/`)**: Hero proposition, Company introduction (3 core values), Services overview (5 marquee cards), Why Choose TCAI (4 operational strengths), Target industries overview, 4-step project workflow, and CTA.
- **About Us (`/about`)**: Company identity, Mission & Vision statements, Core Values (Integrity, Quality, Collaboration, Adaptability, Continuous Improvement), Delivery approach (Human-in-the-Loop, Iterative calibration, Confidentiality & compliance).
- **Services (`/services`)**: Full detailed breakdown of all 6 service lines:
  1. Translation Services
  2. AI Data Services
  3. Automatic Speech Recognition (ASR)
  4. Text-to-Speech (TTS)
  5. Voice Over
  6. Video Production
  *(Includes scope of work, illustrative use cases, client benefits, and interactive filter tabs).*
- **Industries (`/industries`)**: In-depth coverage of 6 sectors (AI & Machine Learning, Technology & Software, Media & Entertainment, Advertising & Digital Marketing, Education & E-Learning, Enterprise & Business Services) with common challenges and sample deliverables.
- **Careers (`/careers`)**: Professional collaboration network for 6 categories (Translators, Data Annotators, Quality Reviewers, Speech Specialists, Voice Talent, Video Editors) with project availability notes and an interactive interest draft generator.
- **Contact (`/contact`)**: Validated project intake form (Full Name, Business Email, Company, Service Interest, Scope) generating instant structured email drafts for `inquiry@tcai-tech.example.com`.

---

## 3. Tech Stack

- **Framework:** React 19 + Vite 8
- **Language:** TypeScript 5.8 (Strict Mode)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss";`) + Plus Jakarta Sans typography
- **Icons:** Lucide React
- **Visual Assets:** High-fidelity generated imagery with resilient CSS/SVG fallbacks

---

## 4. Development & Build

### Development Server
```bash
npm run dev
```
Runs the local development server at `http://localhost:3000`.

### Type-Check & Lint
```bash
npm run lint
```
Executes `tsc --noEmit` to ensure strict TypeScript type safety.

### Production Build
```bash
npm run build
```
Compiles and bundles the static production distribution inside `/dist`.

---

## 5. Security & Privacy Highlights

- Zero external tracking scripts or telemetry trackers.
- No user personal data stored in browser LocalStorage.
- External links protected with `rel="noreferrer"` / `referrerPolicy="no-referrer"`.
- Form submissions generate safe, pre-encoded email drafts handled directly on the client's device.
