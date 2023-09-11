import Image from "next/image";
import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";

const Testimonials = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <div className="w-72 sm:w-full">
          <SectionTitle title="What they say about me" />
        </div>
        <div className="relative -top-24 -right-[52px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[150px] sm:-top-14 sm:-right-0 sm:-left-10 lg:w-[200px] lg:-top-[56px] lg:-left-[50px]" />
        {/* Testimonials */}
        <article className="flex flex-col">
          <div className="flex gap-5 justify-between items-start">
            {/* Image */}
            <div className="flex items-center justify-center h-48 w-48 bg-primary-blue-light dark:bg-primary-blue-dark rounded-lg">
              <h1 className="text-[100px] font-black text-white">A</h1>
            </div>
            {/* Arrows controlled by state */}
            <div className="flex items-center gap-3">
              {/* Left circle */}
              <Button className="p-3 bg-white">
                <Image
                  src="/web-icons/carousel-left-arrow.svg"
                  alt="left arrow"
                  height={20}
                  width={20}
                />
              </Button>
              <Button className="p-3 bg-white">
                <Image
                  src="/web-icons/carousel-right-arrow.svg"
                  alt="right arrow"
                  height={20}
                  width={20}
                />
              </Button>
            </div>
          </div>
        </article>
      </section>
    </DarkContainer>
  );
};

export default Testimonials;
