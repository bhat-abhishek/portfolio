import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/Contact/Contact";
import ProjectsV2 from "@/components/Projects/ProjectsV2";

export default function Home() {
  return (
    <main className="text-[#66fcf1] max-w-[1400px] mx-auto">
      <Hero />
      <Skills />
      <ProjectsV2 />
      <Contact/>
      <Footer />
    </main>
  );
}
