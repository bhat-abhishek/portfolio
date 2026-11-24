# Design System — Abhishek Bhat Portfolio ("Silicon Datasheet")

## Product Context
- **What this is:** Single-page portfolio + blog for Abhishek Bhat, Senior Core Platform Engineer building infrastructure for an agentic AI platform.
- **Who it's for:** Hiring managers, eng leads, and peers evaluating platform/infra depth.
- **Background it draws on:** B.E. Electronics & Communications, built a Verilog compiler. The platform is the chip; agents run on it.
- **Project type:** Personal marketing/editorial site.
- **Memorable thing:** "This person designs the silicon, not the stickers." Precise, engineered, quietly warm (copper).

## Aesthetic Direction
- **Direction:** Industrial/technical. Chip package + PCB + printed datasheet.
- **Dark (default):** die shot under lab light. Solder-mask black with a green cast, copper traces.
- **Light:** printed datasheet. Off-white paper, black ink, copper reference marks.
- **Decoration:** intentional. 24px dot-pitch grid (`.substrate-grid`), a faint copper probe light that follows the pointer, chip frames on cards (`.chip-frame`: pin-1 dot + corner ticks), silkscreen ref-designator eyebrows.
- **Never:** neon Matrix green, purple gradients, glassmorphism, bubbly radii, drop-shadow stacks.

## Typography
| Role | Font | Class | Notes |
| --- | --- | --- | --- |
| Display / headings | **Geist** 600 (`geist` pkg) | `font-display font-semibold tracking-tight` | precise, tight |
| Body | **IBM Plex Sans** 300–600 | `font-sans` | the engineering-docs face |
| Labels, pins, data, code, tags | **JetBrains Mono** 400–600 | `font-mono` | uppercase + `tracking-[0.14–0.18em]` for silkscreen labels |

Fonts are defined in `src/lib/fonts.ts`. `--font-display` is aliased to Geist's `--font-geist-sans` in `globals.css`.
Scale: hero `text-5xl → 7xl`, section `text-3xl → 5xl`, body `text-lg`, labels `text-xs`/`11px` mono.

## Color (restrained: one accent, plus signal for live states)
Tokens live in `src/app/globals.css`. Always use semantic classes; never hardcode.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `background` | `#F4F2EC` | `#0B0F0D` | page |
| `card` | `#FBFAF6` | `#121815` | packages / panels |
| `muted` | `#EAE7DE` | `#18201C` | die window, console header |
| `border` | `#D9D6CC` | `#1F2A24` | hairlines, traces |
| `foreground` | `#121614` (16.3:1) | `#E6EDE8` (16.2:1) | text |
| `muted-foreground` | `#56605A` (5.8:1) | `#8FA398` (7.2:1) | secondary text, pin labels |
| `accent` (copper) | `#A4511C` (5.0:1) | `#E0915A` (7.7:1) | links, active, focus, refdes, pads, pulses |
| `signal` | `#1A7449` | `#4FD69A` (10.5:1) | live/OK only: status LEDs, ✓ |
| `destructive` | red 45% | red 60% | errors |

All text pairs pass WCAG AA in both themes.

## Shape & Depth
- `--radius: 0.25rem` (chips are square). `rounded-md` for buttons/CTAs, `rounded-sm` for tech tags, `rounded-lg` for cards. No `rounded-full` on CTAs.
- `shadow-soft` = near-flat hairline. `shadow-lift` = 1px copper ring + faint copper glow. Hover lift max `-translate-y-0.5`.

## Components / Patterns
- **SectionHeading** (`section` key → `sections` in `config.ts`) renders `SectionLabel` (`U1 ── ABOUT`) + display title.
- **SectionLabel**: mono silkscreen eyebrow with copper refdes.
- **Chip** (`Hero/Chip.tsx`): SVG package with pinout from `config.chip`. Traces in `border`, pads + pulses in `accent`.
- **Terminal**: "serial console" with a `UART0` header and signal LED, wrapped in `.chip-frame`.
- **Tags**: `rounded-sm border bg-card font-mono text-[11px]`.

## Layout & Spacing
- Unchanged: `<main>` max `1400px`, sections `px-4 py-24 lg:py-28`, two-column at `lg`. 4px base unit.

## Motion
- Intentional and sparse: scroll fade-ups (`Reveal`), signal pulses along traces (`.trace-pulse`, 3.2s linear), console typing, probe light (spring).
- Every animation has a `prefers-reduced-motion` fallback: pulses hidden, typing skipped, probe parked, pings off.

## Decisions Log
| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-11-14 | Replaced warm paper-and-ink theme with "Silicon Datasheet" | User chose a chip/hardware direction to match their ECE + platform-infra background. Created via /design-consultation. |
| 2026-11-14 | Copper accent instead of tech blue/green | Copper traces are the honest material; it stands apart from the default blue/green dev portfolio. |
| 2026-11-14 | Chip pinout in hero, terminal kept below as serial console | Makes "platform as a chip" literal; the pins are the actual systems built. |
