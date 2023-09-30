import CaseDetailsOtherStudyCard from "./CaseDetailsOtherStudyCard";
import DarkContainer from "../containers/Dark";

const CaseDetailsOtherStudies = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center w-full">
        <div className="flex mt-5 flex-col gap-3 w-full sm:w-[500px] md:w-[600px] lg:w-[880px]">
          <h3 className="text-xs text-primary-blue-light dark:text-primary-blue-dark font-semibold">
            Projects
          </h3>
          <h2 className="text-heading3 mb-2">Other Case Studies</h2>
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <CaseDetailsOtherStudyCard
              title="Morent"
              description="Test"
              image="/case-details/morent-figma.png"
              link="morent"
            />
            <CaseDetailsOtherStudyCard
              title="Jobit"
              description="Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by..."
              image="/case-details/jobit-figma.png"
              link="jobit"
            />
          </div>
        </div>
      </section>
    </DarkContainer>
  );
};

export default CaseDetailsOtherStudies;
