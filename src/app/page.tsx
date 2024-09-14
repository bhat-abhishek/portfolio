"use client";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import ProjectsV2 from "@/components/Projects/Projects";
import Experiences from "@/components/Experience/Experience";
import Navbar from "@/components/Navbar/Navbar";
import "../components/Navbar/navlink.styles.css";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // Adjust based on when you want to consider a section in view
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const homeRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById(activeSection);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeSection]);

  return (
    <>
      <header>
        <Navbar activeSection={activeSection} />
      </header>
      <main className="text-[#66fcf1] max-w-[1400px] mx-auto relative scroll-smooth overflow-y-auto overflow-hidden">
        <section id="home" key={1}>
          <Hero />
        </section>
        <section id="skills" key={2}>
          <Skills />
        </section>
        <section id="projects" key={3}>
          <ProjectsV2 />
        </section>
        <section id="experience" key={4}>
          <Experiences />
        </section>
        <section id="contact" key={5}>
          <Contact />
        </section>
      </main>
    </>
  );
}
