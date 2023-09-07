import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Skills />
      <Services />
    </main>
  );
}
