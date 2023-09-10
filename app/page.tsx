import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Skills />
      <Services />
      <WorkExperience />
    </main>
  );
}
