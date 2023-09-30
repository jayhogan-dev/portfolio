import { Button } from "@/components/ui/button";
import Image from "next/image";
import DarkContainer from "./containers/Dark";
import Link from "next/link";

const Hero = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center pt-6 gap-6 mb-10 md:flex-row md:justify-between lg:gap-10 xl:gap-32 lg:mb-24">
        <div className="flex flex-col gap-4 w-full lg:w-2/5">
          <h2 className="font-semibold text-primary-blue-light dark:text-primary-blue-dark text-sm lg:text-xl uppercase leading-5 tracking-[4px] lg:tracking-[6px]">
            Hi, I am Jay
          </h2>
          <h1 className="text-primary-black-300 dark:text-white text-4xl leading-[115%] lg:text-heading2 xl:text-heading1 z-10 font-bold w-[320px] lg:w-[400px] xl:w-[500px]">
            Professional Web Developer based in USA
            <div className="relative -top-14 -z-10 bg-gradient-to-r from-cyan-800 via-cyan-400 to-yellow-300 h-4 w-[280px] lg:w-[370px] lg:-top-[70px] xl:h-6 xl:w-[490px] xl:-top-[110px]" />
          </h1>
          <p className="-mt-4 mb-3 text-small-regular lg:text-body-regular text-primary-white-500 dark:text-primary-white-800">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </p>
          <div className="flex flex-col w-full gap-4 lg:flex-row">
            <Link
              href="/case-studies"
              className="flex items-center w-full p-2 justify-center rounded-3xl text-sm bg-primary-blue-light dark:bg-primary-blue-dark font-semibold text-white lg:w-1/3"
            >
              My Work
            </Link>
            <Button
              variant="default"
              className="lg:w-2/3"
              size="lg"
            >
              <div className="flex w-full justify-between items-center truncate">
                <span className="text-primary-white-500">
                  jayhogan.dev@gmail.com
                </span>
                <Image
                  src="/web-icons/frame.svg"
                  alt="copy"
                  width={20}
                  height={20}
                />
              </div>
            </Button>
          </div>
        </div>
        <div className="relative flex w-full h-72 xs:h-96 sm:w-[80%] md:w-full lg:w-2/3 items-center lg:h-[550px] max-w-[600px]">
          <Image
            src="/hero.png"
            alt="copy"
            fill
          />
        </div>
      </section>
    </DarkContainer>
  );
};

export default Hero;
