import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { TechStackItem } from "@/types";
import { urlFor } from "@/lib/sanity";

interface TechStackProps {
  data: TechStackItem[];
}

const TechStack = ({ data }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-x-5 md:gap-x-10 gap-y-5 md:gap-y-10">
      {data.map((item) => (
        <div
          key={item.label}
          className="relative flex items-center justify-center rounded-full w-[52px] h-[52px] md:w-[90px] md:h-[90px] bg-primary-white-800 dark:bg-primary-black-500"
        >
          <div className="absolute w-6 h-6 md:w-12 md:h-12">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={urlFor(item.icon.asset._ref).url()}
                    alt={item.label}
                    fill
                    className="cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
