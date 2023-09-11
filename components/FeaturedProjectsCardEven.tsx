import { FeaturedProjectsCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const FeaturedProjectsCardEven = ({
  bgColor,
  technologiesUsedBgColor,
  projectTitle,
  projectDescription,
  frontend,
  backend,
  link,
  laptopImage,
  mobileImage,
}: FeaturedProjectsCardProps) => {
  return (
    <article className="flex flex-col overflow-hidden">
      <div
        className={`flex flex-col md:flex-row-reverse md:justify-between ${bgColor} rounded-2xl py-11 px-6 md:px-0 gap-7`}
      >
        <div className="flex flex-col gap-7 sm:ml-10 sm:w-[450px] xl:w-[500px] justify-center">
          <h1 className="text-heading3 text-white xl:text-heading2">
            {projectTitle} -
            <br className="sm:hidden" /> {projectDescription}{" "}
            <br className="sm:hidden" />
            Application
          </h1>
          <div className="flex w-full gap-3 text-center">
            <div className={`p-3 ${technologiesUsedBgColor} rounded-sm`}>
              <p className="text-small-regular text-white">{frontend}</p>
            </div>
            <div className={`p-3 ${technologiesUsedBgColor} rounded-sm`}>
              <p className="text-small-regular text-white">{backend}</p>
            </div>
          </div>
          <Link
            href={link}
            className="text-white text-body-bold items-center flex"
          >
            See Project Details
            <Image
              src="/web-icons/long-arrow.svg"
              alt="arrow"
              height={10}
              width={40}
              className="ml-2"
            />
          </Link>
        </div>
        <div className="flex items-end md:pt-5 md:-ml-16">
          <div className="relative w-[230px] h-32 sm:w-[400px] sm:h-[250px] lg:h-[275px] lg:w-[400px] xl:w-[475px] xl:h-[300px]">
            <Image
              src={laptopImage}
              alt="laptop"
              fill
            />
          </div>
          <div className="relative w-[60px] h-[112px] sm:h-[200px] sm:w-[125px] lg:h-[220px] lg:w-[130px] xl:h-[260px] xl:w-[150px] md:hidden lg:flex">
            <Image
              src={mobileImage}
              alt="phone"
              fill
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjectsCardEven;
