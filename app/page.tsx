import ContactBanner from "@/components/ContactBanner";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import WorkExperience from "@/components/WorkExperience";

import { client } from "@/lib/sanity";
import { Testimonial } from "@/types";

export const revalidate = 500;

async function getData() {
  const query = `*[_type == "testimonial"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data = (await getData()) as Testimonial[];

  return (
    <main className="flex flex-col">
      <Hero />
      <Skills />
      <Services />
      <WorkExperience />
      <FeaturedProjects />
      <Testimonials testimonials={data} />
      <ContactBanner />
    </main>
  );
}
