import type { Metadata } from "next";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/footer/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { sans, display, mono } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Abhishek Bhat — Senior Core Platform Engineer",
  description:
    "Portfolio of Abhishek Bhat, a senior core platform engineer building production infrastructure for agentic AI: agent runtime, observability, cloud-agnostic infra, identity, and multi-tenancy.",
};

// Dark is the default. Only opt out if the visitor explicitly chose light.
const themeScript = `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark scroll-smooth ${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative bg-background font-sans antialiased">
        <AmbientBackground />
        <Analytics />
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
