import React from "react";
import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <div className="w-72 sm:w-full">
          <SectionTitle title="What services do I provide" />
        </div>
        <div className="relative -top-24 -right-[52px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[150px] sm:-top-14 sm:-right-0 sm:-left-14 lg:w-[200px] lg:-top-[56px] lg:-left-[74px]" />
        <p>Test</p>
      </section>
    </DarkContainer>
  );
};

export default Services;
