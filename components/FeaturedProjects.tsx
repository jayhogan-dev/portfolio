import FeaturedProjectsCardEven from "./FeaturedProjectsCardEven";
import FeaturedProjectsCardOdd from "./FeaturedProjectsCardOdd";
import SectionTitle from "./SectionTitle";
import LightContainer from "./containers/Light";

const FeaturedProjects = () => {
  return (
    <LightContainer>
      <section className="flex flex-col items-center justify-center py-10 md:py-16">
        <div className="w-full">
          <SectionTitle title="Featured Projects" />
        </div>
        <div className="relative -top-14 -right-[85px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[140px] lg:w-[190px] lg:-top-[56px] lg:left-[115px]" />
        {/* Projects */}
        <div className="flex flex-col w-full gap-5 md:gap-10">
          <FeaturedProjectsCardOdd
            projectTitle="Morent"
            projectDescription="A Car Rental"
            frontend="React, Next.js"
            backend="Next.js, MongoDB"
            link="/case-studies/morent"
            bgColor="bg-blue-600"
            technologiesUsedBgColor="bg-blue-400"
            laptopImage="/morent-laptop.png"
            mobileImage="/morent-mobile-1.png"
          />
          <FeaturedProjectsCardEven
            projectTitle="JobIT"
            projectDescription="A Job Finding"
            frontend="React, Next.js"
            backend="RapidAPI"
            link="/case-studies/jobit"
            bgColor="bg-emerald-500"
            technologiesUsedBgColor="bg-emerald-400"
            laptopImage="/jobit-laptop.png"
            mobileImage="/jobit-mobile.png"
          />
        </div>
      </section>
    </LightContainer>
  );
};

export default FeaturedProjects;
