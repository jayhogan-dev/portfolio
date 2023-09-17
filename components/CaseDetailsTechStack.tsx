import LightContainer from "./containers/Light";

const CaseDetailsTechStack = () => {
  return (
    <LightContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center w-full">
        <div className="flex flex-col w-full sm:flex-row justify-between gap-5 md:gap-0 sm:w-[500px] md:w-[600px] lg:w-[880px]">
          <div className="flex flex-col gap-3">
            <h3 className="text-small-bold md:text-body-bold text-primary-black-400 dark:text-primary-white-500">
              My Role
            </h3>
            <h2 className="text-paragraph-bold md:text-base-bold text-primary-black-200 dark:text-white">
              Full-Stack Developer
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-small-bold md:text-body-bold text-primary-black-400 dark:text-primary-white-500">
              Start Date
            </h3>
            <h2 className="text-paragraph-bold md:text-base-bold text-primary-black-200 dark:text-white">
              08/01/2023
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-small-bold md:text-body-bold text-primary-black-400 dark:text-primary-white-500">
              End Date
            </h3>
            <h2 className="text-paragraph-bold md:text-base-bold text-primary-black-200 dark:text-white">
              09/01/2023
            </h2>
          </div>
        </div>
      </section>
    </LightContainer>
  );
};

export default CaseDetailsTechStack;
