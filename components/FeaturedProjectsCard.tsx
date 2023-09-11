import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectsCardProps {
  bgColor: string;
  technologiesUsedBgColor: string;
  projectTitle: string;
  projectDescription: string;
  frontend: string;
  backend: string;
  link: string;
  laptopImage: string;
  mobileImage: string;
}

const FeaturedProjectsCard = ({
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
    <article className="flex flex-col">
      <div
        className={`flex flex-col md:flex-row md:justify-between ${bgColor} rounded-2xl py-11 px-6 gap-7`}
      >
        <div className="flex flex-col gap-7 bg-red-300 md:w-[330px]">
          <h1 className="text-heading3 text-white">
            {projectTitle} -
            <br className="md:hidden" /> {projectDescription}{" "}
            <br className="md:hidden" />
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
        <div className="flex items-end md:pt-5">
          <div className="relative w-[230px] h-32 md:w-[400px] md:h-[200px] z-10">
            <Image
              src={laptopImage}
              alt="laptop"
              fill
            />
          </div>
          <div className="-ml-3 relative w-[60px] h-[112px] md:w-[90px] md:h-[160px]">
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

export default FeaturedProjectsCard;
