import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";

// Body text — the engineering-docs face
export const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// Headings / display — exposes `--font-geist-sans`, aliased to --font-display in globals.css
export const display = GeistSans;

// Silkscreen labels, pin names, data, code
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
