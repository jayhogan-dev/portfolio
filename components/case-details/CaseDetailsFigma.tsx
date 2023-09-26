import Image from "next/image";

interface CaseDetailsFigmaProps {
  figmaDesign: string;
}

const CaseDetailsFigma = ({ figmaDesign }: CaseDetailsFigmaProps) => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="flex bg-primary-blue-light dark:bg-primary-blue-dark p-3 md:p-5 text-white w-full items-center justify-center">
        <p className="uppercase text-sm font-semibold md:text-xl">
          High-Fidelity Figma Design
        </p>
      </div>
      <div className="relative w-full h-60 sm:h-96 md:h-[500px] lg:h-[600px] xl:h-[750px]">
        <Image
          src={figmaDesign}
          alt="figma"
          fill
        />
      </div>
    </section>
  );
};

export default CaseDetailsFigma;
