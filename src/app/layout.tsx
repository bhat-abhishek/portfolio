import type { Metadata } from "next";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/footer/Footer";
import AmbientBackground from "@/components/ui/AmbientBackground";
import { sans, display, serif } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Abhishek Bhat — Full Stack Developer",
  description:
    "Portfolio of Abhishek Bhat, a full stack developer building scalable backends and clean, fast web apps.",
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
      className={`dark scroll-smooth ${sans.variable} ${display.variable} ${serif.variable}`}
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
