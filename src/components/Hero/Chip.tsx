import React from "react";
import { chip } from "@/lib/config";

// Geometry (SVG user units). Package sits centered in a 420x340 canvas.
const W = 420;
const H = 340;
const PKG = { x: 130, y: 90, size: 160 };
const PIN_LEN = 10;
const TRACE_LEN = 54;

const spread = (count: number, start: number, length: number) =>
  Array.from({ length: count }, (_, i) => start + ((i + 1) * length) / (count + 1));

const Chip = () => {
  const { left, right, top } = chip.pins;
  const leftYs = spread(left.length, PKG.y, PKG.size);
  const rightYs = spread(right.length, PKG.y, PKG.size);
  const topXs = spread(top.length, PKG.x, PKG.size);
  const pkgRight = PKG.x + PKG.size;

  // every trace, as [path, label anchor] — reused for the static line and the pulse
  const traces = [
    ...left.map((label, i) => {
      const y = leftYs[i];
      const x0 = PKG.x - PIN_LEN;
      const x1 = x0 - TRACE_LEN;
      return { label, d: `M${x0} ${y} H${x1}`, pad: [x1, y], text: [x1 - 8, y + 3.5], anchor: "end" as const };
    }),
    ...right.map((label, i) => {
      const y = rightYs[i];
      const x0 = pkgRight + PIN_LEN;
      const x1 = x0 + TRACE_LEN;
      return { label, d: `M${x0} ${y} H${x1}`, pad: [x1, y], text: [x1 + 8, y + 3.5], anchor: "start" as const };
    }),
    ...top.map((label, i) => {
      const x = topXs[i];
      const y0 = PKG.y - PIN_LEN;
      const y1 = y0 - 46;
      return { label, d: `M${x} ${y0} V${y1}`, pad: [x, y1], text: [x, y1 - 10], anchor: "middle" as const };
    }),
  ];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Chip diagram: ${chip.name} with pins ${[...left, ...right, ...top].join(", ")}`}
      className="h-auto w-full"
    >
      {/* traces */}
      <g className="stroke-border" strokeWidth={1.5} fill="none">
        {traces.map((t) => (
          <path key={`t-${t.label}`} d={t.d} />
        ))}
      </g>
      {/* signal pulses */}
      <g className="stroke-accent" strokeWidth={2} fill="none" strokeLinecap="round" aria-hidden="true">
        {traces.map((t, i) => (
          <path
            key={`p-${t.label}`}
            d={t.d}
            className="trace-pulse"
            style={{ animationDelay: `${(i * 0.37) % 3.2}s` }}
          />
        ))}
      </g>
      {/* pads + labels */}
      {traces.map((t) => (
        <g key={`l-${t.label}`}>
          <circle cx={t.pad[0]} cy={t.pad[1]} r={3.5} className="fill-background stroke-accent" strokeWidth={1.5} />
          <text
            x={t.text[0]}
            y={t.text[1]}
            textAnchor={t.anchor}
            className="fill-muted-foreground font-mono"
            fontSize={10}
            letterSpacing="0.08em"
          >
            {t.label}
          </text>
        </g>
      ))}

      {/* pins */}
      <g className="fill-muted-foreground/60">
        {leftYs.map((y) => (
          <rect key={`pl-${y}`} x={PKG.x - PIN_LEN} y={y - 3} width={PIN_LEN} height={6} />
        ))}
        {rightYs.map((y) => (
          <rect key={`pr-${y}`} x={pkgRight} y={y - 3} width={PIN_LEN} height={6} />
        ))}
        {topXs.map((x) => (
          <rect key={`pt-${x}`} x={x - 3} y={PKG.y - PIN_LEN} width={6} height={PIN_LEN} />
        ))}
      </g>

      {/* package */}
      <rect
        x={PKG.x}
        y={PKG.y}
        width={PKG.size}
        height={PKG.size}
        rx={4}
        className="fill-card stroke-border"
        strokeWidth={1.5}
      />
      {/* die window */}
      <rect
        x={PKG.x + 28}
        y={PKG.y + 28}
        width={PKG.size - 56}
        height={PKG.size - 56}
        rx={2}
        className="fill-muted stroke-accent/40"
        strokeWidth={1}
      />
      <g className="stroke-accent/20" strokeWidth={0.75}>
        {[1, 2, 3].map((n) => {
          const step = (PKG.size - 56) / 4;
          return (
            <React.Fragment key={n}>
              <line x1={PKG.x + 28 + n * step} y1={PKG.y + 28} x2={PKG.x + 28 + n * step} y2={PKG.y + PKG.size - 28} />
              <line x1={PKG.x + 28} y1={PKG.y + 28 + n * step} x2={PKG.x + PKG.size - 28} y2={PKG.y + 28 + n * step} />
            </React.Fragment>
          );
        })}
      </g>
      {/* pin-1 dot */}
      <circle cx={PKG.x + 12} cy={PKG.y + 12} r={3} className="fill-accent" />

      {/* markings */}
      <text x={PKG.x + PKG.size / 2} y={PKG.y + PKG.size / 2 - 4} textAnchor="middle" className="fill-foreground font-mono" fontSize={13} fontWeight={600} letterSpacing="0.12em">
        {chip.part}
      </text>
      <text x={PKG.x + PKG.size / 2} y={PKG.y + PKG.size / 2 + 12} textAnchor="middle" className="fill-muted-foreground font-mono" fontSize={8} letterSpacing="0.14em">
        {chip.name}
      </text>
      <text x={PKG.x + PKG.size / 2} y={PKG.y + PKG.size - 10} textAnchor="middle" className="fill-muted-foreground/70 font-mono" fontSize={7} letterSpacing="0.12em">
        {chip.marking}
      </text>
    </svg>
  );
};

export default Chip;
