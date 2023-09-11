import Image from "next/image";
import Link from "next/link";

const FeaturedProjectsCard = () => {
  return (
    <article className="flex flex-col w-full">
      <div className="flex flex-col bg-blue-500 rounded-2xl py-11 px-6">
        <div className="flex flex-col gap-7">
          <h1 className="text-heading3 text-white whitespace-nowrap">
            Morent -
            <br className="md:hidden" /> A Car Rental{" "}
            <br className="md:hidden" />
            Application
          </h1>
          <div className="flex w-full gap-3 text-center">
            <div className="p-3 bg-blue-400 rounded-sm">
              <p className="text-small-regular text-white">React, Next.js</p>
            </div>
            <div className="p-3 bg-blue-400 rounded-sm">
              <p className="text-small-regular text-white">Next.js, MongoDB</p>
            </div>
          </div>
          <Link
            href="/"
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
        <Image
          src="/morent-laptop.png"
          alt="laptop"
          height={100}
          width={300}
        />
      </div>
    </article>
  );
};

export default FeaturedProjectsCard;
