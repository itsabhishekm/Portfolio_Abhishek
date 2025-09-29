# Arun Sanyal Portfolio Workspace Guide

## Project Overview

- **Stack**: React 18 + TypeScript + Vite 7 + Tailwind CSS 3
- **State & Data**: Zustand (`src/store/usePortfolioStore.ts`) holds all profile, project, blog, and education content derived from the resume.
- **Animations**: Framer Motion drives scroll-triggered reveals, hover micromotions, and suspenseful loading states.
- **Styling**: Tailwind with custom global tokens in `src/index.css` (dark palette, smooth scrolling, custom scrollbar).
- **Accessibility**: Smooth in-page navigation via anchor targets, animated transitions respect reduced motion if browser enforces it.

## Key Features

1. **Hero & About Sections** (`HeroSection.tsx`, `AboutSection.tsx`) – hero CTA card, animated summary, signature themes blocks.
2. **Experience Timeline** (`ExperienceSection.tsx`) – gradient cards with tech badges and bullet narratives.
3. **Interactive Case Studies** (`ProjectsSection.tsx`) – button rail selects active project in Zustand, detail panel reveals problem/approach/impact copy.
4. **Lazy Content Zones** – `EducationSection` and `BlogSection` are code-split with `React.lazy` and wrapped in `Suspense` inside `App.tsx`.
5. **Validated Contact Form** (`ContactSection.tsx`) – Zod schema (`zod` dependency already available) handles client-side validation, with animated feedback messages.

## Code Architecture

```

src/

  components/

    layout/           # Root layout, navigation shell, background gradients

    sections/         # Domain sections consuming store data (Hero, About, ...)

    ui/               # Reusable primitives (SectionHeader, Badge, GradientBorderCard)

  store/

    usePortfolioStore.ts  # Zustand store with typed portfolio dataset

  types/

    portfolio.ts          # Type definitions for profile entities

```

- `App.tsx` composes sections sequentially inside `RootLayout`. Blog/Education are lazy-loaded for lighter initial bundle.
- Section components rely on store selectors so future data integrations only touch the store layer.
- Forms and inputs use localized helpers in `ContactSection.tsx` for consistency.

## Commands

- Install dependencies: `npm install`
- Production build (required after changes): `npm run build`
- Preview production bundle: `npm run preview`

## Styling & Assets

- Global CSS (`src/index.css`) sets typography, gradient scrollbars, and light-on-dark palette.
- Tailwind classes supply responsive behavior; extend via Tailwind config if additional tokens are needed.
- All static imagery should use absolute public paths (e.g., `/assets/...`). No direct `src/assets` references remain in components.

## Data & Content

- Resume-derived data lives entirely in `usePortfolioStore.ts`. Update that file for new experiences, projects, blog posts, or education items.
- Types for each section are defined in `src/types/portfolio.ts` to maintain structure integrity.

## Future Development Notes

- For backend integrations (e.g., persisting contact submissions), enable Youware Backend MCP tool and replace local Zod-only validation with API calls.
- Maintain Framer Motion variants within section components; reusable animations can move to a shared module if patterns expand.
- Keep new assets optimized; large media embeds should be lazy-loaded to preserve performance.| col1 | col2 | col3 |
  | ---- | ---- | ---- |
  |      |      |      |
  |      |      |      |
