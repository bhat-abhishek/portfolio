"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconLogout, IconPlus } from "@tabler/icons-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const AdminShell = ({
  children,
  newPostButton = false,
}: {
  children: React.ReactNode;
  newPostButton?: boolean;
}) => {
  const router = useRouter();

  const logout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <Link href="/admin" className="font-display text-sm tracking-tight text-foreground">
            Blog Admin
          </Link>
          <div className="flex items-center gap-3">
            {newPostButton && (
              <Link
                href="/admin/posts/new"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <IconPlus className="h-4 w-4" />
                New post
              </Link>
            )}
            <ThemeToggle />
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
            >
              <IconLogout className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[1100px] px-4 py-10 sm:px-8">{children}</main>
    </>
  );
};

export default AdminShell;
