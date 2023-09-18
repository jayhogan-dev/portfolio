import React from "react";
import LightContainer from "./containers/Light";
import Image from "next/image";
import { challenges, learnings } from "@/constants";

const CaseDetailsLearnings = () => {
  return (
    <LightContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center w-full">
        <div className="flex mt-5 flex-col gap-3 w-full sm:w-[500px] md:w-[600px] lg:w-[880px]">
          <h3 className="text-xs text-primary-blue-light dark:text-primary-blue-dark font-semibold">
            Problem
          </h3>
          <h2 className="text-heading3 mb-2">Challenges & Learnings</h2>
          <div className="mb-3 md:mb-5 flex flex-col gap-5 py-6 px-4 md:px-8 md:py-10 rounded-lg bg-primary-white-800 dark:bg-primary-black-500">
            <h3 className="uppercase text-body-bold md:text-paragraph-bold text-rose-400">
              Challenges
            </h3>
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="flex flex-row items-start gap-3"
              >
                <Image
                  src="/web-icons/challenge.svg"
                  alt="challenge"
                  height={20}
                  width={20}
                  className="mt-1"
                />
                <p className="text-small-regular md:text-body-regular text-primary-white-500 dark:text-primary-white-800">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5 py-6 px-4 md:px-8 md:py-10 rounded-lg bg-primary-white-800 dark:bg-primary-black-500">
            <h3 className="uppercase text-body-bold md:text-paragraph-bold text-green-400">
              Learnings
            </h3>
            {learnings.map((learning) => (
              <div
                key={learning.id}
                className="flex flex-row items-start gap-3"
              >
                <Image
                  src="/web-icons/check.svg"
                  alt="check"
                  height={20}
                  width={20}
                  className="mt-1"
                />
                <p className="text-small-regular md:text-body-regular text-primary-white-500 dark:text-primary-white-800">
                  {learning.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LightContainer>
  );
};

export default CaseDetailsLearnings;
