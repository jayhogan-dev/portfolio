import DarkContainer from "./containers/Dark";

interface CaseDetailsDescriptionProps {
  description: string;
}

const CaseDetailsDescription = ({
  description,
}: CaseDetailsDescriptionProps) => {
  const paragraphs = description
    .split("\n")
    .filter((indParagraph) => indParagraph.trim() !== "");

  return (
    <DarkContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[60px] items-center justify-center w-full">
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[880px]">
          {paragraphs.map((indParagraph, index) => (
            <p
              key={index}
              className="text-small-regular mt-4 sm:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800"
            >
              {indParagraph}
            </p>
          ))}
        </div>
      </section>
    </DarkContainer>
  );
};

export default CaseDetailsDescription;
