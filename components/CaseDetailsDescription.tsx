import DarkContainer from "./containers/Dark";

interface CaseDetailsDescriptionProps {
  description: string;
  pageFeatures: string;
  userFeatures: string;
}

const CaseDetailsDescription = ({
  description,
  pageFeatures,
  userFeatures,
}: CaseDetailsDescriptionProps) => {
  return (
    <DarkContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center w-full">
        <div className="w-full sm:w-[500px] md:w-[600px] lg:w-[880px]">
          <p className="text-small-regular sm:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800">
            {description}
          </p>
          <br />
          <p className="text-small-regular sm:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800">
            {pageFeatures}
          </p>
          <br />
          <p className="text-small-regular sm:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800">
            {userFeatures}
          </p>
        </div>
      </section>
    </DarkContainer>
  );
};

export default CaseDetailsDescription;
