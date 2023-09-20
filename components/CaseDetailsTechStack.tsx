import { morentStack } from "@/constants";
import TechStack from "./TechStack";
import LightContainer from "./containers/Light";

interface CaseDetailsTechStackProps {
  role: string;
  startDate: string;
  endDate: string;
}

const CaseDetailsTechStack = ({
  role,
  startDate,
  endDate,
}: CaseDetailsTechStackProps) => {
  return (
    <LightContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center w-full">
        <div className="flex mb-5 flex-col w-full sm:flex-row justify-between gap-5 md:gap-0 sm:w-[500px] md:w-[600px] lg:w-[880px]">
          <div className="flex flex-col gap-3">
            <h3 className="text-small-bold md:text-body-bold text-primary-black-400 dark:text-primary-white-500">
              My Role
            </h3>
            <h2 className="text-paragraph-bold md:text-base-bold text-primary-black-200 dark:text-white">
              {role}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-small-bold md:text-body-bold text-primary-black-400 dark:text-primary-white-500">
              Start Date
            </h3>
            <h2 className="text-paragraph-bold md:text-base-bold text-primary-black-200 dark:text-white">
              {startDate}
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-small-bold md:text-body-bold text-primary-black-400 dark:text-primary-white-500">
              End Date
            </h3>
            <h2 className="text-paragraph-bold md:text-base-bold text-primary-black-200 dark:text-white">
              {endDate}
            </h2>
          </div>
        </div>
        <div className="flex mt-5 flex-col gap-3 w-full sm:w-[500px] md:w-[600px] lg:w-[880px]">
          <h3 className="text-xs text-primary-blue-light dark:text-primary-blue-dark font-semibold">
            Technologies Used
          </h3>
          <h2 className="text-heading3 mb-2">Tech Stack</h2>
          <TechStack data={morentStack} />
        </div>
      </section>
    </LightContainer>
  );
};

export default CaseDetailsTechStack;
