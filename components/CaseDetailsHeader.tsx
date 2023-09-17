import Image from "next/image";
import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

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
        <div className="flex flex-row -mt-16 items-end">
          <div className="relative w-[230px] h-32 sm:w-[400px] sm:h-[250px] lg:w-[475px] lg:h-[300px]">
            <Image
              src="/morent-laptop.png"
              alt="laptop"
              fill
            />
          </div>
          <div className="relative mb-1 sm:mb-3 w-[60px] h-[112px] sm:h-[200px] sm:w-[125px] lg:h-[220px] lg:w-[130px]">
            <Image
              src="/morent-mobile-1.png"
              alt="phone"
              fill
            />
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2 w-[300px] sm:w-[500px]">
          <div className="flex items-center gap-3">
            <Image
              src="/web-icons/earth.svg"
              alt="globe"
              width={24}
              height={24}
            />
            <Link
              href="https://cohort5-dynamic-duo-car-rent.vercel.app/"
              className="text-small-bold md:text-paragraph-bold"
            >
              Demo Site
            </Link>
            <Image
              src="/web-icons/carousel-right-arrow.svg"
              alt="globe"
              width={20}
              height={10}
              className="hidden sm:flex"
            />
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/social-icons/github.svg"
              alt="globe"
              width={24}
              height={24}
            />
            <Link
              href="https://github.com/JavaScript-Mastery-PRO/Cohort5_DynamicDuo_CarRent"
              className="text-small-bold md:text-paragraph-bold"
            >
              Source Code
            </Link>
            <Image
              src="/web-icons/carousel-right-arrow.svg"
              alt="globe"
              width={20}
              height={10}
              className="hidden sm:flex"
            />
          </div>
        </div>
      </section>
    </DarkContainer>
  );
};

export default CaseDetailsHeader;
