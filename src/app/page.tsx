"use client";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";
import ProjectsV2 from "@/components/Projects/Projects";
import Experiences from "@/components/Experience/Experience";
import Navbar from "@/components/Navbar/Navbar";
import "../components/Navbar/navlink.styles.css";
import { useState, useEffect } from "react";

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
        // Center-band scroll-spy: whichever section crosses the middle of the
        // viewport is "active". Robust for both short (Hero/About) and very
        // tall (Experience timeline) sections.
        threshold: 0,
        rootMargin: "-45% 0px -45% 0px",
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

  return (
    <>
      <header>
        <Navbar activeSection={activeSection} />
      </header>
      <main className="text-foreground max-w-[1400px] mx-auto relative scroll-smooth overflow-y-auto overflow-hidden">
        <section id="home" key="home">
          <Hero />
        </section>
        <section id="about" key="about">
          <About />
        </section>
        <section id="experience" key="experience">
          <Experiences />
        </section>
        <section id="projects" key="projects">
          <ProjectsV2 />
        </section>
        <section id="skills" key="skills">
          <Skills />
        </section>
        <section id="contact" key="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
