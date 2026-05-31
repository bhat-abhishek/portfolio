import React from "react";
import { display } from "@/lib/fonts";

const Footer = () => {
  return (
    <div className="mx-auto max-w-[1400px] px-4">
      <div className="flex flex-col items-center gap-2 border-t border-border py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className={`${display.className} text-foreground`}>Abhishek Bhat</p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} — Built with Next.js &amp; Tailwind
        </p>
      </div>
    </div>
  );
};

export default Footer;
