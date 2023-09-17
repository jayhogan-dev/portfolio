import Image from "next/image";
import LightContainer from "./containers/Light";

interface CaseDetailsProblemStatementProps {
  statement: string;
  image: string;
  altText: string;
}

const CaseDetailsProblemStatement = ({
  statement,
  image,
  altText,
}: CaseDetailsProblemStatementProps) => {
  return (
    <LightContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center w-full">
        <div className="flex mt-5 flex-col gap-3 w-full sm:w-[500px] md:w-[600px] lg:w-[880px]">
          <h3 className="text-xs text-primary-blue-light dark:text-primary-blue-dark font-semibold">
            Problem
          </h3>
          <h2 className="text-heading3 mb-2">Problem Statement</h2>
          <p className="text-small-regular sm:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800">
            {statement}
          </p>
          <div className="mt-2 relative w-full h-48 xxs:h-64 md:h-[275px] lg:h-[480px]">
            <Image
              src={image}
              alt={altText}
              fill
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </LightContainer>
  );
};

export default CaseDetailsProblemStatement;
