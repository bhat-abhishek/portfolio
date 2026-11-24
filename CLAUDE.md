# CLAUDE.md

Guidance for working in this repo. Read before changing UI.

## Project

Personal portfolio for Abhishek Bhat. Single-page, section-scroll site.
Stack: **Next.js 14 (App Router) · TypeScript · Tailwind · shadcn/ui · framer-motion**.

Aesthetic: **"Silicon Datasheet"**: chip package, PCB traces, printed datasheet. Precise, technical, copper-warm, not neon. **Dark is the default theme.** Full spec in [DESIGN.md](DESIGN.md).

## Commands

- Dev: `yarn dev` (script is `next`). Add `--port N` to change port.
- Build: `yarn build` · Lint: `yarn lint` · Types: `npx tsc --noEmit`.
- Install deps: **`pnpm add <pkg>`** (see Gotchas — this repo uses pnpm).

## Architecture

- `src/app/` — App Router. `layout.tsx` (fonts, theme script, ambient bg, analytics), `page.tsx` (assembles the `<section>`s + scroll-spy), `api/` (route handlers).
- `src/components/<Section>/` — one folder per section (Hero, About, Experience, Projects, Skills, Contact, footer, Navbar).
- `src/components/ui/` — shared primitives (shadcn + Aceternity-style + our own `Reveal`, `SectionHeading`, `AmbientBackground`, `ThemeToggle`).
- `src/lib/config.ts` — **all editorial content** (profile, about, experiences, projects, socials, skills, sections, chip, terminal script). Edit content here, not in JSX.
- `src/lib/fonts.ts` — font definitions. `src/lib/utils.ts` — `cn()`.

## Design system

**Always read [DESIGN.md](DESIGN.md) before making any visual or UI decisions.** All fonts, colors, spacing, and aesthetic direction are defined there. Don't deviate without explicit approval; in QA, flag code that doesn't match it.

Quick reference:
- **Color: tokens only.** CSS variables in [src/app/globals.css](src/app/globals.css) (`:root` = light datasheet, `.dark` = dark PCB), mapped in [tailwind.config.ts](tailwind.config.ts). Use `bg-background`, `bg-card`, `bg-muted`, `text-foreground`, `text-muted-foreground`, `border-border`, `text-accent`/`bg-accent` (copper), `bg-signal`/`text-signal` (live/OK only). Never `gray-500`/`zinc-800`/`emerald-*`/hex.
- **Type** ([src/lib/fonts.ts](src/lib/fonts.ts)): `font-display` = Geist (headings, `font-semibold tracking-tight`), `font-sans` = IBM Plex Sans (body), `font-mono` = JetBrains Mono (labels, pins, tags, code). No serif.
- **Headings:** `<SectionHeading section="about" />`, with copy and refdes in `sections` in `config.ts`. Eyebrows elsewhere use `SectionLabel`.
- **Shape:** `--radius: 0.25rem`. Cards `rounded-lg` + `chip-frame`; buttons `rounded-md`; tags `rounded-sm font-mono`. Depth via `shadow-soft` / `shadow-lift` only.
- **Theme mechanics (custom, no next-themes):** `<html className="dark …">` server-side; inline head script removes `dark` only if `localStorage.theme === 'light'`. [ThemeToggle.tsx](src/components/ui/ThemeToggle.tsx) flips the class. **Every change must pass WCAG AA in both themes.**

## Frontend rules

1. **Component-based, content-driven.** No inline content or one-off magic values in JSX. Content → `config.ts`; repeated UI → a component in `ui/`. Reuse `Reveal`, `SectionHeading`, shadcn primitives before writing new ones.
2. **Layout.** `<main>` is capped `max-w-[1400px] mx-auto`. Section wrapper padding: `px-4 py-24 lg:py-28`. Two-column sections use `flex flex-col gap-12 lg:flex-row` (stack on mobile, split on `lg`); see Hero and Contact.
3. **Motion.** Use framer-motion. Entrances: wrap blocks in [Reveal.tsx](src/components/ui/Reveal.tsx) (scroll fade-up) or stagger variants (see [Hero.tsx](src/components/Hero/Hero.tsx)). Keep it subtle. **Always guard with `prefers-reduced-motion`** (see `AmbientBackground`, `Terminal`, `.trace-pulse`) and provide a static fallback.
4. **Buttons/CTAs.** Pattern: `rounded-md px-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift`. Solid = `Button` default; secondary = `variant="outline"`.
5. **Accessibility.** `aria-label` on icon buttons, `aria-hidden` on decorative layers, `focus-visible:ring-2 ring-ring`, `aria-live` for async status, real labels on inputs.

## Forms & API

- Forms: **react-hook-form + zod**, shadcn wrappers in [src/components/ui/form.tsx](src/components/ui/form.tsx). Share the zod schema between client and route (e.g. [src/lib/contact-schema.ts](src/lib/contact-schema.ts)). Include a hidden honeypot for spam.
- Contact route: [src/app/api/contact/route.ts](src/app/api/contact/route.ts) — `runtime = "nodejs"`, nodemailer Gmail SMTP, validates, escapes HTML, strips header-injection chars.

## Privacy & secrets

- The email address is **not** in the repo or client. It lives in env only: `GMAIL_USER`, `GMAIL_APP_PASSWORD` (a Gmail **App Password**), optional `CONTACT_TO`. Locally in gitignored `.env.local`; in prod via Vercel env vars. `.env.example` documents the keys. Never reintroduce the address into `config.ts` or any component.

## Gotchas

- **Package manager:** repo has both `yarn.lock` and `pnpm-lock.yaml`; the installed store is **pnpm** (`node_modules/.pnpm`). Install with `pnpm add`. A stale `.next` can throw a `@vercel/analytics` vendor-chunk 500 — fix with `rm -rf .next` and restart.
- `yarn build` fails at "collect page data" for `/blog/[slug]` when the Postgres DB is unreachable; compilation itself is fine.
- `src/components/Hero/Highlights.tsx` is dead code (imported nowhere). Don't wire it back without intent.
