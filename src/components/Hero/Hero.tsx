"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/lib/config";
import { Button } from "@/components/ui/button";
import ContactIcons from "./ContactIcons";
import Terminal from "./Terminal";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const Hero = () => {
  return (
    <div className="flex min-h-[92vh] flex-col justify-center px-4 pt-24 pb-16 lg:pt-28">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-7 lg:basis-3/5"
        >
          <motion.p
            variants={item}
            className="font-serif text-2xl italic text-muted-foreground"
          >
            Hi, I&apos;m {profile.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-medium leading-[1.04] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {profile.role}
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent px-7 transition-all hover:-translate-y-0.5"
            >
              <Link href="#projects">View work</Link>
            </Button>
          </motion.div>

          <motion.div variants={item} className="pt-4">
            <ContactIcons />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="w-full lg:basis-2/5"
        >
          <Terminal />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
