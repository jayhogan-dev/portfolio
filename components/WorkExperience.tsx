import React from "react";
import LightContainer from "./containers/Light";
import Image from "next/image";
import LineCircle from "@/public/web-icons/line-circle.svg";
import WorkExperienceCard from "./WorkExperienceCard";

const WorkExperience = () => {
  return (
    <LightContainer>
      <section className="flex flex-col md:flex-row py-12 md:py-[72px] gap-4 md:gap-10">
        <div className="flex flex-col gap-6 bg-primary-black-200 dark:bg-primary-white-800 pt-14 px-10 pb-10 md:pt-10 md:px-20 md:pb-10 rounded-2xl w-full md:w-1/2">
          <h1 className="text-white text-4xl font-bold leading-10 w-[200px] dark:text-primary-black-200 z-10">
            Work Experience
          </h1>
          <div className="relative -top-10 -left-0 bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[100px] lg:-top-9 lg:-left-0" />
          <p className="-mt-10 text-small-regular md:text-body-regular text-primary-white-800 dark:text-primary-white-500 xl:w-[80%]">
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career
          </p>
          {/* Change this to SVGR after */}
          <LineCircle className="stroke-primary-white-800 dark:stroke-primary-black-500" />
        </div>
        <div className="flex flex-col md:h-[400px] xl:h-[330px] gap-6 md:justify-between w-full md:w-1/2">
          <WorkExperienceCard
            icon="/work-experience-icons/adapt-health.png"
            title="AdaptHealth"
            description="Full-Stack Dev - 2 Years Experience"
          />
          <WorkExperienceCard
            icon="/work-experience-icons/spiro-health.png"
            title="Spiro Health"
            description="Full-Stack Dev - 1 Year Experience"
          />
          <WorkExperienceCard
            icon="/work-experience-icons/health-complex.png"
            title="Health Complex"
            description="Front-End Dev - 2 Years Experience"
          />
        </div>
      </section>
    </LightContainer>
  );
};

export default WorkExperience;
