// app/page.tsx
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
