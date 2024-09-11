import type { Metadata } from "next";
import { Ubuntu, Michroma } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const michroma = Michroma({
  subsets : ['latin'],
  weight : ['400']
})

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
      <body className={`${ubuntu.className} relative bg-[#0A0919]`}>
        <header className="">
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
