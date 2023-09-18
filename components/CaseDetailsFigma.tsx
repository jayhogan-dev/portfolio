import Image from "next/image";

interface CaseDetailsFigmaProps {
  imgUrl: string;
}

const CaseDetailsFigma = ({ imgUrl }: CaseDetailsFigmaProps) => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex bg-primary-blue-light dark:bg-primary-blue-dark p-3 md:p-5 text-white w-full items-center justify-center">
        <p className="uppercase text-sm font-semibold md:text-xl">
          High-Fidelity Figma Design
        </p>
      </div>
      <div className="relative w-full h-52 md:h-96 lg:h-[475px] xl:h-[550px]">
        <Image
          src={imgUrl}
          alt="figma"
          fill
        />
      </div>
    </section>
  );
};

export default CaseDetailsFigma;
