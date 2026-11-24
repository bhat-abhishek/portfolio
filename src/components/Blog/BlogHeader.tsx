import React from "react";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const BlogHeader = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-4 sm:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-display text-sm text-foreground"
        >
          <IconArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Abhishek Bhat
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default BlogHeader;
