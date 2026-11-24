"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email"),
  password: z.string().min(1, "Enter your password"),
});
type LoginInput = z.infer<typeof loginSchema>;

const fieldClass =
  "w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm text-foreground shadow-soft outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/40";

const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: LoginInput) => {
    setError(null);
    const res = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Login failed.");
      return;
    }
    router.replace("/admin");
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-soft"
      noValidate
    >
      <h1 className="font-display text-2xl tracking-tight text-foreground">Sign in</h1>
      <p className="mt-2 text-sm text-muted-foreground">Admin access only.</p>

      <div className="mt-6 space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            autoComplete="username"
            className={fieldClass}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs font-medium text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">Password</label>
          <input
            type="password"
            autoComplete="current-password"
            className={fieldClass}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs font-medium text-destructive">{errors.password.message}</p>
          )}
        </div>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:translate-y-0 disabled:opacity-60"
      >
        {isSubmitting ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
};

export default LoginForm;
