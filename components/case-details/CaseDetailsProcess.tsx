import { myProcesses } from "@/constants";
import LightContainer from "../containers/Light";
import Image from "next/image";

const CaseDetailsProcess = () => {
  return (
    <LightContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center w-full">
        <div className="flex mt-5 flex-col gap-3 w-full sm:w-[500px] md:w-[600px] lg:w-[880px]">
          <h3 className="text-xs text-primary-blue-light dark:text-primary-blue-dark font-semibold">
            Way of work
          </h3>
          <h2 className="text-heading3 mb-2">My Process</h2>
          <div className="flex flex-wrap gap-x-10 md:gap-x-16 gap-y-5 md:gap-y-10 items-center justify-center">
            {myProcesses.map((process) => (
              <div
                key={process.label}
                className="flex flex-col items-center"
              >
                <div className="relative flex items-center justify-center rounded-full w-[75px] h-[75px] md:w-[100px] md:h-[100px] bg-primary-white-800 dark:bg-primary-black-500">
                  <div className="absolute w-9 h-9 md:w-12 md:h-12">
                    <Image
                      src={process.icon}
                      alt={process.label}
                      fill
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <p className="text-small-bold text-primary-black-300 dark:text-white mt-3 md:text-paragraph-bold">
                  {process.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LightContainer>
  );
};

export default CaseDetailsProcess;
