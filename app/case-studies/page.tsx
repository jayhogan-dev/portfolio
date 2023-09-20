import CaseStudyCard from "@/components/CaseStudyCard";
import DarkContainer from "@/components/containers/Dark";
import LightContainer from "@/components/containers/Light";
import { client, urlFor } from "@/lib/sanity";

async function getData() {
  const query = `*[_type == "project"]{title, laptopImage, subtitle}`;

  const data = await client.fetch(query);

  return data;
}

const CaseStudiesPage = async () => {
  const data = await getData();

  const imageUrl = urlFor(data[0].laptopImage.asset._ref).url();

  return (
    <main className="flex flex-col">
      <DarkContainer>
        <section className="flex flex-col py-12 md:py-[72px] items-center justify-center">
          <h1 className="relative text-4xl text-center font-bold leading-[115%] tracking-[-0.36px] lg:text-heading1 dark:text-white text-primary-black-300 mb-10 z-10">
            Recent Case Studies
          </h1>
          <div className="xxs:hidden relative -top-24 -right-[66px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[88px]" />
          <div className="relative -top-[70px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[130px] xxs:-top-14 xxs:w-[230px] xxs:-right-[68px] lg:w-[415px] lg:-top-[64px] lg:-right-[120px]" />
          <p className="-mt-5 text-small-regular lg:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800 w-full sm:w-[500px] lg:w-[650px] text-center">
            Dive into my recent success stories and discover how I&apos;ve
            helped clients overcome challenges, innovate, and achieve their
            goals
          </p>
        </section>
      </DarkContainer>
      <LightContainer>
        <section className="flex flex-col py-12 md:py-[72px] items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
            <CaseStudyCard
              title="Morent"
              color="bg-blue-300"
              subtitle="Car Rental Application"
              image="/morent-laptop.png"
              linkUrl="/case-studies/morent"
            />
            <CaseStudyCard
              title={data[0].title}
              color="bg-green-300"
              subtitle={data[0].subtitle}
              image={imageUrl}
              linkUrl="/"
            />
            <CaseStudyCard
              title="Test"
              color="bg-red-300"
              subtitle="AI Application"
              image="/jobit-laptop.png"
              linkUrl="/"
            />
          </div>
        </section>
      </LightContainer>
    </main>
  );
};

export default CaseStudiesPage;
