import React from "react";
import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";

const CaseDetailsHeader = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center">
        <h2 className="text-sm md:text-xl uppercase font-semibold text-primary-blue-light dark:text-primary-blue-dark">
          Web Dev Project
        </h2>
        <div className="w-[320px] lg:w-full">
          <SectionTitle title="Morent - A Car Rental Website" />
        </div>
        <div className="relative -top-[120px] -left-[68px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[126px] lg:w-[170px] lg:-top-[80px] lg:-left-[275px]" />
      </section>
    </DarkContainer>
  );
};

export default CaseDetailsHeader;
