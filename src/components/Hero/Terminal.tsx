"use client";
import React, { useEffect, useState } from "react";
import { terminalScript, terminalMeta } from "@/lib/config";

type Line = (typeof terminalScript)[number];
const SCRIPT: readonly Line[] = terminalScript;

// commands type like a human; output prints faster like a machine
const TYPE_SPEED: Record<Line["kind"], number> = { cmd: 45, out: 20, ok: 20 };
// beat after a command (Enter → processing) vs. rest before the next command
const PAUSE_AFTER: Record<Line["kind"], number> = { cmd: 380, out: 650, ok: 650 };

const Cursor = () => (
  <span className="ml-0.5 inline-block h-[1.05em] w-[0.55ch] translate-y-[2px] animate-pulse bg-accent motion-reduce:animate-none align-middle" />
);

const Terminal = () => {
  const [step, setStep] = useState(0);
  const [chars, setChars] = useState(0);

  // respect reduced-motion: skip typing, show the full session at once
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(SCRIPT.length);
    }
  }, []);

  // type the active line character-by-character, then pause and advance
  useEffect(() => {
    if (step >= SCRIPT.length) return;
    const line = SCRIPT[step];
    let timer: ReturnType<typeof setTimeout>;

    if (chars < line.text.length) {
      timer = setTimeout(() => setChars((c) => c + 1), TYPE_SPEED[line.kind]);
    } else {
      timer = setTimeout(() => {
        setStep((s) => s + 1);
        setChars(0);
      }, PAUSE_AFTER[line.kind]);
    }
    return () => clearTimeout(timer);
  }, [step, chars]);

  const done = step >= SCRIPT.length;
  const visible = SCRIPT.slice(0, done ? SCRIPT.length : step + 1);

  return (
    <div className="chip-frame overflow-hidden rounded-lg border border-border bg-card shadow-soft">
      {/* serial console header */}
      <div className="flex items-center justify-between border-b border-border bg-muted/60 px-4 py-2.5 pl-7 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        <span>{terminalMeta.port}</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
          {terminalMeta.status}
        </span>
      </div>

      {/* body */}
      <div className="min-h-[236px] space-y-2 p-5 font-mono text-sm leading-relaxed">
        {visible.map((line, i) => {
          const active = i === step && !done;
          const text = active ? line.text.slice(0, chars) : line.text;

          if (line.kind === "cmd") {
            return (
              <div key={i} className="text-foreground">
                <span className="mr-2 text-accent">$</span>
                {text}
                {active && <Cursor />}
              </div>
            );
          }
          if (line.kind === "ok") {
            return (
              <div key={i} className="text-muted-foreground">
                <span className="mr-2 text-signal">✓</span>
                {text}
                {active && <Cursor />}
              </div>
            );
          }
          return (
            <div key={i} className="pl-4 text-muted-foreground">
              {text}
              {active && <Cursor />}
            </div>
          );
        })}

        {done && (
          <div className="text-foreground">
            <span className="mr-2 text-accent">$</span>
            <Cursor />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
