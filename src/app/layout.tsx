import type { Metadata } from "next";

import { Ubuntu} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/footer/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});


export const metadata: Metadata = {
  title: "Abhishek Bhat",
  description: "Portfolio of Abhishek Bhat. Software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${ubuntu.className} relative bg-[#0A0919]`}>
        <Analytics/>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
