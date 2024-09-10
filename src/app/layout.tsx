import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

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
    <html lang="en">
      <body className={`${ubuntu.className} bg-[#0A0919]`}>
        <header className="sticky top-0 right-0 left-0">
        <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
