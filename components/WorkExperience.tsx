import React from "react";
import LightContainer from "./containers/Light";
import Image from "next/image";
import LineCircle from "@/public/web-icons/line-circle.svg";

const WorkExperience = () => {
  return (
    <LightContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <div className="flex flex-col gap-6 bg-primary-black-200 dark:bg-primary-white-800 pt-14 px-10 pb-10 rounded-2xl w-full">
          <h1 className="text-white text-4xl font-bold leading-10 w-[200px] dark:text-primary-black-200">
            Work Experience
          </h1>
          <p className="text-small-regular md:text-body-regular text-primary-white-800 dark:text-primary-white-500">
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career
          </p>
          {/* Change this to SVGR after */}
          <LineCircle className="fill-primary-white-800 dark:fill-primary-black-500 w-100" />
        </div>
      </section>
    </LightContainer>
  );
};

export default WorkExperience;
