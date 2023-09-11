import Image from "next/image";
import SectionTitle from "./SectionTitle";
import LightContainer from "./containers/Light";
import { skills } from "@/constants";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

const Skills = () => {
  return (
    <LightContainer>
      <section className="flex flex-col py-12 md:py-[72px] items-center justify-center">
        <SectionTitle title="My skills" />
        <div className="relative -top-14 bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[150px] lg:w-[200px] lg:-top-[56px]" />
        <div className="flex flex-wrap gap-x-5 md:gap-x-10 gap-y-5 md:gap-y-10 items-center justify-center">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="relative flex items-center justify-center rounded-full w-[52px] h-[52px] md:w-[100px] md:h-[100px] bg-primary-white-800 dark:bg-primary-black-500"
            >
              {/* <Circle className="fill-primary-white-800 dark:fill-primary-black-500" /> */}
              <div className="absolute w-6 h-6 md:w-12 md:h-12">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Image
                        src={skill.icon}
                        alt={skill.label}
                        fill
                        className="cursor-pointer"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </section>
    </LightContainer>
  );
};

export default Skills;
