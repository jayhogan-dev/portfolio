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

import Circle from "@/public/circle.svg";

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
              className="relative flex items-center justify-center"
            >
              <Circle className="fill-primary-white-800 dark:fill-primary-black-300" />
              <div className="absolute w-12 h-12">
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
